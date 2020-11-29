"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDefinition_1 = __importDefault(require("../BaseDefinition"));
const Requests_1 = __importDefault(require("../../Requests"));
const Variant_1 = __importDefault(require("./Variant"));
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
class Product extends BaseDefinition_1.default {
    constructor(token, data) {
        super(token);
        Object.assign(this, data);
    }
    fetchVariants() {
        return new Promise((resolve, reject) => {
            const request = Requests_1.default.create(this.token);
            // FIXME: Make this paginate
            if (this.id === undefined)
                throw new TypeError('Product id must be defined to fetch variants.');
            request(`store/products/${this.id}`).json()
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
exports.default = Product;
