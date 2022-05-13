let cd = require("chromedriver");
let wd = require("selenium-webdriver");
let By = wd.By;
let until = wd.until;

let browser = new wd.Builder()
    .forBrowser('chrome')
    .build();

browser.get("https://www.worldometers.info/coronavirus/?utm_campaign=homeAdvegas1?%22%20%5Cl%22countries");