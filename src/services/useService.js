import http from "./httpService";
import config from "./config.json";

export const userRegister = (user) => {
  return http.post(`${config.localapi}/api/Register`, JSON.stringify(user));
};
