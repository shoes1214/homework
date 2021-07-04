/**
 * @description 路由器中间件 - 封装登录/注册路由
 */
const { readFile } = require("fs");
const { resolve } = require("path");
const express = require("express");
const tencentcloud = require("../utils/cloud");
const { APP_SECRET_KEY, CAPTCHA_APP_ID } = require("../config");
const { SuccessModal, ErrorModal } = require("../model");

const Router = express.Router;

const router = new Router();

/**
 * @api {get} /common/countryData 所有城市数据
 * @apiDescription 所有城市数据
 * @apiName countryData
 * @apiGroup common: 公共
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code": 20000,
 *      "success" : true,
 *      "data" : {
 *      },
 *      "message": ""
 *  }
 * @apiSampleRequest http://localhost:5000/common/countryData
 * @apiVersion 1.0.0
 */
router.get("/countryData", async (req, res) => {
  readFile(resolve(__dirname, "./countryData.json"), (err, chunk) => {
    if (err) {
      res.json(new ErrorModal({ message: "数据错误" }));
      return;
    }
    res.json(new SuccessModal({ data: JSON.parse(chunk.toString()) }));
  });
});

/**
 * @api {post} /common/verifycode 验证腾讯验证码是否正确
 * @apiDescription 验证腾讯验证码是否正确
 * @apiName 验证腾讯验证码是否正确
 * @apiGroup common: 公共
 * @apiSuccess {Object} data
 * @apiSampleRequest http://localhost:5000/common/verifycode
 * @apiVersion 1.0.0
 */
router.post("/verifycode", async (req, res) => {
  try {
    const { ticket, randStr } = req.body;

    const params = {
      CaptchaType: 9,
      Ticket: ticket,
      UserIp: "127.0.0.1",
      Randstr: randStr,
      CaptchaAppId: CAPTCHA_APP_ID,
      AppSecretKey: APP_SECRET_KEY,
    };

    const result = await tencentcloud.DescribeCaptchaResult(params);

    res.json(new SuccessModal({}));
  } catch (e) {
    console.log(e);
    res.json(new ErrorModal({ message: "滑动验证码校验失败" }));
  }
});

module.exports = router;
