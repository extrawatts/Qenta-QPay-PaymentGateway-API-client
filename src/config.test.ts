import test from 'ava'
import * as config from './config'
import * as process from 'process'

test('defaults returns default config', (t) => {
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
  t.deepEqual(config.defaults, expect)
})

test('.buildByEnv returns config', (t) => {
  t.deepEqual(config.buildByEnv(), {})
})

test('.buildByEnv returns config with env', (t) => {
  process.env.QENTA_ENDPOINT = 'https://foo.com'
  process.env.QENTA_TIMEOUT = '123'
  process.env.CUSTOMER_ID = 'foo-custId'
  process.env.QENTA_LANGUAGE = 'foo-lang'
  process.env.QENTA_SHOP_ID = 'foo-shopid'
  process.env.QENTA_SECRET = 'foo-secret'

  const expect = {
    baseUrl: 'https://foo.com',
    http: {
      timeout: 123
    },
    customerId: 'foo-custId',
    language: 'foo-lang',
    shopId: 'foo-shopid',
    secret: 'foo-secret'
  }
  t.deepEqual(config.buildByEnv(), expect)
})
