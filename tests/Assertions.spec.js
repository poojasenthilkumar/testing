//ASSERTIONS 

// VALIDATE THE WEBPAGE 
 
const { test, expect } = require('@playwright/test')

test('AssertionsTest',async({page})=> 
{
    await page.goto('https://demo.nopcommerce.com/register')
    
    //1) toHaveURL() - checks whether the URL is correct or wrong 
    
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2) toHaveTitle() - checks whether the title of the webpage is correct or wrong 

    await expect(page). toHaveTitle('nopCommerce demo store. Register')

    //3) toBeVisible() - checks whether the element is visible or not
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible() 

    //4) 
})
