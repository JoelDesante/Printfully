import Token from "../../authentication/Token";
import BaseDefinition from "../BaseDefinition";
/**
 * Represents a Product's variants. (ie. A red cat shirt would be a variant of the overall product "cat shirt")
 * @param {Token} token The API Key for making requests
 * @param {Object} data The data for the store, presumably received from the Printful API
 */
export default class Variant extends BaseDefinition {
    constructor(token: Token, data: Object);
}
