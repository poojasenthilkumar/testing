import {test,expect} from '@playwright/test'

test('Locators',async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")

    //click on login button - using property

    //await page.locator('id=login2').click() --> we can give like this alos
    
    await page.click('id=login2') // preferred method

    // username input field --> using css

   // await page.locator('id="loginusername"') --> 1 or 
    await page.fill('#loginusername','pooja')   // ----> 2 or  
    // await page.type('id="loginusername"') --> 3 

    //password input field  --> using css

    await page.fill('#loginpassword','Pooja@123')

    await page.click("//button[normalize-space()='Log in']")

    // login button
    await page.click("//button[normalize-space()='Log in']") 


  
})