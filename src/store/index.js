import { createStore } from "vuex"
const store = createStore({
  state(){
    return {
      userInfo:{}, //用户信息
    }
  },
  // 同步
  mutations:{
    // 记录用户信息
    SET_USERINFO(state, user){
      state.userInfo = user
    }
  },
  // 异步
  actions:{

  }
})
export default store