"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {Token} token The API Key for making requests
 * @param {Object} data The data for the store, presumably received from the Printful API
 */
class BaseDefinition {
    constructor(token) {
        this.token = token;
    }
}
exports.default = BaseDefinition;
