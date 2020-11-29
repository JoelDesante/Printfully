"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Requests_1 = __importDefault(require("../lib/Requests"));
const Token_1 = __importDefault(require("../lib/authentication/Token"));
const config_1 = __importDefault(require("../config"));
const Printfully_1 = __importDefault(require("../lib/Printfully"));
const ApiKeys_1 = __importDefault(require("../ApiKeys"));
test('Requests#create returns object', () => {
    expect(typeof Requests_1.default.create(new Token_1.default(config_1.default.api_testKey))).toBe('function');
});
test('Store Information Request', (done) => __awaiter(void 0, void 0, void 0, function* () {
    let Printful = new Printfully_1.default(new Token_1.default(ApiKeys_1.default.printful));
    yield expect(Printful.fetchStore()).resolves.toBeDefined();
    done();
}));
