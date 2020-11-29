import Token from "./authentication/Token";
import Store from "./definitions/Store";
import Product from "./definitions/product/Product";
import Variant from "./definitions/product/Variant";
/**
 * Represents the Printful API.
 * @param {string|Token} token The secret API Key for your Printful shop.
 */
export default class Printfully {
    private readonly token;
    constructor(token: string | Token);
    /**
     * @returns {Token} The token which was either passed in or generated when the object was instantiated.
     */
    getToken(): Token;
    /**
     * Requests store information from Printful.
     * @returns {Promise<Store>}
     */
    fetchStore(): Promise<Store>;
    /**
     * Fetches a product given it's id.
     *
     * NOTE: This method of fetching data is considerably faster than going down the chain of objects.
     * @param productId
     */
    fetchProductById(productId: number): Promise<Product>;
    /**
     * Fetches a product's variants given it's id.
     *
     * NOTE: This method of fetching data is considerably faster than going down the chain of objects.
     * @param productId
     */
    fetchProductVariantsById(productId: number): Promise<Array<Variant>>;
}
