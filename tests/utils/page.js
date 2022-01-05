const puppeteer = require("puppeteer");
const JEST_CONSTANTS = require("./constants");
const userFactory = require("../factories/userFactory");
const {redis_client} = require("../../src/redis_client");
const localStorageFactory = require("../factories/localStorageFactory");

/**
 * @description a singleton class
 * */
class CustomPage {
    /**
     * @param page {Page}
     * @param browser {Browser}
     * */
    constructor(page, browser) {
        this.page = page;
        this.browser = browser;
    }

    /**
     * @description build a browser instant and creates a page
     * @return {Page}
     * */
    static async build() {
        const browser = await puppeteer.launch({
            headless: true
        });

        const page = await browser.newPage();
        const customPage = new CustomPage(page, browser);

        return new Proxy(customPage, {
            get: function(target, property) {
                return customPage[property] || browser[property] || page[property];
            }
        });
    }

    /**
     * @description user login logic
     * @return Promise<String>
     * */
    async login() {
        const userInfo = await userFactory();

        const tokenWithPrefix = await localStorageFactory(userInfo);

        await this.page.evaluate((tokenWithPrefix) => {
            localStorage.setItem('token', tokenWithPrefix);
        }, tokenWithPrefix);

        let current_url = `${JEST_CONSTANTS.CLIENT_URL}/books`;

        await this.page.goto(current_url);
        await this.page.waitForSelector('#log_out_btn');

        return current_url;
    }

    /**
     * @description user logout logic
     * @return Promise<String>
     * */
    async logout(){
        localStorage.removeItem('token');
        let current_url = JEST_CONSTANTS.CLIENT_URL;
        await this.page.goto(current_url);
        return current_url;
    }


    async close() {
        return Promise.all([
            this.browser.close(),
            redis_client.quit(),
        ]);
    }

    /**
     * @param selector {String}
     * @return Promise<String>
     * */
    async getContentOf(selector){
        await this.page.$eval(selector, el => el.innerHTML);
    }
}

module.exports = CustomPage;