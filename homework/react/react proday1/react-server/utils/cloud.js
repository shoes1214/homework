const tencentcloud = require("tencentcloud-sdk-nodejs");
const { SECRET_ID, SECRET_KEY } = require("../config");

const CaptchaClient = tencentcloud.captcha.v20190722.Client;

const clientConfig = {
  credential: {
    secretId: SECRET_ID,
    secretKey: SECRET_KEY,
  },
  region: "",
  profile: {
    httpProfile: {
      endpoint: "captcha.tencentcloudapi.com",
    },
  },
};

const client = new CaptchaClient(clientConfig);

module.exports = client;
