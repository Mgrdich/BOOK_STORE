const puppeteer = require("puppeteer");

/**
 * @description a singleton class
 * */
class CustomPage {
    /**
     * @param page {Page}
     * */
    constructor(page) {
        this.page = page;
    }

    static async build() {
        const browser = await puppeteer.launch({
            headless: true
        });

        const page = await browser.newPage();
        const customPage = new CustomPage(page);

        return new Proxy(customPage, {
            get: function(target, property) {
                return customPage[property] || browser[property] || page[property];
            }
        });
    }

    async login() {
        // implement the bearer token authentication here
        // put it into the local storage
        // then redirect
    }

    async logout(){
        // delete the token
    }

    /**
     * @param selector {String}
     * @return String
     * */
    async getContentOf(selector){}
}