module.exports = {
  description: "页面模版",
  prompts: [
    {
      type: "input",
      name: "DIR_NAME",
      message: "请输入所在文件夹名称",
      default: "DirName",
    },
    {
      type: "input",
      name: "FILE_NAME",
      message: "请输入页面名称",
      default: "FileName",
    },
    {
      type: "input",
      name: "FILE_DESC",
      message: "请输入页面描述",
      default: "FileDesc",
    },
  ],
  actions: [
    {
      type: "add",
      path: "../src/pages/{{camelCase DIR_NAME}}/{{camelCase FILE_NAME}}.tsx",
      templateFile: "./page/page.hbs",
    },
    {
      type: "add",
      path: "../src/pages/{{camelCase DIR_NAME}}/{{camelCase FILE_NAME}}.less",
      templateFile: "./page/less.hbs",
    },
    {
      type: "add",
      path: "../src/pages/{{camelCase DIR_NAME}}/{{camelCase FILE_NAME}}.config.ts",
      templateFile: "./page/config.hbs",
    },
  ],
};
