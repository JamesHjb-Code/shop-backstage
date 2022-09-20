// 导入express模块
const express = require('express')
// 创建服务器
const app = express()

// 导入并配置cors中间件，配置跨域
const cors = require('cors')
app.use(cors())

// 主要是使用基于流的方式来接收数据和解析数据
const bodyParser = require('body-parser')
//解析application/x-www-form-urlencoded
app.use( bodyParser.urlencoded({extended: true}))
//解析application/json
app.use(bodyParser.json())

// 封装错误函数的中间件(放在模块路由前)
app.use((req,res,next)=>{
	// status：1表示错误情况
		res.lose = (err,status = 1)=>{
			res.send({
				status,
				message:err instanceof Error ?err.message:err,
			})
		}
		next()
})

// 页面路由
app.use('/', require('./router/index'))

// 调用app.listen方法
app.listen(3006,()=>{
  console.log('api server runing at http://127.0.0.1:3006')
})