let cd = require("chromedriver");
let wd = require("selenium-webdriver");
let By = wd.By;
let until = wd.until;

let browser = new wd.Builder()
    .forBrowser('chrome')
    .build();

browser.get("https://www.cricbuzz.com/live-cricket-scores/33773").then(function(){
       return browser.findElements(By.className("cb-nav-tab"));

}).then(function(data){
    data[1].click();

}).then(function(){
 return browser.wait(wd.until.elementLocated(wd.By.css(".cb-col.cb-col-100.cb-ltst-wgt-hdr")));
}).then(function(){
    return browser.findElements(wd.By.css(".cb-col.cb-col-100.cb-ltst-wgt-hdr"));
}).then(function(tables){
    let promises = [];
     for(let i=0; i<8; i+=2){
       
        promises.push(tables[i].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms")));
    }
    return Promise.all(promises);
}).then(function(data){
   let promises = [];
   for(let i=0; i < data.length; i++){
       for(let j =0; j < data[i].length; j++){
           promises.push(data[i][j].findElements(wd.By.css("div")));

       }
   }
   return Promise.all(promises);
}).then(function(data){
    for(let i=0; i < data.length; i++){
        if(data[i].length ==7){
            data[i][0].getText().then(function(playerName){
                console.log(playerName);
            })
        }
    }
})