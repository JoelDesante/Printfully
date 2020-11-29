"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an API Key from Printful.
 * @param {string} apiKey
 */
var Token = /** @class */ (function () {
    function Token(apiKey) {
        this.apiKey = apiKey;
    }
    Token.prototype.getKey = function () {
        return this.apiKey;
    };
    Token.prototype.getAuthKey = function () {
        var b = Buffer.from(this.apiKey);
        return b.toString('base64');
    };
    Token.prototype.getTokenComponents = function () {
        var components = this.apiKey.split(':');
        if (components.length !== 2)
            throw new Error('Invalid API key.');
        return {
            username: components[0],
            password: components[1]
        };
    };
    return Token;
}());
exports.default = Token;
