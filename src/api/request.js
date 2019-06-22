/**
 * 该文件一般用以二次封装axios
 */
import axios from "axios";

/**
 * 
 * @param { String } url 
 * @param { Object } params 
 * @param { Object } options
 */
let get = function (url, params, options = {}) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: "get"
        }).then(function (responce) {
            resolve(responce.data);
        }).catch(function (error) {
            reject(error);
        });
    });
};

/**
 * 
 * @param { String } url 
 * @param { Object } body 
 * @param { Object } options
 */
let post = function (url, body, options = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: "post",
            url,
            data: body
        }).then(function (responce) {
            resolve(responce.data);
        }).catch(function (error) {
            reject(error);
        });
    });
};

export default {
    get,
    post
};
