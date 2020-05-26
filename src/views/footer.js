module.exports = function Footer(props) {
    props = props || {}
    let date = new Date().getFullYear()

return `
    <div>
        <span>© ${date} Built by</span>
        <a href="https://shawnhosea.com/">ShawnHosea</a>
    </div>
    `
}
    
    
           
    