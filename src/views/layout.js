const Footer = require('./footer')
const Header = require('./header')

module.exports = function Layout (props) {


return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
    <title>Personal Website</title>
</head>
<body>
    <div>
        ${Header(props)}
        <p>Hello World</p>
        ${Footer(props)}
    </div>
</body>
</html>
`;
}


       
