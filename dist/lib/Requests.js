"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config"));
var got_1 = __importDefault(require("got"));
var Requests = /** @class */ (function () {
    function Requests() {
    }
    Requests.create = function (token) {
        var tokenComponents = token.getTokenComponents();
        return got_1.default.extend({
            prefixUrl: config_1.default.api_endpoint,
            username: tokenComponents.username,
            password: tokenComponents.password,
            responseType: 'json',
            resolveBodyOnly: true,
            retry: 3,
            parseJson: function (text) { return JSON.parse(text); }
        });
    };
    return Requests;
}());
exports.default = Requests;
