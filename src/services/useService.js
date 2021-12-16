import http from "./httpService";
import config from "./config.json";

export const userRegister = (user) => {
  return http.post(`${config.localapi}/api/Register`, JSON.stringify(user));
};
export const userLogin = (user) => {
  return http.post(`${config.localapi}/api/login`, JSON.stringify(user));
};
export const courses = () => {
  return http.get(`${config.localapi}/api/courses`);
};
export const course = (courseId) => {
  return http.get(`${config.localapi}/api/course/${courseId}`);
};
export const newCourse = (course) => {
  return http.post(`${config.localapi}/api/course`, course);
};
export const updateCourse = (newGame, newGameId) => {
  return http.put(`${config.localapi}/api/course/${newGameId}`, newGame);
};
export const deleteCourse = (newGameId) => {
  return http.delete(`${config.localapi}/api/course/${newGameId}`);
};
