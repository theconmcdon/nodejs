const path = require('path');
const fs = require('fs');
const rp = require('request-promise');
const request = require('request');

const chirps = [{
    username: '@theconmcdon',
    text: 'what up'
},
{
    username: '@eee',
    text: 'first post'
},
{
    username: '@2007mcchickengirl',
    text: 'eatin beans wtf'
},
{
    username: '@toastymane',
    text: 'yesssiir'
},
{
    username: '@carrieunderwood',
    text: 'haha'
}]

const chirpPath = path.join(__dirname, '../chirps.json');

fs.writeFile(chirpPath, JSON.stringify(chirps), err => {
    if (err) {console.log(err)};
})

fs.readFile(chirpPath, {
    encoding: "UTF-8"
}, (err, data) => {
    JSON.parse(data).forEach(chirp => {
        console.log('\n')
        console.log(chirp.username)
        console.log(chirp.text)
    });
});


