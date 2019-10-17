module.exports = {
  title: "Zenos Note",
  description: "一些学习笔记",
  dest: "./dist", // 设置输出目录
  base: "/study-note/",
  head: [
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "meta",
      {
        name: "description",
        itemprop: "description",
        content: "一些学习笔记"
      }
    ]
  ],
  repo: "https://github.com/zenoslin/study-note", // 添加 github 链接
  themeConfig: {
    nav: [
      {
        text: "blog",
        link: "https://zenoslin.top"
      },
      {
        text: "GitHub",
        link: "https://github.com/zenoslin/study-note"
      }
    ],
    sidebar: [
      {
        title: "杂谈",
        collapsable: false,
        children: [
          ["/rollup/", "携手Rollup与TS造轮子"],
          ["/miniApp/", "浅谈小程序开发"],
          ["/neteaseMusic/", "我在网易云听周杰伦"],
          ["/emoji/", "有趣！把 Emoji 动画加到你的地址栏和标题里"],
          ["/retina/", "开启 Macbook 外接显示器的 Retina 模式"],
          ["/https/", "2分钟获得HTTPS证书"],
          ["/imagemin/", "压缩图片桌面应用"],
          ["/webpackCli/", "用 webpack 搭建 Ming-cli"],
          ["/layabox/", "mac下layabox编译环境配置笔记"]
        ]
      },
      {
        title: "工具",
        collapsable: false,
        children: [
          ["/atlas/", "图集打包工具"]
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
};
