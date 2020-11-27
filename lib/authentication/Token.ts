/**
 * Represents an API Key from Printful.
 * @param {string} apiKey
 */
export default class Token {

    private readonly apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    public getAuthKey(): string {
        const b = Buffer.from(this.apiKey);
        return b.toString('base64');
    }

}