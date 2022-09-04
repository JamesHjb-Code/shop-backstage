/**
 * date:2022.09.3
 * by:James
 * to:登录管理
 */
const mysql = require('mysql') //引入mysql模块
const mysqlConfig = require('../../db/mysql') // 引入mysql连接配置
const sql = require('./sql') // 引入封装sql语句
var pool = mysql.createPool(mysqlConfig) // 创建mysql连接池

let loginControll = {
  // 验证登录
  checkLogin: (req, res, next) => {
    console.log(req.query)
    // 表单不能为空
    if (req.query.username === '' || req.query.password === '') {
      return res.json({
        code: 403,
        msg: '用户名和密码不能为空',
        success: false,
      })
    }
    else {
      pool.getConnection((err, connection) => {
        // 验证用户名和密码
        connection.query(sql.login, [req.query.username, req.query.password], (err, result) => {
          if (err) {
            return res.lose(err)
          }
          else {
            if (result.length !== 0) {
              res.json({
                code: 200,
                msg: '登录成功',
                success: true,
                data: result,
              })
            }else{
              // 查询用户名是否存在
              connection.query(sql.getInfoByName,[req.query.username],(err,data)=>{
                if(err){
                  return res.lose(err)
                }else{
                  if(data?.length === 0 ){
                    return res.json({
                      code:403,
                      msg:'用户名不存在',
                      success:false,
                    })
                  }else{
                    // 密码是否错误
                    if(req.query.username === data[0].username && req.query.password !== data[0].password){
                      return res.json({
                        code:403,
                        msg:'密码错误',
                        success:false,
                      })
                    }else{
                      return res.json({
                        code: 400,
                        msg: '系统错误'
                    })
                    }
                  }
                }
              })
            }
          }

        })
      })
    }
  }
}

// 导出loginControll
module.exports = loginControll
