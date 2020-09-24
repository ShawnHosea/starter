let tiny = require('tiny-json-http')
let sandbox = require('@architect/sandbox')
let test = require('tape')

// TODO: Learn Tap/Tape & Tiny

test('Start the Sandbox', async t => {
    t.plan(1)
    let result = await sandbox.start()
    t.ok(result, 'Sandbox successfully started')
  })
  
//   test('Tests go here', t => {
//     // Make use of various Sandbox resources in your tests...
//   })
  
  test('Shut down the Sandbox', async t => {
    t.plan(1)
    let result = await sandbox.end()
    t.ok(result, 'Sandbox successfully shut down')
  })