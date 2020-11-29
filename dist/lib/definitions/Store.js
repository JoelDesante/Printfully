"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDefinition_1 = __importDefault(require("./BaseDefinition"));
const Requests_1 = __importDefault(require("../Requests"));
const Product_1 = __importDefault(require("./product/Product"));
/**
 * Represents a store on Printful.
 * @param {Token} token The API Key for making requests
 * @param {Object} data The data for the store, presumably received from the Printful API
 */
class Store extends BaseDefinition_1.default {
    constructor(token, data) {
        super(token);
        Object.assign(this, data);
    }
    /**
     * TODO: Implement pagination so that all products will make an appearance.
     * @returns All products (on the first page) of the store
     */
    fetchProducts() {
        return new Promise((resolve, reject) => {
            const request = Requests_1.default.create(this.token);
            // FIXME: Make this paginate
            request('store/products').json().then(response => {
                // @ts-ignore
                const data = response.result;
                let products = new Array();
                // Process each object and convert to tangible Product objects
                data.forEach(productData => {
                    products.push(new Product_1.default(this.token, productData));
                });
                resolve(products);
            });
        });
    }
}
exports.default = Store;
