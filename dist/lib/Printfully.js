"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Token_1 = __importDefault(require("./authentication/Token"));
const Store_1 = __importDefault(require("./definitions/Store"));
const Requests_1 = __importDefault(require("./Requests"));
const Product_1 = __importDefault(require("./definitions/product/Product"));
const Variant_1 = __importDefault(require("./definitions/product/Variant"));
/**
 * Represents the Printful API.
 * @param {string|Token} token The secret API Key for your Printful shop.
 */
class Printfully {
    constructor(token) {
        if (typeof token == 'string')
            this.token = new Token_1.default(token);
        else
            this.token = token;
    }
    /**
     * @returns {Token} The token which was either passed in or generated when the object was instantiated.
     */
    getToken() {
        return this.token;
    }
    /**
     * Requests store information from Printful.
     * @returns {Promise<Store>}
     */
    fetchStore() {
        return new Promise((resolve, reject) => {
            const request = Requests_1.default.create(this.token);
            request('store').json().then(response => {
                // @ts-ignore
                const data = response.result;
                resolve(new Store_1.default(this.token, data));
            });
        });
    }
    /**
     * Fetches a product given it's id.
     *
     * NOTE: This method of fetching data is considerably faster than going down the chain of objects.
     * @param productId
     */
    fetchProductById(productId) {
        return new Promise((resolve, reject) => {
            let request = Requests_1.default.create(this.token);
            request(`store/products/${productId}`).json()
                .then(response => {
                // @ts-ignore
                resolve(new Product_1.default(this.token, response.result.sync_product));
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Fetches a product's variants given it's id.
     *
     * NOTE: This method of fetching data is considerably faster than going down the chain of objects.
     * @param productId
     */
    fetchProductVariantsById(productId) {
        return new Promise((resolve, reject) => {
            let request = Requests_1.default.create(this.token);
            request(`store/products/${productId}`).json()
                .then(response => {
                // @ts-ignore
                const data = response.result.sync_variants;
                let variants = new Array();
                // Process each object and convert to tangible Product objects
                data.forEach((variantData) => {
                    variants.push(new Variant_1.default(this.token, variantData));
                });
                resolve(variants);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
exports.default = Printfully;
