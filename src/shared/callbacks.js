module.exports = function callBacks() {

    const posts = [
        {title: 'Post One', body: 'This is post one'},
        {title: 'Post Two', body: 'This is post two'}
    ]

    return
    function getPosts() {
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`;
            })
            document.body.innerHTML = output;
        }, 1000)
    }
    getPosts();
}