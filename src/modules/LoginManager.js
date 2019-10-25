const remoteURL = "http://localhost:5002"

export default {
    createUser(user) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then (Response => Response.json())
    },
    getUserData() {
        return fetch(`${remoteURL}/users`)
            .then(data => data.json())
    },
    getAstroData() {
        return fetch(`${remoteURL}/sunsigns`)
            .then(data => data.json())
    }
}