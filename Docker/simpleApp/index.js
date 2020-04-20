const http = require ('http')
const server = http.createServer((req,res)=>
{
    console.log("Server Started")
    res.end('Hello Node')

})

server.listen(3000)