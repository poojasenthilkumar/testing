// Locators built in methods

/*page.getByAltText() - this method is used while checking whether the image element appears in a webpage. 
To get check we always mention alt text to the image right by getting that image and checking whether it is visible or not*/

const{test,expect} = require('@playwright/test')

test('Built-inLocators',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();
 
/*page.getByPlaceholder() - to locate an input by placeholder.
this is used when the input field has placeholder attribute we can use that to locate the element*/

await page.getByPlaceholder('Username').fill("Pooja")

await page.getByPlaceholder('Password').fill("Pooja@123")

//page.getByRole() - to locate by explicit and implicit accessibility atteributes. 
/*whenever we need to perform some action on any element like link,button etc.. 
*/
// note : here Role is not a attribute. so in syntax specify what you need to action and its type.

await page.getByRole('button', {type:'submit'}).click()

//page.getBytext() 
await page.getByText() // to locate by text content 

const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()

await expect(await page.getByText('vishwas dsadsasdfs')).toBeVisible()

await expect(await page.getByText(name)).toBeVisible()


})

