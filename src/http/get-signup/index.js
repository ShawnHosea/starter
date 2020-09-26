const Layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')


exports.handler = async function Signup (req) {

  let body = Layout({  
      content: 
      `<div class="text-center">
        <h3>Create your account</h3>

        <form action="/signup" method="POST">
            <div>
                <div class="m1">
                    <label for="email"><b>E-mail:</b></label>
                    <input class="border-solid border1 border-g3" type="email" placeholder="Enter email" name="email" required>
                </div>

                <div class="m1">
                    <label for="password"><b>Password:</b></label>
                    <input class="border-solid border1 border-g3" type="password" placeholder="Enter Password" name="password" required>
                </div>

                <div>
                    <button 
                    class="uppercase no-underline pt-1 pb-1 pr2 pl2 bg-g10 text-g0 radius0 cursor-pointer bg-h5 text-h2 bg-d1 m1" 
                    type="submit">Submit</button>
                </div>

                <div>
                    <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
                </div>
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
    body
  }
}