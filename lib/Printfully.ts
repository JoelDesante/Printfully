import Token from "./authentication/Token";
import Store, {StoreData} from "./definitions/Store";
import Requests from "./Requests";
import config from "../config";

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
     * Requests store information from Printful.
     * @returns {Promise<Store>}
     */
    public fetchStore(): Promise<Store> {
        return new Promise<Store>((resolve, reject) => {
            Requests.getJSON(config.endpoints.store, this.token)
                .then((response) => {
                    resolve(new Store(this.token, response as StoreData));
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}