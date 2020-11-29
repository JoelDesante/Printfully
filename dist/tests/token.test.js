"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Token_1 = __importDefault(require("../lib/authentication/Token"));
const testData = {
    token: {
        input: 'MDNwZzNhYXRleTJ6cWxsZTU4NTI2',
        output: 'TUROd1p6TmhZWFJsZVRKNmNXeHNaVFU0TlRJMg=='
    }
};
function generateRandomString() {
    return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
}
test('Token#getKey() returns as string', () => {
    expect(typeof new Token_1.default(testData.token.input).getKey()).toBe('string');
});
test('Token#getKey() returns expected output', () => {
    expect(new Token_1.default(testData.token.input).getKey()).toBe(testData.token.input);
});
test('Token#getAuthKey() returns as string', () => {
    expect(typeof new Token_1.default(testData.token.input).getAuthKey()).toBe('string');
});
test('Token#getAuthKey() returns expected Base64 output', () => {
    expect(new Token_1.default(testData.token.input).getAuthKey()).toBe(testData.token.output);
});
