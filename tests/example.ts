import Printfully from "../lib/Printfully";
import ApiKeys from "../ApiKeys";

let run = async () => {
    const p = new Printfully(ApiKeys.printful);
    const v = await p.fetchProductVariantsById(204454220);
    /*const store = await p.fetchStore();
    const products = await store.fetchProducts();
    console.log(await products[0].fetchVariants());*/
    console.log(v);
};

run();