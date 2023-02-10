/**
 * date:2023.2.10
 * by:James
 * to:token模块
 */

// 引入token模块
const jwt = require('jsonwebtoken')
// token配置
const tokenConfig = {
  jwtSecreKey: 'itheima No1.relax',
  expireIn: '3h'
}

// 登录-生成token
const setToken = (id, username) => {
  return new Promise((resolve, rejcet) => {
    try {
      /**
       * @expiresIn:设置token失效的时间
       * params:解析并传入id、用户名和用户权限的参数
       */
      const params = {
        id: id,
        username: username,
      }
      const token = jwt.sign(params, tokenConfig.jwtSecreKey, { expiresIn: tokenConfig.expireIn })
      resolve(token)
    } catch {
      rejcet()
    }
  })
}

// 各种接口验证token方法
const getToken = (token) => {
  return new Promise((resovle, rejcet) => {
    if (!token) {
      rejcet({ error: 'token是空的' })
    } else {
      // 需要token验证的接口，则通过jwt.verify()验证token的有效性
      let tokenInfo = jwt.verify(token, tokenConfig.jwtSecreKey, (err, decode) => {
        if (err) {
          if (err.name === 'TokenExpiredError') {
            const msg = {
              code: 401,
              msg: 'token过期'
            }
            return msg
          } else if (err.name === 'JsonWebTokenError') {
            const msg = {
              code: 401,
              msg: 'token无效'
            }
            return msg
          }
        } else {
          return decode
        }
      })
      resovle(tokenInfo)
    }
  })

}

module.exports = { setToken, getToken }