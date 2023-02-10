/*
 create:2023.2.10
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
  router.post('/admin/login', (req, res, next) => {
    loginManage.checkLogin(req, res, next)
  })

  /**
   * @api {post} /api/admin/checkUsername 验证用户名
   * @apiName 验证用户名
   * @apiParam {string} username 用户名
   * @apiRequest http://127.0.0.1:3006/api/admin/checkUsername
    */
  router.post('/admin/checkUsername', (req, res, next) => {
    loginManage.checkUsername(req, res, next)
  })
  
   /**
   * @api {post} /api/admin/register 注册
   * @apiName 注册
   * @apiParam {string} username 用户名
   * @apiParam {string} password 密码
   * @apiParam {string} phone    手机号码
   * @apiParam {string} address  地址
   * @apiRequest http://127.0.0.1:3006/api/admin/register
    */
   router.post('/admin/register',(req,res,next)=>{
    loginManage.register(req,res,next)
   })

    /**
   * @api {get} /api/admin/getInfo 管理员信息
   * @apiName 管理员信息
   * @apiParam {string} username 用户名
   * @apiParam {string} phone 手机号码
   * @apiParam {string} address  地址
   * @apiParam {string} avatar  头像
   * @apiParam {string} roleLevel  权限
   * @apiRequest http://127.0.0.1:3006/api/admin/getInfo
    */
   router.get('/admin/getInfo',(req,res,next)=>{
    loginManage.getInfo(req,res,next)
   })
}
module.exports = loginApi
