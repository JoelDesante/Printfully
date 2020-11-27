import Token from "./authentication/Token";
import Store from "./definitions/Store";

/**
 * Represents the Printful API.
 * @param {string|Token} token The secret API Key for your Printful shop.
 */
export default class Printfully {

    private readonly token: Token;

    constructor(token: string|Token) {
        if(typeof token == 'string')
            this.token = new Token(token);
        else
            this.token = token;
    }

    /**
     * @returns {Token} The token which was either passed in or generated when the object was instantiated.
     */
    public getToken(): Token {
        return this.token;
    }

    /**
     * @returns {Store} Populated with data from Printful.
     */
    public getStore(): Store {
        return new Store();     // TODO: Build store from factory or something...
    }
}