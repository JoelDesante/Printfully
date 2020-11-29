"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDefinition_1 = __importDefault(require("../BaseDefinition"));
/**
 * Represents a Product's variants. (ie. A red cat shirt would be a variant of the overall product "cat shirt")
 * @param {Token} token The API Key for making requests
 * @param {Object} data The data for the store, presumably received from the Printful API
 */
class Variant extends BaseDefinition_1.default {
    constructor(token, data) {
        super(token);
        Object.assign(this, data);
    }
}
exports.default = Variant;
