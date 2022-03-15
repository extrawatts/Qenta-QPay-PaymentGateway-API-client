import * as enums from './client.enum'
import WithTranable from './client/tranable'
import { generateID } from './util'
import Client from './client'

export default WithTranable(Client)

export function GENERATE_MEMBER_ID(key: string): string {
  return generateID(key).substring(0, 60)
}

export { enums as ENUMS }

export * from './config.type'
export * from './client.type'
export * from './client.enum'
export * from './client/tranable.type'
