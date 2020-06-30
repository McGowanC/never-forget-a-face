const express = require('express')
const app = express()
const port = 3000
const Scraper = require('images-scraper')

app.get('/', (req, res) => res.send('Hello World!'));

// ! one route
app.get("/hello", (req, res) =>{
    const google = new Scraper({
        puppeteer: {
          headless: true,
        }
      });
       
      (async () => {
        const results = await google.scrape('Samantha Peppard', 3);
        console.log('results', results);
      })();
} )

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))