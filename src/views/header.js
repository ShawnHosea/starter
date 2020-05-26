
module.exports = function Header(props) {
    props = props || {}

   
return `
    <div className='Header'>
        <div className='HeaderGroup'>
            <a href="/"><img height='40px' alt='logo' src="/_static/logo.svg"/></a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
    </div>
    `;
}
    