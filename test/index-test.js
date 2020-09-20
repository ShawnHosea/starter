let tiny = require('tiny-json-http')
let sandbox = require('@architect/sandbox')
let test = require('tape')
let end

// test('sandbox.start', async t => {
//   t.plan(1)
//   end = await sandbox.start()
//   t.ok(true, 'start the sandbox')
// })

// // your tests will go here

// test('end', async t => {
//   t.plan(1)
//   end()
//   t.ok(true, 'shut down sandbox')
// })

// TODO: Check difference in 'ok' and 'equal'

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