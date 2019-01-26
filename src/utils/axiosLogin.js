import axios from 'axios';
import Cookie from 'js-cookie';
import Router from '../router/index';
import { MessageBox } from 'element-ui';

if (process.env.NODE_ENV === 'development') { // 开发环境
    axios.defaults.baseURL = 'http://localhost:3000';
} else if (process.env.NODE_ENV === 'debug') { // 测试环境
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV === 'producation') { // 生产环境
    axios.defaults.baseURL = '';
}

// 设置接口请求时长
axios.defaults.timeout = 5000;

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset-UTF-8';

// 拦截器
axios.interceptors.request.use(
    (config) => {
        let userName = Cookie.get('userName');
        userName && (config.headers.userName = userName);
        config.headers.userName = 'gz'
        return config
    },
    error => {
        return Promise.error(error)
    }
)

// 拦截器
axios.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        switch (error.response.status) {
        // 用户未登录
        case 401:
            Router.push({
                path: '/login'
            })
            break;
        // 用户登录过期
        case 403:
            MessageBox.alert('对不起，您的账户已过期，请重新登录！', '账户过期', {
                confirmButtonText: '确定',
                callback: () => {
                    Router.push('/login')
                }
            })
            Cookie.remove('userName');
            break;
        default:
            return Promise.reject(error.response)
        }
    }
)

export default axios;
