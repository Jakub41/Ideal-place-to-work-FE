export default class CRUD {
    username = "user13";
    password = "6c#k#ANpA&k^s3t2";
    auth = btoa(this.username + ":" + this.password);
    headers = {
        Authorization: "Basic " + this.auth,
        "Content-Type": "application/json"
    };

    get(id) {
        return fetch(
            "https://strive-school-testing-apis.herokuapp.com/api/comments/" + id,
            {
                headers: this.headers
            }
        ).then(response => response.json());
    }
    post(data) {
        return fetch(
            "https://strive-school-testing-apis.herokuapp.com/api/comments",
            {
                headers: this.headers,
                method: "POST",
                body: JSON.stringify(data)
            }
        ).then(response => response.json());
    }
    put(id, data) {
        return fetch(
            "https://strive-school-testing-apis.herokuapp.com/api/comments/" + id,
            {
                headers: this.headers,
                method: "PUT",
                body: JSON.stringify(data)
            }
        ).then(response => response.json());
    }
    delete(id) {
        return fetch(
            "https://strive-school-testing-apis.herokuapp.com/api/comments/" + id,
            {
                method: "DELETE",
                headers: this.headers
            }
        ).then(response => response.json());
    }

}
