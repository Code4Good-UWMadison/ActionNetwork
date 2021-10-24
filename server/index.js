const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
let url = "https://www.cleanwisconsin.org/news/press-releases/";
// cache request in the future to speed up the process? 
//let jsonData = getArticles(); 

async function getArticles() {

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.goto(url);
    // await page.reload();
    
    // get all links from news release page
    const links = await page.evaluate(
        () => Array.from(
          document.querySelectorAll('.entry-title a'),
          a => a.getAttribute('href')
        )
      );
    
    // helper method to construct array of objects
    const mapData = (titles, bodies) => {
        const data = [];
        for (let i = 0; i < titles.length; i++) {
            data.push({
                title: titles[i],
                body: bodies[i],
            });
        }
        return data;
    }

    let titles = [];
    let bodies = [];
    // visit all links and collect article title and body
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        await page.goto(link);
        await page.reload();
        let data = await page.evaluate(() => document.body.innerHTML);
        const $ = cheerio.load(data);

        let title = $('.entry-title').text();
        titles.push(title);
        let body = $('.et_pb_text_inner').text();
        bodies.push(body);
    }

    // construct array of object with title and article body
    const data = mapData(titles, bodies);
    // convert array to json to return
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    
    // browser.close();
}

app.get("/news", async (req, res) => {
   const jsonData = await getArticles();
   res.send(jsonData);
})

app.get("/test", (req, res) => {
    res.send("test");
})

app.listen(port, () => {
    console.log(`App is running on port http://localhost:${port}`);
});