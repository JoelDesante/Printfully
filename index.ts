import Token from "./lib/authentication/Token";

/**
 * Represents the Printful API.
 * @param {string|Token} token The secret API Key for your Printful shop.
 */
export class Printfully {

    private readonly token: Token;

    constructor(token: string|Token) {
        if(typeof token == 'string')
            this.token = new Token(token);
        else
            this.token = token;
    }

    getAuthKey() {
        return undefined;
    }
}