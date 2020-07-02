const Scraper = require('images-scraper')
let dataInJsonFormat;

const google = new Scraper({
    puppeteer: {
      headless: true,
    }
  });
   
async function startScraping(searchQuery) {
    const results = await google.scrape(`${searchQuery}`, 3);
   // console.log('results', results);
    let moreResults = await results;
    return moreResults;
  };



exports.hello = startScraping;