const arc = require('@architect/functions')


module.exports = function Header(props) {
    props = props || {}
    let logo = arc.static('logo.png')
    console.log(logo)

   
return `
    <div class='Header'>
        <div class='HeaderGroup'>
            <a href="/"><img height='40px' alt='logo' src="${logo}"></a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <button>Login</button>
        </div>
    </div>
    `;
}
    