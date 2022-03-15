import test from 'ava'
import QENTA, {ENUMS, GENERATE_MEMBER_ID} from './qenta'

let qenta: any

test.beforeEach(() => {
  qenta = new QENTA()
})

test('new returns QENTA instance', (t) => {
  t.true(qenta instanceof QENTA)
})

test('.ENUMS returns enum object', (t) => {
  t.deepEqual(Object.keys(ENUMS), [
    'PaymentType',
    'Plugin',
    'Lib'
  ])
})

test('.GENERATE_MEMBER_ID returns generated memberID', (t) => {
  const ID = GENERATE_MEMBER_ID('key')
  t.regex(ID, /^key-\w{32}$/)
})

test('.GENERATE_MEMBER_ID returns max 60 chars', (t) => {
  const ID = GENERATE_MEMBER_ID('0123456789-0123456789-0123456789-0123456789')
  t.regex(ID, /^.{60}$/)
})

test('.config returns IConfig', (t) => {
  const expect = {
    baseUrl: 'https://api.qenta.com/page/init-server.php',
    http: {
      timeout: 180000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json, text/plain, */*',
        'User-Agent': 'QentaCEE_QPay;3.3.0;QentaCEE_Stdlib;3.0.2;Zend_Framework;1.12.16;PHP;5.2;'
      }
    }
  }
  t.deepEqual(qenta.config, expect)
})

test('.entryTransaction is function', (t) => {
  t.is(typeof qenta.entryTransaction, 'function')
})

test('.execTransaction is function', (t) => {
  t.is(typeof qenta.execTransaction, 'function')
})
