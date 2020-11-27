import Requests from "../lib/Requests";
import Token from "../lib/authentication/Token";
import config from '../config';
import Printfully from "../lib/Printfully";

test('Requests#getJSON returns object', () => {
    expect(typeof Requests.getJSON('', new Token(config.api_testKey))).toBe('object');
});

test('Requests#postJSON returns object', () => {
    expect(typeof Requests.postJSON('', new Token(config.api_testKey))).toBe('object');
});

test('Store Request', () => {
    new Printfully(new Token(''));
});