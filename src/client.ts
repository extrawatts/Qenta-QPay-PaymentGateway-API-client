import * as qs from 'qs'
import fetch, { Response } from 'node-fetch';
import { BadRequest } from './errors'
import { Config } from './config.type'
import { buildByEnv, defaults } from './config'
import { UnknownParams } from './client.type'
import { Fingerprint } from './lib/fingerpring';

export default class Client {
  public config: Config

  constructor(config: Config = {}) {
    this.config = {
      ...defaults,
      ...config,
      ...buildByEnv(),
      http: {
        ...defaults.http,
        ...config.http,
        ...buildByEnv().http
      }
    }
  }

  public async post<T, U>(data: T): Promise<U> {
    const res: Response = await fetch(this.config.baseUrl as string, {
      method: 'POST',
      body: qs.stringify(data, { encode: false }),
      ...this.config.http,
    })

    const parsed: any = qs.parse(await res.text(), { decoder: decodeURIComponent })
    if (this.isError(parsed)) {
      throw new BadRequest(`Bad Request`).
        setResponse(res).parseError(parsed)
    }

    return parsed as U
  }

  public isError(res: UnknownParams): any {
    return (res.message)
  }

  public async requestFingerPrint<T, U>(data: T): Promise<U> {
    const parsed: any = Fingerprint.generate(data);
    return parsed as U;
  }
}
