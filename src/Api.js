import {ajax} from "rxjs/ajax";

export class Api {
    static URL = "http://localhost:9000";
    static fetch = (url, method = "GET", body, headers) => {
        return ajax( {
            url: Api.URL + url,
            method: method,
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: body
        }).toPromise()
            .then((res) => res.response);
    }
}

export default Api;

