import Printfully from '../index';
import Token from "../lib/authentication/Token";

const testData = {
    token: {
        input: 'MDNwZzNhYXRleTJ6cWxsZTU4NTI2',
        output: 'TUROd1p6TmhZWFJsZVRKNmNXeHNaVFU0TlRJMg=='
    }
}

function generateRandomString(): string {
    return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
}

test('Token#getKey() returns as string', () => {
    expect(typeof new Token(testData.token.input).getKey()).toBe('string');
});

test('Token#getKey() returns expected output', () => {
    expect(new Token(testData.token.input).getKey()).toBe(testData.token.input);
});

test('Token#getAuthKey() returns as string', () => {
    expect(typeof new Token(testData.token.input).getAuthKey()).toBe('string');
});

test('Token#getAuthKey() returns expected Base64 output', () => {
    expect(new Token(testData.token.input).getAuthKey()).toBe(testData.token.output);
});