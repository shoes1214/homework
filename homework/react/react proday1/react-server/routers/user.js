/**
 * @description 路由器中间件 - 封装登录/注册路由
 */
const express = require('express')
const cookieParser = require('cookie-parser')

const Users = require('../db/models/users')
const { SuccessModal, ErrorModal } = require('../model')
const { filterPassword } = require('../utils/tools')
const { verify } = require('../utils/jwt')

const Router = express.Router
const router = new Router()

/**
 * @api {get} /user 获取用户信息
 * @apiDescription 获取用户信息
 * @apiName user
 * @apiGroup user: 用户
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code": 20000,
 *      "success" : true,
 *      "data" : {
 *      },
 *      "message": ""
 *  }
 * @apiSampleRequest http://localhost:5000/user
 * @apiVersion 1.0.0
 */
router.get('/', cookieParser(), async (req, res) => {
	try {
		const { user_session } = req.cookies
		const data = await verify(user_session)
		const user = await Users.findOne(data)
		res.json(new SuccessModal({ data: filterPassword(user) }))
	} catch (e) {
		console.log(e)
		res.json(new ErrorModal({ message: '用户未登录，请先登录' }))
	}
})

module.exports = router
