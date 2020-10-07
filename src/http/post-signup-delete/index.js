let arc = require('@architect/functions')
let data = require('@begin/data')


exports.handler = async function destroy (req) {
  // let key = arc.http.helpers.bodyParser(req).key // Base64 decodes + parses body
  


  await data.destroy([
    {
    table: 'accounts',
    key: 'R13PML5msQ'
    },
    {
    table: 'accounts',
    key: 'oy3WYYgMu5'
    }
])
  

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}