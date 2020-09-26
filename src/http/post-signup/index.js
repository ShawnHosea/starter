let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function post (req) {
  let account = arc.http.helpers.bodyParser(req) // Base64 decodes + parses body
  account.created = account.created || Date.now()
  
  await data.set({
    table: 'spots',
    ...account
  })
  return {
    statusCode: 302,
    headers: {
      'location': '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
