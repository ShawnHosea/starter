let arc = require('@architect/functions')
let data = require('@begin/data')


exports.handler = async function destroy (req) {
  // let key = arc.http.helpers.bodyParser(req).key // Base64 decodes + parses body
  
  let accounts = await data.get({
    table:'accounts'
})

console.log(accounts)

//   // Return oldest account first
//   table.sort((a, b) => a.created > b.created)

let table = 'accounts'

let tableCount = await data.count({table})
console.log(tableCount)
  

  await data.destroy([
    {
    table: 'accounts',
    key: 'VQEyW70lsP'
    },
    {
    table: 'accounts',
    key: 'l7r279nlCA'
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