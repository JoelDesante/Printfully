import Token from "../authentication/Token";
import BaseDefinition from "./BaseDefinition";
import Product from "./product/Product";
/**
 * @property email {string|null} Customer service email address
 * @property phone {string|null} Customer service phone number
 * @property message {string|null} Custom packing slip message
 */
export interface PackingSlip {
    email: string | null;
    phone: string | null;
    message: string | null;
}
/**
 * @property type {string} Payment card type
 * @property number_mask {string} Masked card number with only last 4 digits visible
 * @property expires {string} Card expiry date
 */
export interface CardInfo {
    type: string;
    number_mask: string;
    expires: string;
}
/**
 * Represents a store on Printful.
 * @param {Token} token The API Key for making requests
 * @param {Object} data The data for the store, presumably received from the Printful API
 */
export default class Store extends BaseDefinition {
    id: number | undefined;
    name: string | undefined;
    type: string | undefined;
    website: string | undefined;
    return_address: string | null | undefined;
    billing_address: string | null | undefined;
    currency: string | undefined;
    payment_card: CardInfo | null | undefined;
    packing_slip: PackingSlip | undefined;
    created: number | undefined;
    constructor(token: Token, data: Object);
    /**
     * TODO: Implement pagination so that all products will make an appearance.
     * @returns All products (on the first page) of the store
     */
    fetchProducts(): Promise<Array<Product>>;
}
