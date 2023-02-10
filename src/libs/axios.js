import axios from 'axios'
import { prompt } from '~/compontool/util'
import { getToken } from '~/compontool/token'

// axios创建实例
const service = axios.create({
  baseURL:'/api',
  timeout: 　5*1000// 请求超时时间 这里的意思是当请求时间超过5秒还未取得结果时 提示用户请求超时
})

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 往header自动添加token
  const token = getToken()
  if(token){
    config.headers["token"] = token
  }
 return config // 将配置完成的config对象返回出去 如果不返回 请求讲不会进行
}, err => {
 // 请求发生错误时的相关处理 抛出错误
Promise.reject(err)
})

// 添加响应拦截器
service.interceptors.response.use(res => {
  // 我们一般在这里处理，请求成功后的错误状态码 例如状态码是500，404，403
  // res 是所有相应的信息
 return res.data
}, err => {
  // 服务器响应发生错误时的处理
  prompt(err || '请求失败','error')
  return Promise.reject(err)
})

export default service