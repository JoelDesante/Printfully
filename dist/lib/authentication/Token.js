"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an API Key from Printful.
 * @param {string} apiKey
 */
class Token {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    getKey() {
        return this.apiKey;
    }
    getAuthKey() {
        const b = Buffer.from(this.apiKey);
        return b.toString('base64');
    }
    getTokenComponents() {
        const components = this.apiKey.split(':');
        if (components.length !== 2)
            throw new Error('Invalid API key.');
        return {
            username: components[0],
            password: components[1]
        };
    }
}
exports.default = Token;
