import Token from "../authentication/Token";
/**
 * @param {Token} token The API Key for making requests
 * @param {Object} data The data for the store, presumably received from the Printful API
 */
export default abstract class BaseDefinition {
    protected readonly token: Token;
    protected constructor(token: Token);
}
