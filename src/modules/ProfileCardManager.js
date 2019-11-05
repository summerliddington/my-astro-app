const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
   },
   getSunsign(sunsign) {
    return fetch(`${remoteURL}/sunsigns/${sunsign}`).then(result => result.json())
   },
   getAll() {
    return fetch(`${remoteURL}/sunsigns`).then(result => result.json())
   },




  delete(id) {
    return fetch(`http://localhost:5002/users/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}