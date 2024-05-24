// import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios  from 'axios';

console.log(import.meta);


// const encryptHeader = 'encrypt-key';

// 创建一个 axios 实例
const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 60000, // 请求超时时间毫秒
})

// 添加请求拦截器
// request.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    
// })


// 添加响应拦截器
// request.interceptors.response.use(
//     (res: AxiosResponse) => {

//     })

export default request
