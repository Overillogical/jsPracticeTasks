import http from 'http'
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 }
];
let aboutRequests =0;
let helloRequests =0;
let usersRequests=0;
const logTime = (url) =>{
    console.log(`[GET] ${url} at ${new Date().toISOString()}`)
}
const server = http.createServer((req,res)=>{
    let totalRequests = aboutRequests+helloRequests+usersRequests;
    if(req.url.startsWith("/users/")){
        if(((+req.url.slice(7))>0&&(+req.url.slice(7))<=users.length)){
            logTime(req.url)
            usersRequests+=1;
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(JSON.stringify(users[+req.url.slice(7)-1]));
    }else
        res.end("User not found")
    }else
    switch (req.url){
        case '/hello':
            logTime(req.url)
            helloRequests+=1;
            res.writeHead(200,{'Content-type': 'text/plain'});
            res.end('Hello from my server!');
            break;
        case '/about':
            logTime(req.url)
            aboutRequests+=1;
            res.writeHead(200, {'Content-type':'text/plain'});
            res.end('My name is Alexander, and i did this thing')
            break;
        case '/time':
            logTime(req.url)
            res.writeHead(200, {'Content-type':'text/plain'})
            res.end(`current time: ${new Date().toTimeString().slice(0, 5)}`);
            break;
        case '/users':
            logTime(req.url)
            usersRequests+=1;
            res.writeHead(200, {'Content-type':'text/plain'});
            res.end(JSON.stringify(users))
            break;
        case '/stats':
            logTime(req.url)
            res.writeHead(200,{'Content-type':'application/json'});
            const requestObj = {"Total requests": totalRequests, "routes": {"/hello": helloRequests, "/about": aboutRequests, "/users": usersRequests}};
            res.end(JSON.stringify(requestObj))
            break;
        default:
            logTime(req.url)
            res.writeHead(404, {'Content-type':'text/plain'});
            res.end('Page not found!')
            break;
    }
})
server.listen(4000);