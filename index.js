var path = require('path');

console.log(path.join(__dirname, 'data.json'));

//from server.js from nodefun

let path = require('path');
let fs = require('fs');

//creates a variable dataPath that saves the address where data.json is saved by starting at the directory and going back to the root
//in this index.js file the dots aren't necessary before data.json
let dataPath = path.join(__dirname, '../data.json');

//reads dataPath variable (the address of data.json) to allow access to its object (data)
fs.readFile(dataPath, {
    encoding: "UTF-8" //tells computer how to read the data
}, (err, data) => {
    //creates variable person and assigns it the full data of the object in data.json which it then parses to split into multiple units
    //that can be called individually    
    let person = JSON.parse(data);
    console.log(person.name)
    console.log(person.shirt)
});

//////////
const path = require('path');
const fs = require('fs');
const request = require('request')


let dataPath = path.join(__dirname, '../data.json');

request('https://www.reddit.com/r/popular.json', (err, res, body) => {
    if (err) {console.log(err)};
    //parses string data so it can be organized
    JSON.parse(body).data.children.forEach(item => {
        console.log(item.data.title);
    });
    //writes parsed response body data into data.json file
    fs.writeFile(dataPath, res.body, err => {
        if (err) {console.log(err)};        
    });
})

///////////////////////
const path = require('path');
const fs = require('fs');
const request = require('request')


let dataPath = path.join(__dirname, '../data.json');

request('https://www.reddit.com/r/popular.json', (err, res, body) => {
    if (err) {console.log(err)};
    //parses string data so it can be organized
    JSON.parse(body).data.children.forEach(item => {
        //appends each title to the data.json on 1 line each (\n) 
        fs.appendFileSync(dataPath, item.data.title + '\n');
    });
    
})