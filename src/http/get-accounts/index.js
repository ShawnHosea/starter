const Layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')
const data = require('@begin/data')

exports.handler = async function accounts (req) {

let accounts = await data.get({
    table:'accounts'
})
console.log(accounts)


let table = 'accounts'

let tableCount = await data.count({table})
console.log(tableCount)

let body = Layout({  
  content: 
`
<div>
  <h2>Accounts</h2>
  <p>${JSON.stringify(accounts, null, 1)}</p>
  <h2>Table Count</h2>
  <p>${JSON.stringify(tableCount)}</p>
</div>
`
})
  return {
    statusCode: 201,
    headers: {
      'content-type': 'HTML; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
