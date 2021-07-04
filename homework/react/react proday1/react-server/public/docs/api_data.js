define({ "api": [
  {
    "type": "get",
    "url": "/common/countryData",
    "title": "所有城市数据",
    "description": "<p>所有城市数据</p>",
    "name": "countryData",
    "group": "common:_公共",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:5000/common/countryData"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/common.js",
    "groupTitle": "common:_公共"
  },
  {
    "type": "post",
    "url": "/common/verifycode",
    "title": "验证腾讯验证码是否正确",
    "description": "<p>验证腾讯验证码是否正确</p>",
    "name": "验证腾讯验证码是否正确",
    "group": "common:_公共",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:5000/common/verifycode"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/common.js",
    "groupTitle": "common:_公共"
  },
  {
    "type": "post",
    "url": "/login/digits",
    "title": "发送验证码",
    "description": "<p>digits 发送验证码</p>",
    "name": "digits",
    "group": "login:_登录",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:5000/login/digits"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/login_cookie.js",
    "groupTitle": "login:_登录"
  },
  {
    "type": "get",
    "url": "/login/oauth/gitee",
    "title": "gitee oauth 登陆",
    "description": "<p>gitee oauth 登陆</p>",
    "name": "gitee_oauth",
    "group": "login:_登录",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>授权码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:5000/login/oauth/gitee"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/login_cookie.js",
    "groupTitle": "login:_登录"
  },
  {
    "type": "post",
    "url": "/login/phone",
    "title": "手机号登陆",
    "description": "<p>phone 手机号登陆</p>",
    "name": "phone",
    "group": "login:_登录",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:5000/login/phone"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/login_cookie.js",
    "groupTitle": "login:_登录"
  },
  {
    "type": "post",
    "url": "/login/user",
    "title": "用户账户密码登录",
    "description": "<p>用户账户密码登录</p>",
    "name": "user",
    "group": "login:_登录",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:5000/login/user"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/login_cookie.js",
    "groupTitle": "login:_登录"
  },
  {
    "type": "post",
    "url": "/regist/user",
    "title": "注册",
    "description": "<p>user  注册</p>",
    "name": "user",
    "group": "regist:_注册",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:5000/regist/user"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/regist.js",
    "groupTitle": "regist:_注册"
  },
  {
    "type": "post",
    "url": "/regist/verify_code",
    "title": "验证验证码是否正确",
    "description": "<p>verify_code  验证验证码是否正确</p>",
    "name": "verify_code",
    "group": "regist:_注册",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:5000/regist/verify_code"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/regist.js",
    "groupTitle": "regist:_注册"
  },
  {
    "type": "post",
    "url": "/regist/verify_phone",
    "title": "验证手机号是否存在",
    "description": "<p>验证手机号是否存在</p>",
    "name": "verify_phone",
    "group": "regist:_注册",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:5000/regist/verify_phone"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/regist.js",
    "groupTitle": "regist:_注册"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "获取用户信息",
    "description": "<p>获取用户信息</p>",
    "name": "user",
    "group": "user:_用户",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:5000/user"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/user.js",
    "groupTitle": "user:_用户"
  }
] });
