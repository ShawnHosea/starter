const arc = require('@architect/functions')
let auth = require('@architect/shared/auth')



module.exports = function Header(props) {
    
    let logo = arc.static('logo.svg')

    // if (!auth) {
    //     return `<a href="/login"><button class="uppercase no-underline pt-1 pb-1 pr2 pl2 bg-p4 text-g0 radius0 cursor-pointer bg-h5 bg-d1">Login</button></a>`
    // }

    // if (auth) {
    //     return `<a href="/logout"><button class="uppercase no-underline pt-1 pb-1 pr2 pl2 bg-p4 text-g0 radius0 cursor-pointer bg-h5 bg-d1">Login</button></a>`
    // }

    // let notAuthed = `<a href=/login>Login</a> | <a href=/register>Register</a> | <a href=/reset>Reset Password</a>`
   
return `
    <div class='Header'>
        <div class='HeaderGroup'>
            <a href="/"><img height='40px' alt='logo' src="${logo}"></a>
            <a class="uppercase no-underline" href="/about">About</a>
            <a class="uppercase no-underline" href="/contact">Contact</a>
            <a href="/login"><button class="uppercase no-underline pt-1 pb-1 pr2 pl2 bg-p4 text-g0 radius0 cursor-pointer bg-h5 bg-d1">Login</button></a>
            
        </div>
    </div>
    `;
}
    