/***
 * api文档模板
 */

const formatTime = require("./timeUtil");

const apiTemplate = (fileName) => {
  const upperFileName = fileName.replace(fileName[0], fileName[0].toUpperCase());
  const templateFile = `/**
 * Title: ${fileName}
 * Author: 作者
 * Date: ${formatTime()}
 * Description: API文档
 * LastModifiedDate:${formatTime()}
 * LastModifiedDescription: 修改描述
 */
import http from "@/utils/http";

const prefix = "v1"; // 可以在此处写"v1/"，自动拼接路径
const api = {
  list: \`\${prefix}/${fileName}/list\`,
  update: \`\${prefix}/${fileName}/update\`,
  delete: \`\${prefix}/${fileName}/delete\`,
  add:  \`\${prefix}/${fileName}/add\`,
  detail: \`\${prefix}/${fileName}/detail\`
};

/**
 * 获取列表
 * @param {object} argsParams
 * @param {number} argsParams.isDelete 是否删除状态 0-正常[default]|1-删除
 * @note 备注
 * @usage 使用示例
 */
function get${upperFileName}List(argsParams = {}) {
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
function update${upperFileName}(argsParams = {}) {
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
function add${upperFileName}(argsParams = {}) {
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
function delete${upperFileName}(argsParams = {}) {
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
function get${upperFileName}Detail(argsParams = {}) {
  return http
    .get(api.detail, {
      params:argsParams
    })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

export default {
  get${upperFileName}List,
  update${upperFileName},
  add${upperFileName},
  delete${upperFileName},
  get${upperFileName}Detail
};
`;
  return templateFile;
};

module.exports = { apiTemplate };
