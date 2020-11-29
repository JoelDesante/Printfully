import Token from "../../authentication/Token";
import BaseDefinition from "../BaseDefinition";
import Requests from "../../Requests";
import Variant from "./Variant";

/**
 * Represents the overall Product.
 * @param {Token} token The API Key for making requests
 * @param {Object} data The data for the store, presumably received from the Printful API
 */
export default class Product extends BaseDefinition{

    public id: number|undefined;
    public external_id: string|undefined;
    public name: string|undefined;
    public variants: number|undefined;
    public synced: number|undefined;
    public thumbnail_url: string|undefined;

    constructor(token: Token, data: Object) {
        super(token);
        Object.assign(this, data);
    }

    fetchVariants(): Promise<Array<Variant>> {
        return new Promise<Array<Variant>>((resolve, reject) => {
            const request = Requests.create(this.token);
            // FIXME: Make this paginate
            if(this.id === undefined)
                throw new TypeError('Product id must be defined to fetch variants.');

            request(`store/products/${this.id}`).json()
                .then(response => {

                    // @ts-ignore
                    const data = response.result.sync_variants;
                    let variants = new Array<Variant>();

                    // Process each object and convert to tangible Product objects
                    data.forEach((variantData: Object) => {
                        variants.push(new Variant(this.token, variantData))
                    });
                    resolve(variants);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}
