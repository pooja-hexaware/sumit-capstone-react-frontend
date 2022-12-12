import http from "./httpConfig";

const getAll = (apiName) => {
  return http.get(`/${apiName}`);
};

const get = (apiName, id) => {
  return http.get(`/${apiName}/${id}`);
};

const create = (apiName, data) => {
  return http.post(`/${apiName}`, data);
};

const update = (apiName, id, data) => {
  return http.put(`/${apiName}/${id}`, data);
};

const remove = (apiName, id) => {
  return http.delete(`/${apiName}/${id}`);
};

const removeAll = (apiName) => {
  return http.delete(`/${apiName}`);
};

const findBySlang = (apiName, value) => {
  return http.get(`/${apiName}/${value}`);
};

const HTTPService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findBySlang
};

export default HTTPService;
