const Layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')


exports.handler = async function Index (req) {

  let body = Layout({ 
    content: 
    `<div>
        <a href="signup">Create new account</a>
    </div>
    ` 
  })

  
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body
  }
}