const Footer = require('./footer')
const Header = require('./header')
const Main = require('./main')

module.exports = function Layout (props) {

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
    <title>Personal Website</title>
    <link rel="stylesheet" type="text/css" href="_static/styles.css}">
</head>
<body>
    <div>
        ${Header(props)}
        ${Main(props)}
        ${Footer(props)}
        <p class="text-p3 border-solid">Hello World</p>
    </div>
</body>
</html>
`;
}


       
