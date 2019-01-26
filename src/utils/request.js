import axios from './axiosLogin';

export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, {
            ...data
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}
