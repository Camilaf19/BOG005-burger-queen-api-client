
 const requestHTTPLogin =  async (email, password) => {
    return fetch('http://localhost:8080/login', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            'email': email,
            'password': password,
        })
    }) .then(res => res.json())
       .then(res => res)

}

const requestHTTPGetProductsAdmin = async (token) => {
    console.log(token)
    return fetch('http://localhost:8080/products', {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "authorization": "Bearer" + token
        },
        })
        .then(res => console.log(res))

}

export { requestHTTPLogin, requestHTTPGetProductsAdmin}