const Layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')


exports.handler = async function Index (req) {

  let body = Layout({ 
    content: 
    `<div class="wrapper">
        <div class="m-auto block-lg text-center mt1">
          <a href="signup" class="uppercase no-underline pt-1 pb-1 pr2 pl2 bg-g10 text-g0 radius0 cursor-pointer bg-h5 text-h2 bg-d1 m0">Create new account</a>
        </div>

        <div class="divider">
          <strong class="divider-title ng-binding">OR</strong>
        </div>

        <h3 class="text-center m2">For Developer testing 👇🏾</h3>
        <div class="m-auto block-lg text-center mt1">
          <a href="/accounts"
          class="uppercase no-underline pt-1 pb-1 pr2 pl2 bg-g10 text-g0 radius0 cursor-pointer bg-h5 text-h2 bg-d1 ">Check Accounts</a>
        </div>
   

    <div class="m-auto block-lg text-center mt1">
      <form action="/signup/delete" method="POST">
         <button 
           class="uppercase no-underline pt-1 pb-1 pr2 pl2 bg-g10 text-g0 radius0 cursor-pointer bg-h5 text-h2 bg-d1 m1" type="submit">Delete Accounts</button>
      </form>
    </div>
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