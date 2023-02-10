import axios from '~/libs/axios'

// 登录
export const login = (query) =>{
  return axios({
    url: '/admin/login', // 请求地址
    method: 'post', // 请求方式
    params:query
})
}

// 验证用户名
export const checkUsername = (username) => {
  return axios({
    url:'/admin/checkUsername',
    method:'post',
    params:{
      username:username
    }
  })
}

// 注册
export const register = (query) =>{
  return axios({
    url:'/admin/register',
    method:'post',
    params:query
  })
}

// 获取管理员信息
export const getInfo = ()=>{
  return axios({
    url:'/admin/getInfo',
    method:'get'
  })
}