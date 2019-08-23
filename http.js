const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        fs.readFile(path.join(__dirname, 'index.html'), (err,  data) => {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data);
            //res.write('<h1>welcome to homepage</h1>');
             res.end();
         });
        }
       
    if (req.url === '/user') {
        res.write('Welcome john');
        res.end();
    }
});

    /* console.log(req);
     res.write('Hello, how are u??')
     res.end(); */

server.listen(3000, () => console.log('server is up and running'))