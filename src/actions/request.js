import axios from "axios";


// const baseApiUrl = '';

const http = (method, url, data, type) => {
    return new Promise((resolve, reject) => {
        return axios({
            method: method,
            url: url,
            data: data,
        })
            .then((result) => {
                resolve(result.data);
            })
            .catch(error => {
                console.log(error);
                reject(error.message);
            });
    })

};

export default http;