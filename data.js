const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
let url = "https://www.cleanwisconsin.org/news/press-releases/";

async function configureBrowser() {
    let browser = await puppeteer.launch({headless: false});
    let page = await browser.newPage();
    await page.goto(url);
    return page;
}

async function getPreviewNewsFeed(page) {
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

    const previewData = mapData(titles, articleBody);
   
    const jsonData = JSON.stringify(previewData);
    console.log(jsonData);
}

async function getPreviewData() {
    let page = await configureBrowser();
    await getPreviewNewsFeed(page);
    await browser.close
}


//-------------------------------------------------------------------------------

async function getArticleContent() {

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.goto(url);
    // await page.reload();
    
    const links = await page.evaluate(
        () => Array.from(
          document.querySelectorAll('.entry-title a'),
          a => a.getAttribute('href')
        )
      );
    
    
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
    // console.log(links[0]);
    // await page.goto(links[0]);
    // await page.reload();
    // let data = await page.evaluate(() => document.body.innerHTML);
    // const $ = cheerio.load(data);

    // // how to grab title and article body from each link? 
    // let title = $('.entry-title').text();
    // console.log(title);
    // let body = $('.et_pb_text_inner').text();
    // console.log(body);
        let titles = [];
        let bodies = [];
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

    const data = mapData(titles, bodies);
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
        

    return jsonData;

    //browser.close();
    
      
    
    // let list = [...nodeList];
    // list.forEach(div => {titles.push(div.querySelector('a[href]').text)});
    

    //await page.click("article a")
    //console.log(articleBodies.length);
}

async function getArticles() {
    //let page = await configureBrowser();
    await getArticleContent();
}

//--------------------------------------------------------------------------------

//getPreviewData();
getArticles();


