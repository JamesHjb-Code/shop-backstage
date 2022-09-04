/*
 create:2022.09.3
 by:James
 to:登录模块
*/
const loginManage = require('./config')

const loginApi = (router) => {

  /**
 * @api {post} /api/admin/login 登录
 * @apiName 登录
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {string} jwtToken token
 * @apiRequest http://127.0.0.1:3006/api/admin/login
   */
  router.post('/admin/login',  (req, res, next) =>{
    loginManage.checkLogin(req, res, next)
  })
}
module.exports = loginApi
