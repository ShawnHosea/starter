let arc = require('@architect/functions')
let data = require('@begin/data')


exports.handler = async function destroy (req) {
  // let key = arc.http.helpers.bodyParser(req).key // Base64 decodes + parses body
  
  let table = await data.get({table:'accounts'})

  console.log(table)
  
    // Return oldest account first
    table.sort((a, b) => a.created > b.created)
    
    let tableCount = await data.count({table})
    console.log(tableCount)

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