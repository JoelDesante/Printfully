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
var BaseDefinition_1 = __importDefault(require("../BaseDefinition"));
/**
 * Represents a Product's variants. (ie. A red cat shirt would be a variant of the overall product "cat shirt")
 * @param {Token} token The API Key for making requests
 * @param {Object} data The data for the store, presumably received from the Printful API
 */
var Variant = /** @class */ (function (_super) {
    __extends(Variant, _super);
    function Variant(token, data) {
        var _this = _super.call(this, token) || this;
        Object.assign(_this, data);
        return _this;
    }
    return Variant;
}(BaseDefinition_1.default));
exports.default = Variant;
