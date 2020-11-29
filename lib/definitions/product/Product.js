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
exports.__esModule = true;
var BaseDefinition_1 = require("../BaseDefinition");
var Requests_1 = require("../../Requests");
var Variant_1 = require("./Variant");
/**
 * Represents the overall Product.
 * @param {Token} token The API Key for making requests
 * @param {Object} data The data for the store, presumably received from the Printful API
 *
 * @public {number|undefined} id
 * @public {string|undefined} external_id
 * @public {string|undefined} name
 * @public {number|undefined} variants
 * @public {number|undefined} synced
 * @public {string|undefined} thumbnail_url
 */
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(token, data) {
        var _this = _super.call(this, token) || this;
        Object.assign(_this, data);
        return _this;
    }
    Product.prototype.fetchVariants = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = Requests_1["default"].create(_this.token);
            // FIXME: Make this paginate
            if (_this.id === undefined)
                throw new TypeError('Product id must be defined to fetch variants.');
            request("store/products/" + _this.id).json()
                .then(function (response) {
                // @ts-ignore
                var data = response.result.sync_variants;
                var variants = new Array();
                // Process each object and convert to tangible Product objects
                data.forEach(function (variantData) {
                    variants.push(new Variant_1["default"](_this.token, variantData));
                });
                resolve(variants);
            })["catch"](function (err) {
                reject(err);
            });
        });
    };
    return Product;
}(BaseDefinition_1["default"]));
exports["default"] = Product;
