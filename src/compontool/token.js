import { useCookies } from '@vueuse/integrations/useCookies'
const tokenName = 'token'
const cookie = useCookies()

// 获取token
export const getToken = () => {
  return cookie.get(tokenName)
}

// 设置token
export const setToken = (token) => {
  return cookie.set(tokenName,token)
}

// 清除token
export const removeToken = () => {
  return cookie.remove(tokenName)
}