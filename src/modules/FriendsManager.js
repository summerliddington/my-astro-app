const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/users`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/users/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
    post(newGroupUser) {
      return fetch(`${remoteURL}/groupUsers`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newGroupUser)
      }).then(data => data.json())
  },
  getGroupUsers(groupId) {
    return fetch(`${remoteURL}/groupUsers?groupId=${groupId}&_expand=user`).then(result => result.json())
  }
}