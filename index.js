const http = require('http');
const fs = require('fs');
const path = require('path');

// const { myDog, Food } = require('./controllers/event');
// myDog.emit('chew', new Food());

const [arg1,arg2, ...argList] = process.argv;
console.log('input argv:', argList);


http.createServer((request, response) => {
    // console.log('request-->', request.url);
    response.writeHead(200,{
        'content-type':'text/html'
    });
    response.write('<p>hello world</p>');
    response.end();
    // response.
}).listen(7777, () => {
    console.log('port 7777 is listening....');
});