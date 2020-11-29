import Token from "../authentication/Token";
import BaseDefinition from "./BaseDefinition";
import Requests from "../Requests";
import Product from "./product/Product";

/**
 * @property email {string|null} Customer service email address
 * @property phone {string|null} Customer service phone number
 * @property message {string|null} Custom packing slip message
 */
export interface PackingSlip {
    email: string|null,
    phone: string|null,
    message: string|null
}

/**
 * @property type {string} Payment card type
 * @property number_mask {string} Masked card number with only last 4 digits visible
 * @property expires {string} Card expiry date
 */
export interface CardInfo {
    type: string
    number_mask: string
    expires: string
}

/**
 * Represents a store on Printful.
 * @param {Token} token The API Key for making requests
 * @param {Object} data The data for the store, presumably received from the Printful API
 */
export default class Store extends BaseDefinition{

    public id: number|undefined;
    public name: string|undefined;
    public type: string|undefined;
    public website: string|undefined;
    public return_address: string|null|undefined;
    public billing_address: string|null|undefined;
    public currency: string|undefined;
    public payment_card: CardInfo|null|undefined;
    public packing_slip: PackingSlip|undefined;
    public created: number|undefined;

    constructor(token: Token, data: Object) {
        super(token);
        Object.assign(this, data);
    }

    /**
     * TODO: Implement pagination so that all products will make an appearance.
     * @returns All products (on the first page) of the store
     */
    fetchProducts(): Promise<Array<Product>> {
        return new Promise<Array<Product>>((resolve, reject) => {
            const request = Requests.create(this.token);
            // FIXME: Make this paginate
            request('store/products').json().then(response => {
                // @ts-ignore
                const data = response.result as Array<Object>;
                let products = new Array<Product>();

                // Process each object and convert to tangible Product objects
                data.forEach(productData => {
                    products.push(new Product(this.token, productData))
                });

                resolve(products);
            });
        });
    }
}
