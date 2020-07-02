const express = require('express')
const app = express()
const port = 3000
const scrape = require('./image-scraper')


// ! one route to rule them all
app.get("/hello", (req, res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    let toSearch = req.query.toSearch;
    console.log("pinged hello route");
    async function grabImages(searchQuery){
        let response = await scrape.hello(searchQuery);
        await console.log(response);
        await res.send(response);
    }
    grabImages(toSearch);

} )

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))