const arc = require('@architect/functions')


module.exports = function Header(props) {
    props = props || {}
    let logo = arc.static('logo.png')

   
return `
    <div class='Header'>
        <div class='HeaderGroup'>
            <a href="/"><img height='40px' alt='logo' href="${logo}"></a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <button>Login</button>
        </div>
    </div>
    `;
}
    