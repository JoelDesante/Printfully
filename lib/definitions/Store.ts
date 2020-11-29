/**
 * Represents a store on Printful.
 * @param {Token} token The API Key for Printful
 */
import Token from "../authentication/Token";

/**
 * Represents the expected data to be received from
 * id {number}
 * name {string}
 * type {string}
 * website {URL}
 * return_address {string|null}
 * billing_address {string|null}
 * currency {string}
 * payment_card {CardInfo|null}
 * packing_slip {PackingSlip}
 * created {number}
 */
export interface StoreData {
    id: number,
    name: string,
    type: string,
    website: URL,
    return_address: string|null,
    billing_address: string|null,
    currency: string,
    payment_card: CardInfo|null,
    packing_slip: PackingSlip,
    created: number
}

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
 * @param {Token} token The API Key for making requests
 * @param {StoreData} data The data for the store, presumably received from the Printful API
 */
export default class Store {

    private readonly token: Token;
    public readonly data: Object;

    constructor(token: Token, data: Object) {
        this.token = token;
        this.data = data;
    }
}
