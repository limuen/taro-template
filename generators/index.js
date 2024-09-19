// 引入各模块配置文件
const pageGenerrator = require("./page/index.js");
const storeGenerrator = require("./store/index.js");

module.exports = (plop) => {
  // 欢迎语
  plop.setWelcomeMessage("欢迎使用~ 请选择需要创建的模版：");
  // pages 相关
  plop.setGenerator("page", pageGenerrator);
  // zustand 相关
  plop.setGenerator("zustand", storeGenerrator);
};
