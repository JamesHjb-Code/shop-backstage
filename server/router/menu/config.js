/**
 * date:2023.2.10
 * by:James
 * to:菜单管理
 */
const mysql = require('mysql') //引入mysql模块
const mysqlConfig = require('../../db/mysql') // 引入mysql连接池
const pool = mysql.createPool(mysqlConfig) // 创建mysql连接池

// 菜单-数组转换树结构
const menuTree = (result)=>{
  const child = result.filter(item => item.id === parentId)
  if(!child.length){
    return false
  }
  return child.map(node => ({
    ...node,
    children: convertToTree(flatData, node.id)
}))

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
            result: menuTree(data)
          })
        }
      })
    })
  }
}

// 导出menuControll
module.exports = menuControll