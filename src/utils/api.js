const handleResponse = (res) => {
    if (!res.ok) {
      return Promise.reject(new Error("Error!" + res.statusText));
    }
    return res.json();
  }

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getCardList() {
        return fetch(this._baseUrl + "/cards", {
                headers: this._headers
            })
            .then(handleResponse);
    }

    getUserInfo() {
        return fetch(this._baseUrl + "/users/me", {
                headers: this._headers
            })
            .then(handleResponse);
    }

    addCard(name, link) {
        return fetch(this._baseUrl + "/cards", {
                method: "POST",
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    link
                })
            })
            .then(handleResponse);
    }

    removeCard(cardId) {
        return fetch(this._baseUrl + "/cards/" + cardId, {
                method: "DELETE",
                headers: this._headers
            })
            .then(handleResponse);
    }

    changeLikeCardStatus(cardId, isLiked) {
        return fetch(this._baseUrl + "/cards/likes/" + cardId, {
                method: !isLiked ? "PUT" : "DELETE",
                headers: this._headers
            })
            .then(handleResponse);
    }

    updateUserInfo(name, about) {
        return fetch(this._baseUrl + "/users/me", {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    about
                })
            })
            .then(handleResponse);
    }

    setUserAvatar(link) {
        return fetch(this._baseUrl + "/users/me/avatar", {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    avatar: link
                })
            })
            .then(handleResponse);
    }


}

export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-7",
    headers: {
        authorization: "eff000d8-7eb0-4383-a680-82894073e363",
        "Content-Type": "application/json"
    }
});