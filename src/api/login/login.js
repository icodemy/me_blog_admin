import request from "../../utils/request";

// 登录
export function login(data) {
    return request({
        method: 'post',
        url: '/login',
        data
    })
}

//退出登录
export function logout() {
    return request({
        method: 'get',
        url: '/logout',
    })
}

