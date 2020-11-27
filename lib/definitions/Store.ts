/**
 * Represents a store on Printful.
 * @param {Token} token The API Key for Printful
 */
import Token from "../authentication/Token";

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

export default class Store {

    private readonly token: Token;
    private readonly data: StoreData;

    constructor(token: Token, data: StoreData) {
        this.token = token;
        this.data = data;
    }

    /**
     * @return {number} ID of the Printful store.
     */
    public getId(): number {
        return this.data.id;
    }

    /**
     * @return {string} Name of the Printful store.
     */
    public getName(): string {
        return this.data.name;
    }

    /**
     * @return {string} Type of Printful store.
     */
    public getType(): string {
        return this.data.type;
    }

    /**
     * @return {URL} URL of the website linked to the Printful store.
     */
    public getWebsiteUrl(): URL {
        return this.data.website;
    }

    /**
     * @return {string|null} The return shipping address configured for the Printful store.
     */
    public getReturnAddress(): string|null {
        return this.data.return_address;
    }

    /**
     * @return {string|null} The billing address configured for the Printful store.
     */
    public getBillingAddress(): string|null {
        return this.data.billing_address;
    }

    /**
     * @return {string} Type of currency used in this Printful store.
     */
    public getCurrency(): string {
        return this.data.currency;
    }

    /**
     * @return {string|null} Configured payment card for this Printful store.
     */
    public getPaymentCard(): CardInfo|null{
        return this.data.payment_card;
    }

    /**
     * @return {PackingSlip} Packing slip data.
     */
    public getPackingSlip(): PackingSlip {
        return this.data.packing_slip
    }

    /**
     * @return {number} The time when this store was created (defiend in seconds since .
     */
    public getTimeCreated(): number {
        return this.data.created;
    }
}
