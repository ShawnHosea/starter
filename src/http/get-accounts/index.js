const data = require('@begin/data')

exports.handler = async function accounts (req) {

  let accounts = await data.get({
    table: 'accounts',
    key: ''
  })

  // Return oldest account first
  accounts.sort((a, b) => a.created > b.created)

  let table = 'accounts'
  let key = 'key'
  let tableCount = await data.count({table, key})

  run = accounts.forEach(account => {

    console.log(account)
   
 });

  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      accounts,
      tableCount,
      key
    })
  }
}
