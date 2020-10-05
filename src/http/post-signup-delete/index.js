let arc = require('@architect/functions')
let data = require('@begin/data')


exports.handler = async function destroy (req) {
  // let key = arc.http.helpers.bodyParser(req).key // Base64 decodes + parses body
  
  let table = 'accounts'
  let tableCount = await data.count({table})
  console.log(JSON.stringify({tableCount}))

  // let key = map(tableCount) {

  // }
  await data.destroy({
    table: 'accounts',
    key: 'Q7yq7D2qIB'
    
  })
  

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}