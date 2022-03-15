import Client from '../client'
import { Constructor, generatePluginVersion } from '../util'
import {
  entryTransactionArgs,
  entryTransactionResult,
  execTransactionArgs,
  execTransactionResult
} from './tranable.type'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public async entryTransaction(args: entryTransactionArgs): Promise<entryTransactionResult> {
      const defaultData = {
        customerId: this.config.customerId,
        shopId: this.config.shopId,
        language: this.config.language,
        secret: this.config.secret,
        pluginVersion: generatePluginVersion(),
        confirmUrl: args.confirmUrl,
        orderReference: args.orderReference,
        amount: args.amount,
        currency: args.currency,
        paymentType: args.paymentType,
        orderDescription: args.orderDescription,
        successUrl: args.successUrl,
        pendingUrl: args.pendingUrl,
        cancelUrl: args.cancelUrl,
        failureUrl: args.failureUrl,
        serviceUrl: args.serviceUrl,
        consumerMerchantCrmId: args.consumerMerchantCrmId,
        consumerIpAddress: args.consumerIpAddress,
        consumerUserAgent: args.consumerUserAgent,
        customerStatement: args.customerStatement,
      }

      return this.requestFingerPrint<entryTransactionArgs, entryTransactionResult>({
        ...defaultData
      })
    }

    public async execTransaction(args: execTransactionArgs): Promise<execTransactionResult> {
      return this.post<execTransactionArgs, execTransactionResult>(args)
    }
  }
