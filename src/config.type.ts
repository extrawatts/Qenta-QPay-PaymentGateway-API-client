import { RequestInit } from 'node-fetch'

export type Config = {
  baseUrl?: string
  http?: RequestInit
  customerId?: string
  language?: string
  shopId?: string
  secret?: string
}
