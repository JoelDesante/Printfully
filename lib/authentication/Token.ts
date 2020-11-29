/**
 * Represents an API Key when split into its two main components
 * @property {string} username The first half of the API key (before the ':')
 * @property {string} password The second half of the API key (after the ':')
 */
export interface TokenComponents {
    username: string,
    password: string
}

/**
 * Represents an API Key from Printful.
 * @param {string} apiKey
 */
export default class Token {

    private readonly apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    public getKey() {
        return this.apiKey;
    }

    public getAuthKey(): string {
        const b = Buffer.from(this.apiKey);
        return b.toString('base64');
    }

    public getTokenComponents(): TokenComponents {
        const components = this.apiKey.split(':');
        if(components.length !== 2)
            throw new Error('Invalid API key.')

        return {
            username: components[0],
            password: components[1]
        };
    }

}