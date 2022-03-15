import { Result } from '../client.type'

export type entryTransactionArgs = {
  pluginVersion: string
  confirmUrl: string
  orderReference?: string
  amount: number
  currency: string
  paymentType: string
  orderDescription?: string
  successUrl: string
  pendingUrl: string
  cancelUrl: string
  failureUrl: string
  serviceUrl: string
  consumerMerchantCrmId: string
  consumerIpAddress: string
  consumerUserAgent: string
  customerStatement: string
}

export type entryTransactionResult = Result & {
  customerId: string
  shopId: string
  language: string
  secret: string
  pluginVersion: string
  confirmUrl: string
  orderReference?: string
  amount: number
  currency: string
  paymentType: string
  orderDescription?: string
  successUrl: string
  pendingUrl: string
  cancelUrl: string
  failureUrl: string
  serviceUrl: string
  consumerMerchantCrmId: string
  consumerIpAddress: string
  consumerUserAgent: string
  customerStatement: string
  requestFingerprintOrder: string
  requestFingerprint: string
}

export type execTransactionArgs = {
  customerId: string
  shopId: string
  language: string
  secret: string
  pluginVersion: string
  confirmUrl: string
  orderReference?: string
  amount: number
  currency: string
  paymentType: string
  orderDescription?: string
  successUrl: string
  pendingUrl: string
  cancelUrl: string
  failureUrl: string
  serviceUrl: string
  consumerMerchantCrmId: string
  consumerIpAddress: string
  consumerUserAgent: string
  customerStatement: string
  requestFingerprintOrder: string
  requestFingerprint: string
}

export type execTransactionResult = Result & {
  redirectUrl: string
}
