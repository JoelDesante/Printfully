import Token from "./authentication/Token";
import Store from "./definitions/Store";
import Requests from "./Requests";
import Product from "./definitions/product/Product";
import Variant from "./definitions/product/Variant";

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
            const request = Requests.create(this.token);
            request('store').json().then(response => {
                // @ts-ignore
                const data = response.result;
                resolve(new Store(this.token, data));
            });
        });
    }

    /**
     * Fetches a product given it's id.
     *
     * NOTE: This method of fetching data is considerably faster than going down the chain of objects.
     * @param productId
     */
    public fetchProductById(productId: number): Promise<Product> {
        return new Promise<Product>((resolve, reject) => {
            let request = Requests.create(this.token);
            request(`store/products/${productId}`).json()
                .then(response => {
                    // @ts-ignore
                    resolve(new Product(this.token, response.result.sync_product));
                })
                .catch(err => {
                    reject(err);
                })
        });
    }

    /**
     * Fetches a product's variants given it's id.
     *
     * NOTE: This method of fetching data is considerably faster than going down the chain of objects.
     * @param productId
     */
    public fetchProductVariantsById(productId: number): Promise<Array<Variant>> {
        return new Promise<Array<Variant>>((resolve, reject) => {
            let request = Requests.create(this.token);
            request(`store/products/${productId}`).json()
                .then(response => {

                    // @ts-ignore
                    const data = response.result.sync_variants;
                    let variants = new Array<Variant>();

                    // Process each object and convert to tangible Product objects
                    data.forEach((variantData: Object) => {
                        variants.push(new Variant(this.token, variantData))
                    });

                    resolve(variants);
                })
                .catch(err => {
                    reject(err);
                })
        });
    }
}