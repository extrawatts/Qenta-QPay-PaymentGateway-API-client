import test from 'ava'
import * as client from './client.enum'

test('exports PaymentType as enum', (t) => {
  const expect = {
    CCARD: 'CCARD',
    CCARD_MOTO: 'CCARD_MOTO'
  }
  t.deepEqual(client.PaymentType, expect)
})
