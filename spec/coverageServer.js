var server=require('node-http-server');

console.log('###\nServing coverage on port 8888\n###');

server.deploy(
    {
        port:8888,
        root:`${__dirname}/coverage/lcov-report/`
    }
);
