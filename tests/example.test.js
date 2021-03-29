import puppeteer from 'puppeteer';

describe('First test',  () => {
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({headless: false, slowMo: 50, devtools: false});
        const page = await browser.newPage()

        //Handling Layouts
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await page.type('#developer-name', 'Mike', { delay: 0 })
        // checkbox handling
        await page.click('#tried-test-cafe', { clickCount: 1 });
        await page.waitForTimeout(2000);
        await browser.close();




        // below are testing to switch pages and finding elements for verify the correct website
        // await page.goto('https://example.com/');
        // await page.waitForSelector('h1')
        // await page.goto('https://dev.to/');
        // await page.waitForSelector('header')
        // await page.goBack()
        // await page.waitForSelector('h1')
        // await page.goForward()
        // await page.waitForSelector('header')
        // await page.waitForTimeout(3000)
        // await page.waitForSelector('h1'); // Find the specific html element within the website
        // await page.reload();
        // await page.waitForTimeout(3000);
        // await page.waitForSelector('h1');
        // await browser.close()



    })
})
