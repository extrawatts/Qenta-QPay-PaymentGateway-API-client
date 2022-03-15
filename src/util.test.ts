import test from 'ava'
import * as Util from './util'

test('.generateID returns key with hash', (t) => {
  t.regex(Util.generateID('foo'), /foo-\w{32}/)
})

test('.generatePluginVersion returns base64', (t) => {
  t.is(Util.generatePluginVersion(), 'NC4yLjc7UWVudGEvQ2hlY2tvdXRQYWdlO1FlbnRhQ0VFX1FQYXk7My40LjA=')
})
