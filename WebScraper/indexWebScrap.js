const puppeteer = require('puppeteer');

const amznURL = async (url) => {
    let returnedObj={
        url: "null",     //initializing an object to be returned with default value in case subject is missing details
        title: "null",
        price: "null",
        rating: "null",
        techDetails: "null",
        image:"null"
    }

    const browser =await puppeteer.launch({
        headless: false,     //ables the browser to open up, after testing will change to true so that browser doesn't pop up
        defaultViewport: false,  
        userDataDir: './tmp',  //stores capcha info so as to avoid detection as bot requires atleast one capcha refilled by client
    
    });
    const page =await browser.newPage();

    await page.goto(url);
    try{
        const titleEl = await page.waitForSelector('#productTitle');
        const priceEl = await page.waitForSelector('span.a-price-whole');
        const techDetailsEl = await page.waitForSelector('#productDetails_techSpec_section_1');
        const ratingEl = await page.waitForSelector(' div.a-fixed-left-grid-col.aok-align-center.a-col-right > div > span > span');
        const imageEl = await page.waitForSelector('#landingImage');

        const title = await titleEl.evaluate((el)=>el.textContent,titleEl);
        const price =await priceEl.evaluate((el)=>el.innerText,priceEl);
        const techDetails = await techDetailsEl.evaluate((el) => el.innerHTML,techDetailsEl);
        const rating = await ratingEl.evaluate((el)=>el.textContent,ratingEl);
        const image = await imageEl.evaluate((el) => el.src , imageEl);
    
        returnedObj.url = url;
        returnedObj.title = title;
        returnedObj.rating = rating;
        returnedObj.price = price;
        returnedObj.techDetails = techDetails;
        returnedObj.image = image;
        browser.close();
        return returnedObj;        //object returned requires an await clause to get it
    } catch(error){
        console.log("something went wrong" + error);
    }
};

const flpkrtURL = async (url) =>{
    let returnedObj={
        url : "null",
        title: "null",
        price: "null",
        rating: "null",
        techDetails: "null",
        image:"null"
    }

    const browser =await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        userDataDir: './tmp',
    
    });
    const page =await browser.newPage();
    
    await page.goto(url);
    try {
        const titleEl = await page.waitForSelector(' h1 > span');
        const priceEl =await  page.waitForSelector('div.CEmiEU > div > div._30jeq3._16Jk6d');
        const ratingEl = await page.waitForSelector('div > div._2d4LTz');
        const imageEl = await page.waitForSelector('div.CXW8mj._3nMexc > img');
        const buttonEl = await page.waitForSelector('div._1YokD2._3Mn1Gg > div:nth-child(5) > div > div:nth-child(2) > button');
        await buttonEl.click();
        // await page.waitForNavigation();           //depreciated becuase code wasn't working even when waitUntil:'domcontentLoaded' was passed as parameter

        const techDetailsEl = await page.waitForSelector('div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(8) > div:nth-child(1) > div');

        const price = await priceEl.evaluate((el) => el.textContent,priceEl);
        const title = await titleEl.evaluate((el) => el.textContent,titleEl);
        const rating = await ratingEl.evaluate((el) => el.textContent,ratingEl);
        const techDetails = await techDetailsEl.evaluate((el) => el.innerHTML,techDetailsEl);
        const image = await imageEl.evaluate((el) => el.src , imageEl);

        returnedObj.url = url;
        returnedObj.title = title;
        returnedObj.price = price;
        returnedObj.rating = rating;
        returnedObj.techDetails = techDetails;
        returnedObj.image = image;
        browser.close();
        return returnedObj;
        
    } catch (error) {
        console.log("something went wrong" + error);
    }
    
};
const switcher =async (url) =>{  //decides wether link is of amazon or flipkart to redirect into seperate functions
    const amznString = 'https://www.amazon.in';
    const flpkrtString = 'https://www.flipkart.com';
    let object={};
    if(url.includes(amznString)){
        object=await amznURL(url);
    } else if(url.includes(flpkrtString)){
        object = await flpkrtURL(url);
    } else{
        console.log("not an amazon or flipkart link");
    }
    return object;
    // console.log(object);
}

module.exports={webScraper : switcher} //exporting the function in name of webScraper

// switcher('https://www.amazon.in/Samsung-Galaxy-Ultra-Green-Storage/dp/B0BTYWFXKC/ref=sr_1_2?crid=2E3KT13DUQ5AU&keywords=samsung+s23+ultra+5g&nsdOptOutParam=true&qid=1698471875&sprefix=sams%2Caps%2C378&sr=8-2');