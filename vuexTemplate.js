const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};
// 时间格式化
const formatTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join("-") + " " + [hour, minute, second].map(formatNumber).join(":");
};

/***
 * vuex文档模板
 */
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
