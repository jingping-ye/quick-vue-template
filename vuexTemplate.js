/***
 * vuex文档模板
 */

const formatTime = require("./timeUtil");

const vuexTemplate = (fileName) => {
  const templateFile = `/**
 * Title: ${fileName}
 * Author: 作者
 * Date: ${formatTime()}
 * Description: Route文档
 * LastModifiedDate:${formatTime()}
 * LastModifiedDescription: 修改描述
 */
const state = {};

const getters = {};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
  `;
  return templateFile;
};

module.exports = { vuexTemplate };
