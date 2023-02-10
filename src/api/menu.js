import axios from '~/libs/axios'

// 菜单列表
export const menuList = ()=>{
  return axios({
    url:'/menu/menuList',
    method:'get'
  })
}