const {Builder, By, Key, util} = require("selenium-webdriver");
const {titleMatches, elementLocated} = require("selenium-webdriver/lib/until");

async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get ("https://www.imdb.com/");
    await driver.findElement(By.name("q")).sendKeys("Game of Thrones",Key.RETURN);
    await driver.sleep(3000);
    await driver.findElement(By.xpath("/html/body/div[3]/div/div[2]/div[3]/div[1]/div/div[2]/table/tbody/tr[1]/td[2]/a")).click();
    await driver.sleep(3000);
    await driver.findElement(By.className("ratingValue")).getText().then(function (text) {
        console.log(text);
    });        
    await driver.close();
}

example();
