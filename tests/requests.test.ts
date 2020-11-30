import Requests from "../lib/Requests";
import Token from "../lib/authentication/Token";
import config from '../config/config';
import Printfully from "../lib/Printfully";
import ApiKeys from "../config/ApiKeys";

test('Requests#create returns object', () => {
    expect(typeof Requests.create(new Token(config.api_testKey))).toBe('function');
});

test('Store Information Request', async (done) => {
    let Printful = new Printfully(new Token(ApiKeys.printful));
    await expect(Printful.fetchStore()).resolves.toBeDefined();
    done();
});