const data = require('@begin/data')

exports.handler = async function accounts (req) {
  let accounts = await data.get({
    table: 'accounts'
  })
  let table = 'accounts'
  
  await data.count({table})
  console.log(table)
  // Return oldest account first
  accounts.sort((a, b) => a.created > b.created)

  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      accounts,
      table
    })
  }
}
