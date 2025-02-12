const { chromium } = require('playwright');  // Using Chromium browser

(async () => {
  const browser = await chromium.launch(); // Launch the browser
  const page = await browser.newPage(); // Open a new page
  await page.goto('https://example.com'); // Navigate to the website
  const title = await page.title(); // Get the page title
  console.log(title);  // Output the title to the console
  await browser.close(); // Close the browser
})();
