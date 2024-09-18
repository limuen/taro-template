module.exports = {
  description: "zustand store模版",
  prompts: [
    {
      type: "input",
      name: "FILE_NAME",
      message: "请输入文件名称",
      default: "default",
    },
    {
      type: "input",
      name: "FILE_DESC",
      message: "请输入文件描述",
      default: "default",
    },
  ],
  // 操作行为
  actions: [
    {
      type: "add",
      path: "../src/stores/modules/{{camelCase FILE_NAME}}.ts",
      templateFile: "./store/store.hbs",
    },
  ],
};
