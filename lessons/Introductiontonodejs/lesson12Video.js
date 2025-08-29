import http from 'http'
import fs from 'fs'

const delay = (ms) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        },ms)
    })
}

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

const server = http.createServer(async (req,res)=>{
    switch(req.url){
        case '/home':
            const data = await readFile("home.html")
            res.writeHead(200,{"Content-type":'text/html'});
            res.end(data)
            break;
        case '/about':
            await delay(3000)
            res.writeHead(200,{'Content-type':'text/plain'});
            res.end("About")
            break;
        default :
            res.writeHead(404)
            res.end()
            break;
    }
})


server.listen(3000);