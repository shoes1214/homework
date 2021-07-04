const mongoose = require('mongoose')

const users = new mongoose.Schema({
	// 手机号
	phone: {
		type: Number,
		// unique: true,
		// required: true,
	},
	// 软删除
	deleted: {
		type: Boolean,
		default: false,
	},
	// 创建时间
	gmtCreate: {
		type: Date,
		default: '',
	},
	// 修改时间
	gmtModified: {
		type: Date,
		default: '',
	},
	// 用户名
	username: {
		type: String,
		// unique: true,
		default: '静哥我爱你～',
	},
	// 密码
	password: {
		type: String,
	},
	// 昵称
	nickName: {
		type: String,
		default: '谷粉',
	},
	// 头像
	avatar: {
		type: String,
		default: 'http://localhost:5000/imgs/haijing.jpeg',
	},
	token: {
		type: String,
	},
})

// 一定是普通函数！
users.pre('save', function (next) {
	const date = new Date().toLocaleString()

	if (this.isNew) {
		this.gmtCreate = date
	}

	this.gmtModified = date

	next()
})

module.exports = mongoose.model('users', users)
