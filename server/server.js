let path = require('path');
let fs = require('fs');
let request = require('request');

let dumpPath = path.join(__dirname, '../dumps.json');

let dumps = [{
    text: 'hey'
},
{
    text: 'bored'
},
{
    text: 'yep'
},
{
    text: 'fourth one'
},
{
    text: 'fifth one'
}]

fs.writeFile(dumpPath, res.body, err => {
    if(err) console.log(err);

    console.log('please work')
});