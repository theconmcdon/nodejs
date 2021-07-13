let path = require('path');
let fs = require('fs');
let request = require('request');
let rp = require('request-promise');




let redditPath = path.join(__dirname, '/popular-articles.json')
let postArray = []

rp('https://reddit.com/r/popular.json')
.then((body) => {
    JSON.parse(body).data.children.forEach(item => {
        let postTitle = item.data.title
        let postURL = item.data.url 
        let postAuthor = item.data.author
        let singlePost = {
            title: postTitle,
            url: postURL,
            author: postAuthor
        }
        postArray.push(singlePost)
        
    })
    console.log(postArray)
    fs.writeFile(redditPath, JSON.stringify(postArray), err => {
        if (err) {console.log(err)};
    })
})
.catch((err) => {
    console.log(err)
});

