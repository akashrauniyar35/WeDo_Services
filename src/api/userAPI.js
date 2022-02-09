import axios from 'axios';


const rootURL = 'https://wedo-backend.herokuapp.com/v1/customer'
const loginURL = rootURL + '/login'

export const fetchLogin = (loginObj) => {
    return new Promise((resolve, reject) => {
        axios.post(loginURL, loginObj)
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (err) {
                reject(err);
            })
    })

}