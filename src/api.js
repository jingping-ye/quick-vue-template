/**
 * Title: api
 * Author: 作者
 * Date: 2020-05-19 15:06:21
 * Description: API文档
 * LastModifiedDate:2020-05-19 15:06:21
 * LastModifiedDescription: 修改描述
 */
import http from "@/utils/http";

const prefix = "v1"; // 可以在此处写"v1/"，自动拼接路径
const api = {
  list: `${prefix}/api/list`,
  update: `${prefix}/api/update`,
  delete: `${prefix}/api/delete`,
  add:  `${prefix}/api/add`,
  detail: `${prefix}/api/detail`
};

/**
 * 获取列表
 * @param {object} argsParams
 * @param {number} argsParams.isDelete 是否删除状态 0-正常[default]|1-删除
 * @note 备注
 * @usage 使用示例
 */
function getApiList(argsParams = {}) {
  return http
    .get(api.list, {
      params: argsParams
    })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * 更新
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function updateApi(argsParams = {}) {
  return http
    .put(api.update, argsParams)
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * 新增
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function addApi(argsParams = {}) {
  return http
    .post(api.add, argsParams)
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * 删除
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function deleteApi(argsParams = {}) {
  return http
    .delete(api.delete, { data: { ...argsParams } })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * 获取详情
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function getApiDetail(argsParams = {}) {
  return http
    .post(api.detail, argsParams)
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

export default {
  getApiList,
  updateApi,
  addApi,
  deleteApi,
  getApiDetail
};
