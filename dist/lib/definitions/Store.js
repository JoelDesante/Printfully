"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseDefinition_1 = __importDefault(require("./BaseDefinition"));
var Requests_1 = __importDefault(require("../Requests"));
var Product_1 = __importDefault(require("./product/Product"));
/**
 * Represents a store on Printful.
 * @param {Token} token The API Key for making requests
 * @param {Object} data The data for the store, presumably received from the Printful API
 */
var Store = /** @class */ (function (_super) {
    __extends(Store, _super);
    function Store(token, data) {
        var _this = _super.call(this, token) || this;
        Object.assign(_this, data);
        return _this;
    }
    /**
     * TODO: Implement pagination so that all products will make an appearance.
     * @returns All products (on the first page) of the store
     */
    Store.prototype.fetchProducts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = Requests_1.default.create(_this.token);
            // FIXME: Make this paginate
            request('store/products').json().then(function (response) {
                // @ts-ignore
                var data = response.result;
                var products = new Array();
                // Process each object and convert to tangible Product objects
                data.forEach(function (productData) {
                    products.push(new Product_1.default(_this.token, productData));
                });
                resolve(products);
            });
        });
    };
    return Store;
}(BaseDefinition_1.default));
exports.default = Store;
