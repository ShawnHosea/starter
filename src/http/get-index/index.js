const Layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')


exports.handler = async function Index (req) {

  let body = Layout({ 
    content: 
    `<div>
        <a href="signup">Create new account</a>
    </div>

    <div>
      <form action="/signup/delete" method="POST">
          <div>
              <button 
              class="uppercase no-underline pt-1 pb-1 pr2 pl2 bg-g10 text-g0 radius0 cursor-pointer bg-h5 text-h2 bg-d1 m1" 
              type="submit">Delete Accounts</button>
          </div>
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
    body,
    
  }
}