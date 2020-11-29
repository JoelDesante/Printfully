"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const got_1 = __importDefault(require("got"));
class Requests {
    static create(token) {
        const tokenComponents = token.getTokenComponents();
        return got_1.default.extend({
            prefixUrl: config_1.default.api_endpoint,
            username: tokenComponents.username,
            password: tokenComponents.password,
            responseType: 'json',
            resolveBodyOnly: true,
            retry: 3,
            parseJson: text => JSON.parse(text)
        });
    }
}
exports.default = Requests;
