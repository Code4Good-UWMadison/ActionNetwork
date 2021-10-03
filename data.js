const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
let url = "https://www.cleanwisconsin.org/news/press-releases/";

async function configureBrowser() {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(url);
    return page;
}

async function getContentNewsFeed(page) {
    await page.reload();
    let data = await page.evaluate(() => document.body.innerHTML);
    const $ = cheerio.load(data);

    let titles = [];
    $('article').each(function(i , e) {
        titles.push($(this).find('h2 > a').text());
    })
    titles = titles.slice(1); // for some reason titles[1] is a combination of all titles

    let articleBody = [];
    $('.post-content-inner').each(function(i, e) {
        articleBody.push($(this).find('p').text());
    })

    const mapData = (titles, articleBody) => {
        const data = [];
        for (let i = 0; i < titles.length; i++) {
            data.push({
                title: titles[i], 
                body: articleBody[i]
            });
        };
        return data;
    }
    
    const jsonData = JSON.stringify(mapData(titles, articleBody));
    console.log(jsonData);
}

async function start() {
    let page = await configureBrowser();
    await getContentNewsFeed(page);
}

start();

