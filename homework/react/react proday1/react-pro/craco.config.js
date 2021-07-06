const CracoLessPlugin = require('craco-less');
const pxtoviewport = require('postcss-px-to-viewport');
module.exports={ plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@brand-primary': 'red', '@brand-primary-tap': 'red'},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  style: {
    postcss: {
      plugins: [
        // https://www.npmjs.com/package/postcss-px-to-viewport
        pxtoviewport({
          // 设计稿的宽度
          viewportWidth: 375,
          // 求vw精确到小数点后几位
          unitPrecision: 3,
          propList: ['*'],
          // propList: ['width', 'font-size', 'margin', 'padding'],
        })
      ]
    }
  }
}
