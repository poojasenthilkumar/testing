// Locators built in methods

/*page.getByAltText() - this method is used while checking whether the image element appears in a webpage. 
To get check we always metion alt text to the image right by getting that image and checking whether it is visible or not*/

const{test,expect} = require('@playwright/test')

test('Built-inLocators',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

    const logo = await page.getByAltText('colorpicker')
    await expect(logo).toBeVisible();
}) 

