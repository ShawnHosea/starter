let data = require('@begin/data')

async function startUpScript() {
  let table = 'greetings'
  let greetings = [
    { table, key: 'Māori', greeting: `Kia ora` },
    { table, key: 'Swahili', greeting: `Hujambo` },
    { table, key: 'Japanese', greeting: `Kon'nichiwa` } ]
  await data.set(greetings)
}
module.exports = startUpScript