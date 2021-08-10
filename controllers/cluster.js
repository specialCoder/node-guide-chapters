const cluster = require('cluster');
const http = require('http');
const numCpus = require('os').cpus().length;

const main = () => {
    if(cluster.isMaster){
        console.log('numCpus--->', numCpus);
        // for(let i = 0; i< numCpus; i++){
        //     cluster.fork();
    
        // }
    
        cluster.on('exit', ((worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        }))
    
    }else{
        // require('./assert/test12.txt');
    }
}

module.exports = {
    main
}

