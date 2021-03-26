import puppeteer from 'puppeteer';

describe('First test',  () => {
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({headless: false, slowMo: 50, devtools: false});
        const page = await browser.newPage()

        await page.goto('https://example.com/');
        await page.waitForTimeout(3000)
        await page.waitForSelector('h1'); // Find the specific html element within the website
        await page.reload();
        await page.waitForTimeout(3000);
        await page.waitForSelector('h1');
        await browser.close()

    })
})
