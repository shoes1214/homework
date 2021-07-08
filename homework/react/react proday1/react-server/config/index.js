/*
  所有服务器和数据库的配置
 */
const isDev = process.env.NODE_ENV === "development";

// mongodb的配置
const MONGO_CONFIG = {
  port: 27017,
  host: "localhost",
  database: "react_dbs",
};
// 服务器配置
let SERVER_CONFIG = {
  port: 80,
  host: "0.0.0.0",
};

if (isDev) {
  SERVER_CONFIG = {
    port: 5000,
    host: "localhost",
  };
}

// github oauth
const CLIENT_ID =
  "569f66147235b39570b2e59530a1f3bdfb933e3b71e0b5bb48ba0cdb51cfd101";
const CLIENT_SECRET =
  "c45f6fdfc36316f192cd6429663864cd18349d0d426ba9392ba4d8455b0b1b0a";

const SECRET = "A0D2af~.dsa";

// 腾讯云配置
const CAPTCHA_APP_ID = 2030765311; // 秘钥应用id
const APP_SECRET_KEY = "0GHdZLovPyGCRMBcJobbSXQ**"; // 验证码应用AppSecretKey
const SECRET_ID = "AKIDFExUogtYu0rToQqZ5EWXXImJanlRmkBJ"; // 秘钥secretId
const SECRET_KEY = "13FvLTjkfKjFVo2dy2rwlMwpBH8kB6m1"; // 秘钥secretKey

module.exports = {
  MONGO_CONFIG,
  SERVER_CONFIG,
  SECRET,
  CLIENT_ID,
  CLIENT_SECRET,
  CAPTCHA_APP_ID,
  APP_SECRET_KEY,
  SECRET_ID,
  SECRET_KEY,
};
