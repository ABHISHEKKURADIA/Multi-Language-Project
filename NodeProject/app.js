const http = require("http")
const PORT = process.env.PORT || 8080
const app = http.createServer((req, res) => {
    res.statusCode = 200
    res.write("Welcome to NodeJs Application")
    res.end()
    console.log("Response Served Sucessfully!")
})

app.listen(PORT)