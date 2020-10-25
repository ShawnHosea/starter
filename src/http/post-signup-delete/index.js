let arc = require('@architect/functions')
let data = require('@begin/data')


exports.handler = async function destroy (req) {
  // let key = arc.http.helpers.bodyParser(req).key 
  // Base64 decodes + parses body

  // console.log(key)
  
  await data.destroy([
    {
    table: 'accounts',
    key: '7XEqxjzpuj'
    },
    {
    table: 'accounts',
    key: 'M1kq893Mso'
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