import Api from "../../Api";

export default class CRUD {

    get(id) {
        return Api.fetch(
            "/api/v1/reviewForPlace/" + id,
            "GET",
            {
                headers: this.headers
            }
        ).then(response => response.json());
    }
    post(data,id) {
        return Api.fetch(
            "/api/v1/reviews/" + id,
            {
                headers: this.headers,
                method: "POST",
                body: JSON.stringify(data)
            }
        ).then(response => response.json());
    }
    put(id, data) {
        return Api.fetch(
            "/api/v1/reviews/" + id,
            {
                headers: this.headers,
                method: "PUT",
                body: JSON.stringify(data)
            }
        ).then(response => response.json());
    }
    delete(id,placeId) {
        return Api.fetch(
            "/api/v1/reviews/" + id + "/" + placeId,
            {
                method: "DELETE",
                headers: this.headers
            }
        ).then(response => response.json());
    }

}
