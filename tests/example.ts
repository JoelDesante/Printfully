import Printfully from "../lib/Printfully";
import ApiKeys from "../config/ApiKeys";

let run = async () => {
    const p = new Printfully(ApiKeys.printful);
    const v = await p.fetchProductVariantsById(204454220);
    console.log(v);
};

run();