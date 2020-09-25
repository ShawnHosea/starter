const Layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')


exports.handler = async function Login (req) {

  let body = Layout({  
      content: 
      `<div class="text-center">
        <h3>Sign in with your email and password</h3>

        <form action="/login" method="POST">
            <div>
                <div class="m1">
                    <label for="uname"><b>Username</b></label>
                    <input class="border-solid border1 border-g3" type="text" placeholder="Enter Username" name="uname" required>
                </div>

                <div class="m1">
                    <label for="psw"><b>Password</b></label>
                    <input class="border-solid border1 border-g3" type="password" placeholder="Enter Password" name="psw" required>
                </div>

                <div>
                    <button 
                    class="uppercase no-underline pt-1 pb-1 pr2 pl2 bg-g10 text-g0 radius0 cursor-pointer bg-h5 text-h2 bg-d1 m1" 
                    type="submit">Login</button>
                </div>

                <div>
                    <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
                </div>
            </div>

            <div>
                <p><a href="#">Forgot password?</a></p>
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