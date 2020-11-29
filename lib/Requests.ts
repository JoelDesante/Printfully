import Token, {TokenComponents} from "./authentication/Token";
import config from "../config";
import got, {Got} from "got";

export default class Requests {
    static create(token: Token): Got {
        const tokenComponents: TokenComponents = token.getTokenComponents();
        return got.extend({
            prefixUrl: config.api_endpoint,
            username: tokenComponents.username,
            password: tokenComponents.password,
            responseType: 'json',
            retry: 3
        });
    }

}