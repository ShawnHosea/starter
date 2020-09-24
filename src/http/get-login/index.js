const Layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')


exports.handler = async function Login (req) {

  let body = Layout({  
      content: 
      `<div>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
        <form
        action="/login"
        method="GET"
       >
        <input
          name="text"
          type="text"
          autofocus="autofocus"
          class="border-solid"
        />
        </form>
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