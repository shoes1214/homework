const { createProxyMiddleware } = require('http-proxy-middleware');

// 让react脚手架启动代理配置
module.exports = function (app) {
  app.use(
    '/api', // 代理所有请求地址以 /api 开头的请求
    createProxyMiddleware({ // 将请求转发到其他服务器去
      target: 'http://localhost:5000', // 服务器地址
      changeOrigin: true, // 允许跨域
      pathRewrite: { // 请求地址重写
        '^/api': '' // 将 /api 去掉
      }
    })
  );
};