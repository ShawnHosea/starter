const data = require('@begin/data')

exports.handler = async function accounts (req) {

let table = await data.get({
    table:'accounts'
})

console.log(table)

//   // Return oldest account first
//   table.sort((a, b) => a.created > b.created)

let table = 'accounts'

let tableCount = await data.count({table})
console.log(tableCount)
  

//   run = accounts.forEach(account => {

//     console.log(account)
   
//  });


  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      table,
      tableCount
    })
  }
}
