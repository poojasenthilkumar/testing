const { test, expect } = require('@playwright/test');

test('Home Page',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
      const pageTitle = page.title();
    console.log('Page title is : ',pageTitle);

    await expect(page).toHaveTitle('STORE');//For validating we use expect 
    // here the validation is about whether the title is correct or not  
    
    const pageURL = page.url();
    console.log('page url is:',pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();
})

 