import axios from "axios";
import {Message} from "element-ui";
import router from "../router";

const request = axios.create({
    baseURL:'http://localhost:8888',
    timeout:5000
})

//请求拦截器
request.interceptors.request.use(
    config => {
        // do something before request is sent

        // if (store.getters.token) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        // config.headers['X-Token'] = getToken()
        // }
        //如果存在token，请求携带token
        if (window.localStorage.getItem('token')){
            config.headers['Authorization'] = window.localStorage.getItem('token')
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
request.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    success=>{
        //业务逻辑错误
        console.log('success',success)
        if(success.status && success.status===200){
            if(success.data.code !== 200){
                Message.error({message:success.data.message})
                return;
            }

            if(success.data.message){
                Message.success({message:success.data.message})
            }
        }
        return success;
    },
    error => {
        console.log('error==>',error.response)

        if(error.response.status === 500 ){
            Message.error({message:'服务器发生错误！'})
        }

        else if(error.response.status === 400){
            console.log('400',error.response.data.message)
            Message.error({message:'服务器发生错误！'})
        }

        else if(error.response.status === 405){
            Message.error({message:'405 请求方法错误！'})
        }

        else if(error.response.status === 403){
            Message.error({message:'权限不足！'})
        }

        else if(error.response.status === 401){
            Message.error({message:'未登录！'});
            router.replace('/');
        }

        else {
            if(error.response.data.message){
                Message.error({message:error.response.data.message});
            }else {
                Message.error({message:'未知错误！'});
            }
        }

        return Promise.reject(error)
    }
)

export default request