let arc = require('@architect/functions')
let data = require('@begin/data')


exports.handler = async function destroy (req) {
  // let key = arc.http.helpers.bodyParser(req).key // Base64 decodes + parses body
  


  await data.destroy([
    {
    table: 'spots',
    key: 'p23vo5pDcn'
    },
    {
    table: 'accounts',
    key: 'VQ373jx0Cz'
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