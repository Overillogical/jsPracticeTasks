import http from 'http'
//Array with users
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 }
];

//Variable to store count of requests to specific routes
let aboutRequests =0;
let helloRequests =0;
let usersRequests=0;
//Function to log time when route was acessed
const logTime = (url) =>{
    console.log(`[GET] ${url} at ${new Date().toISOString()}`)
}
//Catching request
const server = http.createServer((req,res)=>{
    if (req.url!== '/favicon.ico'){
    logTime(req.url)
    }
    let totalRequests = aboutRequests+helloRequests+usersRequests;
    // If statement to check if user tries to access to specific user page
    if(req.url.startsWith("/users/")){
    // If statement to check if the user that is getting accessed exists
        if(((+req.url.slice(7))>0&&(+req.url.slice(7))<=users.length)){
            logTime(req.url)
            usersRequests+=1;
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(JSON.stringify(users[+req.url.slice(7)-1]));
    }else
        res.end("User not found")
    }else
    //Handling all other request    s, except when user accesses specific user from /users/
    switch (req.url){
        case '/hello':
            helloRequests+=1;
            res.writeHead(200,{'Content-type': 'text/plain'});
            res.end('Hello from my server!');
            break;
        case '/about':
            aboutRequests+=1;
            res.writeHead(200, {'Content-type':'text/plain'});
            res.end('My name is Alexander, and i did this thing')
            break;
        case '/time':
            res.writeHead(200, {'Content-type':'text/plain'})
            res.end(`current time: ${new Date().toTimeString().slice(0, 5)}`);
            break;
        case '/users':
            usersRequests+=1;
            res.writeHead(200, {'Content-type':'text/plain'});
            res.end(JSON.stringify(users))
            break;
        case '/stats':
            res.writeHead(200,{'Content-type':'application/json'});
            const requestObj = {"Total requests": totalRequests, "routes": {"/hello": helloRequests, "/about": aboutRequests, "/users": usersRequests}};
            res.end(JSON.stringify(requestObj))
            break;
        default:
            res.writeHead(404, {'Content-type':'text/plain'});
            res.end('Page not found!')
            break;
    }
})
server.listen(4000);