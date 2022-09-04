// sql语句封装
const loginSqls = {
  login:'SELECT id,username,password FROM admin WHERE username=? and password=?',
  getInfoByName:'SELECT id,username,password FROM admin WHERE username=?'
}
// 导出sql语句
module.exports = loginSqls