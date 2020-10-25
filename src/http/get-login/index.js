const Layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')


exports.handler = arc.http.async(login)


  let body = Layout({  
      content: 
      `<div class="wrapper">
        <div class="m-auto block-lg text-center">
          <button class="authBTN">Continue with Facebook</button>
          <br>
          <button class="authBTN">Continue with Apple</button>
          <br>
          <button class="authBTN">Continue with Google</button>
        </div>

        <div class="divider">
          <strong class="divider-title ng-binding">OR</strong>
        </div>
        
      <div class="text-center">
        <h3>Sign in with your email and password</h3>
       <form action="/login" method="POST">
                <div class="m1">
                    <label for="email"><b>E-mail:</b></label>
                    <input class="border-solid border1 border-g3" type="email" placeholder="Enter email" name="email" required>
                </div>

                <div class="m1">
                    <label for="password"><b>Password:</b></label>
                    <input class="border-solid border1 border-g3" type="password" placeholder="Enter password" name="password" required>
                </div>

                <div>
                    <label>
                      <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>
                    <button 
                    class="uppercase no-underline pt-1 pb-1 pr2 pl2 bg-g10 text-g0 radius0 cursor-pointer bg-h5 text-h2 bg-d1 m1" 
                    type="submit">Login</button>
                </div>

                <div>
                <p><a href="#">Forgot password?</a></p>
                </div>

        </form>
                <div class="divider"></div>
          <p class="mt2 font-black">Not a member?<a href="/signup"> Sign up here</a></p>
        </div>
      </div>
      `
    })

async function login(req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    account: req.session.account,
    body
  }
}
