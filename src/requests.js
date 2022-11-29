
const requestHTTPLogin = async (email, password) => {
    return fetch('http://localhost:8080/login', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            'email': email,
            'password': password,
        })
    }).then(res => res.json())
        .then(res => res)

}

const requestHTTPGetProductsAdmin = async (token) => {
    return fetch('http://localhost:8080/products', {
        method: "GET",
        headers: {
            "authorization": "Bearer " + token,
            "Content-type": "application/json"
        },
    }).then(res => res.json())
        .then(res => res)

}

export { requestHTTPLogin, requestHTTPGetProductsAdmin }