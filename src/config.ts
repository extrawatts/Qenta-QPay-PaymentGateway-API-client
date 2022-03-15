import * as process from 'process'
import {Config} from './config.type'


export const defaults: Config = {
  baseUrl: 'https://api.qenta.com/page/init-server.php',
  http: {
    timeout: 1000 * 60 * 3,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json, text/plain, */*',
      'User-Agent': 'QentaCEE_QPay;3.3.0;QentaCEE_Stdlib;3.0.2;Zend_Framework;1.12.16;PHP;5.2;'
    },
  }
}

export function buildByEnv(): Config {
  const c: Config = {}

  if (process.env.QENTA_ENDPOINT !== undefined) {
    c.baseUrl = process.env.QENTA_ENDPOINT
  }
  if (process.env.QENTA_TIMEOUT !== undefined) {
    c.http = {...c.http, timeout: +`${process.env.QENTA_TIMEOUT}`};
  }
  if (process.env.CUSTOMER_ID !== undefined) {
    c.customerId = process.env.CUSTOMER_ID
  }
  if (process.env.QENTA_LANGUAGE !== undefined) {
    c.language = process.env.QENTA_LANGUAGE
  }
  if (process.env.QENTA_SHOP_ID !== undefined) {
    c.shopId = process.env.QENTA_SHOP_ID
  }
  if (process.env.QENTA_SECRET !== undefined) {
    c.secret = process.env.QENTA_SECRET
  }
  return c
}
