const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/hello", (req, res) =>{
    console.log("the hello route has been pinged")
} )

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))