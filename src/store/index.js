import { createStore } from "vuex"
const store = createStore({
  state(){
    return {
      userInfo:{}, //用户信息
    }
  },
  mutations:{
    // 记录用户信息
    SET_USERINFO(state, user){
      state.userInfo = user
    }
  }
})
export default store