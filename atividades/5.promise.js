var soma = Promise.resolve(5 + 5)


const url = "https://jsonplaceholder.typicode.com/users"

var api = Promise.resolve(fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let list = new Array
        data.map(function (user) {
            list.push(`${user.name} (${user.username})`)
        })
        return list
    })
    .catch((error) => {
        return "Oops" + error
    }))



Promise.all([api, soma])
    .then((success) => {
        console.log(success)
    })
    .catch((error) => {
        console.log(error)
    })


