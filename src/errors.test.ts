import test from 'ava'
import { BadRequest } from './errors'


test('new returns error instance', (t) => {
  t.true(new BadRequest() instanceof BadRequest)
})

test('variables is message as instance', (t) => {
  const err = new BadRequest('yo')
  t.is(err.message, 'yo')
})

test('.parseError returns errpr info as array', (t) => {
  const err = new BadRequest().parseError({ message: 'CUSTOMERID+is+missing.+FINGERPRINT+is+invalid.' })
  t.is(err.errors[0], 'Customer ID is required')
  t.is(err.errors[1], 'Fingerprint is invalid')
  t.is(err.errInfo[0], 'CUSTOMERID+is+missing')
  t.is(err.errInfo[1], 'FINGERPRINT+is+invalid')
})

test('.parseError returns unique error infos', (t) => {
  const err = new BadRequest().parseError({ message: 'CUSTOMERID+is+missing.+FINGERPRINT+is+invalid.' })
  t.deepEqual(err.errors, ['Customer ID is required', 'Fingerprint is invalid'])
  t.deepEqual(err.errInfo, ['CUSTOMERID+is+missing', 'FINGERPRINT+is+invalid'])
})