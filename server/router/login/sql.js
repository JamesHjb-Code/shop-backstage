// sql语句封装
const loginSqls = {
  login:'SELECT id,username,password FROM admin_info WHERE username=? and password=?',
  getInfoByName:'SELECT id,username FROM admin_info WHERE username=?',
  insertInfo:'INSERT INTO admin_info (username,password,phone,address,avatar,roleLevel) VALUES (?,?,?,?,"./src/assets/img/avator.jpg",2)'
}
// 导出sql语句
module.exports = loginSqls