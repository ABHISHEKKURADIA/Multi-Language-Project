const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 8080
const file = fs.readFileSync(path.join(__dirname,"../index.htm"), 'utf-8')
const app = http.createServer((req, res) => {
    res.statusCode = 200
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(file)
    res.end()
    console.log("Response Served Sucessfully!")
})

app.listen(PORT)