import axios from '~/libs/axios'

// ่ๅๅ่กจ
export const menuList = ()=>{
  return axios({
    url:'/menu/menuList',
    method:'get'
  })
}