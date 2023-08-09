const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express = require('express');
const server = express();



server.use((req, res, next) => {
    console.log(req.method, req.ip, req.hostname);
    next()
})

// server.get('/index', (req, res) => {
//     // res.send(`hello`)
//     res.send(index)
// })

// server.get('/api', (req, res) => {
//     res.json(products);
// })



// server.get('/error', (req, res) => {
//     // res.send(`hello`)
//     res.sendStatus(404)
// })

server.get('/', (req, res) => {
    res.json({ type: 'GET' });
});

server.post('/', (req, res) => {
    res.json({ type: 'POST' });
});

server.put('/', (req, res) => {
    res.json({ type: 'PUT' });
});
server.delete('/', (req, res) => {
    res.json({ type: 'DELETE' });
});
server.patch('/', (req, res) => {
    res.json({ type: 'PATCH' });
});




server.listen((8080), () => {
    console.log(`server started`);
});