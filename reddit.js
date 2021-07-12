let path = require('path');
let fs = require('fs');
let request = require('request');
let rp = require('request-promise');


let redditPath = path.join(__dirname, '../data.json');


request('https://reddit.com/r/popular.json', (err, res, body) => {
    if(err) console.log(err)

    JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSync(redditPath,item.data.title + '\n')

    JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSync(redditPath,item.data.url + '\n')

    JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSync(redditPath,item.data.author + '\n')
    });


//????????????????????????????????????????????????????????????????????????????
//who wrote this lab i've been staring at this for almost three days with no idea how to do any of this
