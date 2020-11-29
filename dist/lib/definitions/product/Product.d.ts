import Token from "../../authentication/Token";
import BaseDefinition from "../BaseDefinition";
import Variant from "./Variant";
/**
 * Represents the overall Product.
 * @param {Token} token The API Key for making requests
 * @param {Object} data The data for the store, presumably received from the Printful API
 *
 * @public {number|undefined} id
 * @public {string|undefined} external_id
 * @public {string|undefined} name
 * @public {number|undefined} variants
 * @public {number|undefined} synced
 * @public {string|undefined} thumbnail_url
 */
export default class Product extends BaseDefinition {
    id: number | undefined;
    external_id: string | undefined;
    name: string | undefined;
    variants: number | undefined;
    synced: number | undefined;
    thumbnail_url: string | undefined;
    constructor(token: Token, data: Object);
    fetchVariants(): Promise<Array<Variant>>;
}
