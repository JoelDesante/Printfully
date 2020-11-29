/**
 * Represents an API Key when split into its two main components
 * @property {string} username The first half of the API key (before the ':')
 * @property {string} password The second half of the API key (after the ':')
 */
export interface TokenComponents {
    username: string;
    password: string;
}
/**
 * Represents an API Key from Printful.
 * @param {string} apiKey
 */
export default class Token {
    private readonly apiKey;
    constructor(apiKey: string);
    getKey(): string;
    getAuthKey(): string;
    getTokenComponents(): TokenComponents;
}
