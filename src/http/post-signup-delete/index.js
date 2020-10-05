let arc = require('@architect/functions')
let data = require('@begin/data')


exports.handler = async function destroy (req) {
  // let key = arc.http.helpers.bodyParser(req).key // Base64 decodes + parses body
  
  let accounts = await data.get({
    table: 'accounts'
  })

  // Return oldest account first
  accounts.sort((a, b) => a.created > b.created)

  let table = 'accounts'
  let tableCount = await data.count({table})
  console.log(tableCount)

  key = accounts.forEach(account => {

    console.log(account)
   
 });

  await data.destroy({
    table: 'accounts',
    key
    
  })
  

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}