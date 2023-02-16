import { createStore } from "vuex"
import { getInfo } from '~/api/login'
const store = createStore({
  state () {
    return {
      userInfo: {}, //用户信息
      menuWidth: '200px', //菜单宽度-展开/收缩
    }
  },
  // 同步
  mutations: {
    // 记录用户信息
    SET_USERINFO (state, user) {
      state.userInfo = user
    },
    // 侧边菜单是否展开/收缩
    SET_MenuWidth (state) {
      state.menuWidth = state.menuWidth === "200px" ? "64px" : "200px"
    }
  },
  // 异步
  actions: {
    // 获取当前登录用户信息
    getInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          commit("SET_USERINFO", res.result)
          resolve(res)
        }).catch(err => reject(err))
      })

    }
  }
})
export default store