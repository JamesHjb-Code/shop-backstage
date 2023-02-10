/**
 * date:2023.2.10
 * by:James
 * to:登录管理
 */
const mysql = require('mysql') //引入mysql模块
const mysqlConfig = require('../../db/mysql') // 引入mysql连接配置
const sql = require('./sql') // 引入封装sql语句
const pool = mysql.createPool(mysqlConfig) // 创建mysql连接池
const createToken = require('../../token/index') // 生成token
let loginControll = {
  // 验证登录
  checkLogin: (req, res, next) => {
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
              createToken.setToken(result[0].id, result[0].useranme).then(token => {
                res.json({
                  code: 200,
                  msg: '登录成功',
                  token: token,
                  success: true,
                })
              })
            } else {
              // 查询用户名是否存在
              connection.query(sql.getInfoByName, [req.query.username], (err, data) => {
                if (err) {
                  return res.lose(err)
                } else {
                  if (data?.length === 0) {
                    return res.json({
                      code: 403,
                      msg: '用户名不存在',
                      success: false,
                    })
                  } else {
                    // 密码是否错误
                    if (req.query.username === data[0].username && req.query.password !== data[0].password) {
                      return res.json({
                        code: 403,
                        msg: '密码错误',
                        success: false,
                      })
                    } else {
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
  },
  // 验证用户名
  checkUsername: (req, res, next) => {
    if (req.query.username !== '') {
      pool.getConnection((err, connection) => {
        connection.query(sql.getInfoByName, [req.query.username], (err, data) => {
          if (err) {
            return res.lose(err)
          } else {
            if (data?.length !== 0) {
              res.json({
                code: 403,
                msg: '用户名已存在,请重新填写其他用户名',
                success: true,
                result: data
              })
            } else {
              res.json({
                code: 200,
                msg: '该用户名可用',
                success: true,
                result: [{ username: '' }]
              })
            }
          }
        })
      })
    }
  },
  // 注册
  register: (req, res, next) => {
    if (req.query.username || req.query.password || req.query.phone || req.query.address) {
      pool.getConnection((err, connection) => {
        // 插入管理员信息
        connection.query(sql.insertInfo, [req.query.username, req.query.password, req.query.phone, req.query.address], (err, data) => {
          if (err) {
            return res.lose(err)
          } else {
            if (data?.length !== 0) {
              return res.json({
                code: 200,
                msg: '注册成功',
                success: true
              })
            }
          }
        })
      })
    }
  },
  // 获取管理员信息
  getInfo: (req, res, next) => {
    pool.getConnection((err, connection) => {
      // 从客户端session的密钥获取
      // console.log(req.headers['token'])
      createToken.getToken(req.headers['token']).then((query) => {
        connection.query(sql.getInfoById, [query.id], (err, data) => {
          if (err) {
            return res.lose(err)
          } else {
            res.json({
              code: 200,
              msg: '获取管理员信息成功',
              success: true,
              result: data[0]
            })
          }
        })
      })
    })
  }
}

// 导出loginControll
module.exports = loginControll
