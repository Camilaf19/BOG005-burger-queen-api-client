
const requestHTTPLogin = ({ email, password }) => {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            'email': email,
            'password': password,
        })
    }).then(res => res.json())
        .then(res => res)

}

const requestHTTPGetProducts = (token) => {
    return fetch('http://localhost:8080/products', {
        method: "GET",
        headers: {
            "authorization": "Bearer " + token,
            "Content-type": "application/json"
        },
    }).then(res => res.json())
        .then(res => res)

}

const requestHTTPGetUsersAdmin = (token) => {
    return fetch('http://localhost:8080/users', {
        method: "GET",
        headers: {
            "authorization": "Bearer " + token,
            "Content-type": "application/json"
        },
    }).then(res => res.json())
        .then(res => res)

}

const requestHTTPNewUser = ({ email, password, role }) => {
    return fetch('http://localhost:8080/users', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            'email': email,
            'password': password,
            'role': role,

        })
    }).then(res => res.json())
        .then(res => res)

}

const requestHTTPNewProduct = ({ image, name, price, type }, token) => {
    return fetch('http://localhost:8080/products', {
        method: "POST",
        headers: {
            "authorization": "Bearer " + token,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            'image': image,
            'name': name,
            'price': price,
            'type': type,

        })
    }).then(res => res.json())
        .then(res => res)

}

const requestHTTPDeleteProduct = (token, id) => {
    return fetch('http://localhost:8080/products/'+id, {
        method: "DELETE",
        headers: {
            "authorization": "Bearer " + token,
            "Content-type": "application/json",
        }
    })
        .then(res => res.json())
        .then(res => res)

}

const requestHTTPDeleteUser = (token, id) => {
    return fetch('http://localhost:8080/users/'+id, {
        method: "DELETE",
        headers: {
            "authorization": "Bearer " + token,
            "Content-type": "application/json",
        }
    })
        .then(res => res.json())
        .then(res => res)

}

const requestHTTPEditProduct = ({ image, name, price, type }, token, id) => {
    return fetch('http://localhost:8080/products/'+id, {
        method: "PATCH",
        headers: {
            "authorization": "Bearer " + token,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            'image': image,
            'name': name,
            'price': price,
            'type': type,

        })
    }).then(res => res.json())
        .then(res => res)

}

const requestHTTPEditUser = ({ email, password, role }, token, id) => {
    return fetch('http://localhost:8080/users/'+id, {
        method: "PATCH",
        headers: {
            "authorization": "Bearer " + token,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            'email': email,
            'password': password,
            'role': role,

        })
    }).then(res => res.json())
        .then(res => res)

}

const requestHTTPNewOrder = ( dataOrder, token) => {
    return fetch('http://localhost:8080/orders', {
        method: "POST",
        headers: {
            "authorization": "Bearer " + token,
            "Content-type": "application/json",
        },
        body: JSON.stringify(dataOrder)
        
    }).then(res => res.json())
        .then(res => res)

}

const requestHTTPGetOrders = (token) => {
    return fetch('http://localhost:8080/orders', {
        method: "GET",
        headers: {
            "authorization": "Bearer " + token,
            "Content-type": "application/json",
        }
        
    }).then(res => res.json())
        .then(res => res)

}

const requestHTTPEditStatusOrder = (dataEditOrder, idOrder, token) => {
    return fetch('http://localhost:8080/orders/'+idOrder, {
        method: "PATCH",
        headers: {
            "authorization": "Bearer " + token,
            "Content-type": "application/json",
        },
        body: JSON.stringify(dataEditOrder)

    }).then(res => res.json())
        .then(res => res)

}
export {
    requestHTTPLogin, requestHTTPGetProducts, requestHTTPGetUsersAdmin,
    requestHTTPNewUser, requestHTTPNewProduct, requestHTTPDeleteProduct, requestHTTPDeleteUser,
    requestHTTPEditProduct, requestHTTPEditUser, requestHTTPNewOrder, requestHTTPGetOrders,
    requestHTTPEditStatusOrder
}