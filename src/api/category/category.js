import request from "../../utils/request";

// 登录
export function addCategory(data) {
    return request({
        method: 'post',
        url: '/category/add',
        data
    })
}

// 分类列表
export function getCategoryList() {
    return request({
        method: 'get',
        url: '/category/list',
    })
}

// 分类列表
export function updateCategory(data) {
    return request({
        method: 'post',
        url: '/category/update',
        data
    })
}

// 删除分类
export function deleteCategory(id) {
    return request({
        method: 'delete',
        url: `/category/delete/${id}`,
    })
}