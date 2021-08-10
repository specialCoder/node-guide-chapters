const readline = require('readline');

const readTextLine = () => {
    const rl = readline.createInterface({
        input: process.stdin, //fs.createReadStream('./assert/test1.txt'),
        output: process.stout,
        // terminal:false
    });

    rl.question('input number:', (num) => {
        console.log('num==>', num);
        rl.close();
    })

    rl.on('line', (line) => {
        console.log('line-->', line);
    })
}

const main = () => {
  readTextLine();
}

module.exports = { main }
