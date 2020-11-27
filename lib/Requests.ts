import Token from "./authentication/Token";
import * as https from "https";
import config from "../config";

export default class Requests {

    private static options = {
        hostname: config.api_endpoint,
        port: 443
    };

    static getJSON(path: string, token: Token): Promise<Object> {
        return new Promise<any>((resolve, reject) => {
            let options = Object.create(Requests.options);
            options.path = path;
            options.auth = token.getKey();
            options.method = 'GET';

            const request = https.request(Requests.options, response => {
                let responseBody = new Array();
                const dataIn = response.on('data', data => {
                    responseBody.push(data);
                });

                dataIn.on('end', () => {
                    const responseString = Buffer.concat(responseBody).toString();
                    const responseAsObject = JSON.parse(responseString);
                    resolve(responseAsObject);
                });
            });

            request.on('error', (err) => {
                reject(err);
            })
        });
    };

    static postJSON(path: string, token: Token): Promise<Object> {
        return new Promise<Object>((resolve, reject) => {});
    }

}