import request from "@utils/request";

// 当前公共请求地址前缀
const url_prefix = "/common";

export const reqCountryData = () => {
  return request({
    method: "GET",
    url: `${url_prefix}/countryData`,
  });
};
