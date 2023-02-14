/**
 * date:2023.2.10
 * by:James
 * to:菜单管理
 */
const mysql = require('mysql') //引入mysql模块
const mysqlConfig = require('../../db/mysql') // 引入mysql连接池
const sql = require('./sql') // 引入封装sql语句
const pool = mysql.createPool(mysqlConfig) // 创建mysql连接池

// 菜单-数组转换树结构
const menuTree = (data,parentId)=>{
  function _handleTree (parentId) {
    return data.reduce((pre, cur) => {
      if (cur.parentId === parentId) {
        cur.children = _handleTree(cur.id)
        pre.push(cur)
      }
      return pre
    }, [])
  }
  return _handleTree(parentId)
}


let menuControll = {
  // 获取菜单列表
  getMenuList: (req, res, next) => {
    pool.getConnection((err, connection) => {
      connection.query(sql.getMenu, (err, data) => {
        if (err) {
          return res.lose(err)
        } else {
          res.json({
            code: 200,
            msg: '获取菜单列表信息成功',
            success: true,
            result: menuTree(data,0)
          })
        }
      })
    })
  }
}

// 导出menuControll
module.exports = menuControll