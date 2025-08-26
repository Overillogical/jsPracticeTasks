import http from 'http'
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 }
];

const


const logTime = (url) =>{
    console.log(`[GET] ${url} at ${new Date().toISOString()}`)
}
const server = http.createServer((req,res)=>{
    switch (req.url){
        case '/hello':
            logTime(req.url)
            res.writeHead(200,{'Content-type': 'text/plain'});
            res.end('Hello from my server!');
            break;
        case '/time':
            logTime(req.url)
            res.writeHead(200, {'Content-type':'text/plain'})
            res.end(`current time: ${new Date().toTimeString().slice(0, 5)}`);
            break;
        case '/users':
            logTime(req.url)
            res.writeHead(200, {'Content-tpye':'text/plain'});
            res.end(JSON.stringify(users))
            break;
        case '/stats':
            logTime(req.url)
            res.writeHead(200,{'Content-type':'text/plain'});
            res.end()

        default:
            logTime(req.url)
            res.writeHead(404, {'Content-type':'text/plaint'});
            res.end('Page not found!')
            break;
    }
})
server.listen(4000);