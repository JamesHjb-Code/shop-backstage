const express = require('express')
const router = express.Router()
/**
 * 各种模块路径
 */
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 引入登录模块
const loginApi = require('./login')

loginApi(router)

module.exports = router