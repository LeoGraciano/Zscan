var soma = async function () {
    return 5 + 5
}


const url = "https://jsonplaceholder.typicode.com/users"

var api = async function (url) {
    let list = new Array
    await fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            data.map(function (user) {
                list.push(`${user.name} (${user.username})`)
            })

        })
        .catch((error) => {
            list.push("Oops" + error)
        })

    return list
}



async function call() {
    let s = await soma()
    let a = await api(url)
    console.log(a)
    console.log(s)
}

call()
