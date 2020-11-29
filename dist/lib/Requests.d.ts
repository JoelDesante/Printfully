import Token from "./authentication/Token";
import { Got } from "got";
export default class Requests {
    static create(token: Token): Got;
}
