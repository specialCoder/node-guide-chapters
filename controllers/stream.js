const fs = require('fs');

const copyFileStrem = ({form, to}) => {
    const readable = fs.createReadStream(from,{ encoding:'utf8'});
    const writable = fs.createWriteStream(to, {encoding:'utf8'});
    readable.pipe(writable);
}

const getBufferArray = () => {
    const chunks = [];
    const readable = fs.createReadStream('./assert/test1.txt');
    readable.on('data', (chunk) => {
        chunks.push(chunk);
    });

    readable.once('end', () => {
        console.log('eradable end:', chunks);
    })
}

const main = () => {
    copyFileStrem({
        from:'./assert/test1.txt',
        to:'./assert/test12.txt'
    });
}

module.exports = { 
    main,
    getBufferArray
}