"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = __importDefault(require("./authentication/Token"));
var Store_1 = __importDefault(require("./definitions/Store"));
var Requests_1 = __importDefault(require("./Requests"));
var Product_1 = __importDefault(require("./definitions/product/Product"));
var Variant_1 = __importDefault(require("./definitions/product/Variant"));
/**
 * Represents the Printful API.
 * @param {string|Token} token The secret API Key for your Printful shop.
 */
var Printfully = /** @class */ (function () {
    function Printfully(token) {
        if (typeof token == 'string')
            this.token = new Token_1.default(token);
        else
            this.token = token;
    }
    /**
     * @returns {Token} The token which was either passed in or generated when the object was instantiated.
     */
    Printfully.prototype.getToken = function () {
        return this.token;
    };
    /**
     * Requests store information from Printful.
     * @returns {Promise<Store>}
     */
    Printfully.prototype.fetchStore = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = Requests_1.default.create(_this.token);
            request('store').json().then(function (response) {
                // @ts-ignore
                var data = response.result;
                resolve(new Store_1.default(_this.token, data));
            });
        });
    };
    /**
     * Fetches a product given it's id.
     *
     * NOTE: This method of fetching data is considerably faster than going down the chain of objects.
     * @param productId
     */
    Printfully.prototype.fetchProductById = function (productId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = Requests_1.default.create(_this.token);
            request("store/products/" + productId).json()
                .then(function (response) {
                // @ts-ignore
                resolve(new Product_1.default(_this.token, response.data.sync_product));
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Fetches a product's variants given it's id.
     *
     * NOTE: This method of fetching data is considerably faster than going down the chain of objects.
     * @param productId
     */
    Printfully.prototype.fetchProductVariantsById = function (productId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = Requests_1.default.create(_this.token);
            request("store/products/" + productId).json()
                .then(function (response) {
                // @ts-ignore
                var data = response.result.sync_variants;
                var variants = new Array();
                // Process each object and convert to tangible Product objects
                data.forEach(function (variantData) {
                    variants.push(new Variant_1.default(_this.token, variantData));
                });
                resolve(variants);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    return Printfully;
}());
exports.default = Printfully;
