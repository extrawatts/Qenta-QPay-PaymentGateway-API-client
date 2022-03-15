import test from 'ava'
import sinon = require('sinon')
import Client from '../client'
import { PaymentType } from '../client.enum'
import WithTranable from './tranable'
import { entryTransactionArgs, entryTransactionResult } from './tranable.type'

const Tranable = WithTranable(Client)
const tranable = new Tranable()

test.afterEach(() => {
  sinon.restore()
})

test('.entryTransaction calls API and returns fingerprint', async t => {
  const expect: entryTransactionResult = {
    customerId: 'D200001',
    shopId: '',
    language: 'en',
    secret: 'B8AKTPWBRMNBV455FG6M2DANE99WU2',
    pluginVersion: 'NC4yLjc7UWVudGEvQ2hlY2tvdXRQYWdlO1FlbnRhQ0VFX1FQYXk7My40LjA=',
    confirmUrl: 'https://www.example.com/confirm',
    orderReference: '999',
    amount: 128,
    currency: 'USD',
    paymentType: 'CCARD',
    orderDescription: 'melihyuxel@gmail.com Mel Yuk',
    successUrl: 'https://www.example.com/success',
    pendingUrl: 'https://www.example.com/pending',
    cancelUrl: 'https://www.example.com/cancel',
    failureUrl: 'https://www.example.com/failure',
    serviceUrl: 'https://www.example.com/service',
    consumerMerchantCrmId: '02362d0e04af832159f01588c8337107',
    consumerIpAddress: '127.0.0.1',
    consumerUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:98.0) Gecko/20100101 Firefox/98.0',
    customerStatement: ' Id:4h7v8D6Q9q',
    requestFingerprintOrder: 'customerId,shopId,language,secret,pluginVersion,confirmUrl,orderReference,amount,currency,paymentType,orderDescription,successUrl,pendingUrl,cancelUrl,failureUrl,serviceUrl,consumerMerchantCrmId,consumerIpAddress,consumerUserAgent,customerStatement,requestFingerprintOrder',
    requestFingerprint: 'cd962e36e53eca16deac24066779d14c6dea6b80796841bb7ebb7bc6d591db2e6e080e6c90c291bce5b0682e69840b6964f3f3aba5608ac67fb84a5c0f5013e3'
  }

  const args: entryTransactionArgs = {
    baseUrl: 'https://api.qenta.com/page/init-server.php/init',
    customerId: 'D200001',
    language: 'en',
    secret: 'B8AKTPWBRMNBV455FG6M2DANE99WU2',
    shopId: '',
    pluginVersion: "TWFnZW50bzsxLjkuMy40O1FlbnRhQ0VFX1FQYXkgMy40LjA7UWVudGEvQ2hlY2tvdXRQYWdlOzQuMi43",
    confirmUrl: "https://www.example.com/confirm",
    orderReference: "123",
    amount: 1,
    currency: "USD",
    paymentType: PaymentType.CCARD,
    orderDescription: "melihyuxel@gmail.com Mel Yuk",
    successUrl: "https://www.example.com/success",
    pendingUrl: "https://www.example.com/pending",
    cancelUrl: "https://www.example.com/cancel",
    failureUrl: "https://www.example.com/failure",
    serviceUrl: "https://www.example.com/service",
    consumerMerchantCrmId: "02362d0e04af832159f01588c8337107",
    consumerIpAddress: "127.0.0.1",
    consumerUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:98.0) Gecko/20100101 Firefox/98.0",
    customerStatement: " Id:4h7v8D6Q9q",
  } as entryTransactionArgs;

  const res = await tranable.entryTransaction(args)

  t.deepEqual(res, expect)
})