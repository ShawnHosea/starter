

module.exports = function Header(props) {
    props = props || {}

   
return `
    <div class='Header'>
        <div class='HeaderGroup'>
            <a href="/"><img height='40px' alt='logo' src="/_static/logo.png"/></a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <button>Login</button>
        </div>
    </div>
    `;
}
    