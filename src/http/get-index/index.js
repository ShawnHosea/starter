const Layout = require('@architect/views/layout.js')
const Static = require('@architect/shared/static.json')


exports.handler = async function Index (req) {
  let body = Layout({ title: "home" })
  
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body
  }
}