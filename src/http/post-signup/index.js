let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function post (req) {
  let account = arc.http.helpers.bodyParser(req) // Base64 decodes + parses body
  
  console.log(account)
  
  await data.set({
    table: 'accounts',
    account
  })
  
  return {
    statusCode: 302,
    headers: {
      'location': '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
