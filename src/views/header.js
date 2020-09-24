const arc = require('@architect/functions')


module.exports = function Header(props) {
    props = props || {}
    let logo = arc.static('logo.png')

   
return `
    <div class='Header'>
        <div class='HeaderGroup'>
            <a href="/"><img height='40px' alt='logo' src="${logo}"></a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/login"><button class="pt-1 pb-1 pr2 pl2 bg-g10 text-g0 bg-h5:hover">Login</button></a>
        </div>
    </div>
    `;
}
    