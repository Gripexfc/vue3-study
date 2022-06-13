// const request = require('axios');
import axios from 'axios';

export default class Request {
    constructor() {
        const instance = axios.create({
            baseURL: 'http://172.18.14.209:8080/',
            timeout: 10000,
            headers: {'X-Custom-Header': 'foobar'}
        });
    }
    config: object = {
        
    }

    request(option: { [key in string]: string }) {
        // option.method = option.method || {};
        // option.method = option.method || this.config.method;
        // axios.get('http://47.113.191.0:8031/api/categories', {
        //   })
        axios({
            method: 'get',
            url: 'http://172.18.14.209:8080/api/categories',
          });
        
          
        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            console.log('请求拦截器')
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        axios.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        });

    }

    get(url: string, option: object = {}) {
        this.request({
            method: 'get',
            url,
            ...option
        })
    }
}