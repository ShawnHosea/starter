const Layout = require('@architect/views/layout.js')

exports.handler = async function Contact (req) {
  let body = Layout({})
  
  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body
  }
}