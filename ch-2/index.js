const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const product_data= fs.readFileSync('db.json','utf-8');

const data={age:5}
const server = http.createServer((req, res) => {
    console.log('server started');
    // res.end(JSON.stringify(data));
    //console.log(req.url)
    // res.setHeader('content-type','application/json')
    // res.end(index)
    // res.end(product_data)

    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
    case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(product_data));
            break;

    default:
            res.writeHead(404);
            res.end();
    }
})

server.listen(8080);