import { createStore } from "vuex"
import { getInfo } from '~/api/login'
const store = createStore({
  state () {
    return {
      userInfo: {}, //用户信息
    }
  },
  // 同步
  mutations: {
    // 记录用户信息
    SET_USERINFO (state, user) {
      state.userInfo = user
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