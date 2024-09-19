export default defineAppConfig({
  pages: ["pages/index/index", "pages/test/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  // 分包
  subpackages: [],
  // 页面切换动画
  animation: {
    duration: 196, // 动画切换时间，单位毫秒
    delay: 50, // 切换延迟时间，单位毫秒
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        selectedIconPath: "assets/images/home_selected.png",
        iconPath: "assets/images/home.png",
        text: "工作台",
      },
      {
        pagePath: "pages/test/index",
        selectedIconPath: "assets/images/data_selected.png",
        iconPath: "assets/images/data.png",
        text: "测试",
      },
    ],
  },
  lazyCodeLoading: "requiredComponents",
});
