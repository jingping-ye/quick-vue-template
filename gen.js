#!/usr/bin/env node
const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

//  打印配置
const log = (message) => console.log(chalk.green(`${message}`)); // 普通打印
const successLog = (message) => console.log(chalk.blue(`${message}`)); // 成功打印
const errorLog = (error) => console.log(chalk.red(`${error}`)); // 失败打印

//  模板引入
const { simpleVueComp, fullVueComp } = require("./compTemplate");
const { routeTemplate } = require("./routeTemplate");
const { vuexTemplate } = require("./vuexTemplate");
const { apiTemplate } = require("./apiTemplate");
const { mockTemplate } = require("./mockTemplate");

const templateCol = {
  simpleVueComp,
  fullVueComp,
  routeTemplate,
  vuexTemplate,
  apiTemplate,
  mockTemplate,
};

let genTemplateType = ""; //模板类型
let genFileName = ""; // 生成的文件名称

/**
 * 模板类型
 */
const templateTypePrompt = {
  type: "list",
  name: "templateType",
  message: "请选择要生成的模板类型：",
  choices: [
    { name: "vue组件", value: "vueComp" },
    { name: "api文件", value: "apiTemplate" },
    { name: "路由文件", value: "routeTemplate" },
    { name: "vuex文件", value: "vuexTemplate" },
    { name: "mock文件", value: "mockTemplate" },
  ],
};

/**
 * 选择模板类型
 */
function chooseTemplateType() {
  inquirer.prompt(templateTypePrompt).then((answers) => {
    if (answers.templateType === "vueComp") {
      chooseVueCompType();
    } else {
      genTemplateType = answers.templateType;
      inputFileName();
    }
  });
}

/**
 * vue组件类型
 */
const compTypePrompt = {
  type: "list",
  name: "compTemplateType",
  message: "请选择要生成的组件模板类型：",
  choices: [
    { name: "简单", value: "simpleVueComp" },
    { name: "完全", value: "fullVueComp" },
  ],
};

/**
 * 选择组件类型
 */
function chooseVueCompType() {
  inquirer.prompt(compTypePrompt).then((answers) => {
    genTemplateType = answers.compTemplateType;
    inputFileName();
  });
}

/**
 * 文件名称
 */
const fileName = {
  type: "input",
  name: "fileName",
  message: "请输入文件名称（路径以@开头代表src，比如@/components/example.vue;文件请加上后缀）:",
  validate: function (value) {
    if (value.includes("/") || value.includes("\\")) {
      if (!value.startsWith("@")) {
        return "路径请以@开头，比如@/components/example.js";
      }
      return true;
    }
    return true;
  },
};

/**
 * 输入文件名称
 */
function inputFileName() {
  inquirer.prompt(fileName).then((answers) => {
    genFileName = answers.fileName;
    create8GenFile();
  });
}

function main() {
  console.log("====== 生成模板功能启动 ======");
  chooseTemplateType();
}

const create8GenFile = function () {
  //  组合根目录
  const isNodeModule = __dirname.includes("node_modules");
  let rootPath = "";
  if (isNodeModule) {
    rootPath = path.join(__dirname, "../../");
  } else {
    rootPath = path.join(__dirname, "../");
  }

  let genFilePath = "";
  let genDirectoryPath = "";
  if (genFileName.startsWith("@")) {
    genFileName = genFileName.replace("@", "src");
    genFilePath = path.join(rootPath, genFileName);
    let lastDirPathIndex = genFilePath.lastIndexOf("\\") || genFilePath.lastIndexOf("/");
    genDirectoryPath = genFilePath.slice(0, lastDirPathIndex);
  } else {
    genFilePath = path.join(rootPath, `src/${genFileName}`);
    genDirectoryPath = path.join(rootPath, "src");
  }

  // 检测文件是否存在
  if (fs.existsSync(genFilePath)) {
    errorLog(`${genFileName}文件已经存在！`);
    errorLog(`路径：${genFilePath}`);
    inputFileName();
    return false;
  }

  //  检测目录是否存在
  if (!fs.existsSync(genDirectoryPath)) {
    dotExistDirectoryCreate(genDirectoryPath);
  }

  log(`====== 正在生成文件${genFilePath} ======`);

  let rawFileName = path.parse(genFileName).name;
  generateFile(genFilePath, templateCol[genTemplateType](rawFileName));
  successLog("====== 生成成功！ ======");
};

/**
 * 生成目录
 * @param {string} directory 目录
 */
function dotExistDirectoryCreate(directory) {
  return new Promise((resolve) => {
    mkdirs(directory, function () {
      resolve(true);
    });
  });
}

/**
 * 递归创建目录
 * @param {string} directory 路径
 * @param {function} callback 回调函数
 */
function mkdirs(directory, callback) {
  var exists = fs.existsSync(directory);
  if (exists) {
    callback();
  } else {
    mkdirs(path.dirname(directory), function () {
      fs.mkdirSync(directory);
      callback();
    });
  }
}

/**
 * 生成文件
 * @param {string} path 路径
 * @param {string} data 生成文件内容
 */
const generateFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, "utf8", (err) => {
      if (err) {
        errorLog(err.message);
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};

main();
