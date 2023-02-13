/*
 create:2023.2.10
 by:James
 to:菜单模块
*/
const menuManage = require('./config')

const menuApi = (router) => {
  /**
    * @api {get} /api/menu/menuList 菜单列表
    * @apiName 菜单列表
    * @apiParam {string} authName 菜单名称
    * @apiParam {string} path 菜单路径
    * @apiParam {string} icon 菜单图标
    * @apiParam {string} parentId 父菜单权限
    * @apiRequest http://127.0.0.1:3006/api/menu/menuList
     */
   router.get('/menu/menuList', (req, res, next) => {
    menuManage.getMenuList(req, res, next)
  })
}

module.exports = menuApi