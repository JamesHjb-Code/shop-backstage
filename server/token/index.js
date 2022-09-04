/**
 * date:2022.09.4
 * by:James
 * to:token模块
 */

// 引入token模块
const jwt = require('jsonwebtoken')
// token配置
const tokenConfig = {
  jwtSecreKey:'itheima No1.relax',
  expireIn:'3h'
}

// 登录-生成token
const setToken = (id,username,rule)=>{
  return new Promise((resolve,rejcet)=>{
    try{
      /**
       * @expiresIn:设置token失效的时间
       * params:解析并传入id、用户名和用户权限的参数
       */
      const params = {
        id:id,
        username:username,
        rule:rule
      }
      const token = jwt.sign(params,tokenConfig.jwtSecreKey,{expiresIn:tokenConfig.expireIn})
      resolve(token)
    }catch{
      rejcet()
    }
  })
}

exports.module = setToken