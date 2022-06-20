// module.exports = {
//   lang: "zh-CN",
//   title: "Hello Vuepress!",
//   description: "it is my first vuepress item , try it !",

//   head: [["link", { rel: "icon", href: "/logo.png" }]],
//   // base: "./docs",
// }

import { defineUserConfig } from "vuepress"
import { path } from "@vuepress/utils"
import { defaultTheme } from "@vuepress/theme-default"
import KnznTheme from "vuepress-theme-knzn"

export default defineUserConfig({
  lang: "zh-CN",
  title: "Hello VuePress ~",
  description: "it is my first vuepress item , try it !",
  // pagePatterns: ["**/*.md", "!.vuepress", "!node_modules", "!MyBlog/*.md"],
  // public: path.resolve(__dirname, "./static"),
  base: "/vuePress-starter/",
  alias: {
    "@images": path.resolve(__dirname, "../images"), // 在配置文件中设置的路径别名也同样支持：
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器",
    },
  },

  //  默认主题的配置
  //  语言切换的配置
  // theme: defaultTheme({
  //   locales: {
  //     "/": {
  //       selectLanguageName: "English",
  //       selectLanguageText: "Languages",
  //     },
  //     "/zh/": {
  //       selectLanguageName: "简体中文",
  //       selectLanguageText: "选择语言",
  //     },
  //   },
  // }),

  //  markdown 的配置
  markdown: {
    anchor: false, // 标题的描点不显示（当移动鼠标到某个标题上时）
    // links: false,
    emoji: false, //  表情的显示，如果为true则显示， false的话就不显示了
    code: {
      // lineNumbers: false,
      highlightLines: false, //  代码行高亮 ：  你可以在代码块添加行数范围标记，来为对应代码行进行高亮：
    },
    importCode: {
      handleImportPath: str => str.replace(/^@vuepress/, path.resolve(__dirname, "./")),
    },
  },
  theme: KnznTheme({
    // logo
    logo: "/images/logo-light.svg",
    darkLogo: "/images/logo-dark.svg",
    // 背景图片
    backgroundImage: "/images/bg.svg",
    darkBackgroundImage: "/images/bg-dark.jpg",
    // 文章简介图片
    // postImage: 'https://v2.vuepress.vuejs.org/images/hero.png',
    darkPostImage: "/images/post-dark.svg",
    // 背景canvas 动画配置
    // particlesOptions,

    /**
     * 博主信息相关
     */
    // 博主名称
    blogger: "前端程序猿",
    // 铭言
    slogan: "种一棵树最好的时间是十年前，其次是现在！",
    // 头像
    avatar: "/images/avatar.jpg",
    darkAvatar: "/images/avatar-dark.jpg",
    // 其它媒体
    medias: [
      { link: "mailto:1140457303@qq.com", icon: "email" },
      {
        link: "http://wpa.qq.com/msgrd?v=3&uin=1140457303&site=qq&menu=yes",
        icon: "QQ",
      },
      { link: "https://www.jianshu.com/u/f22487800f07", icon: "jianshu" },
      { link: "https://gitee.com/zhanghuanbiao", icon: "gitee" },
      { link: "https://github.com/zhb333", icon: "github" },
    ],

    /**
     * 数据显示相关
     */
    // 列表页显示的文章个数
    perPage: 10,
    // 主页显示分类的个数
    maxCategories: 6,
    // 主页显示的标签个数
    maxTags: 10,

    // 导航
    // navbar: [],

    /**
     *  页脚相关配置
     */
    // 备案号
    beian: "粤ICP备20016112号-2",
    // 备案查询地址
    beianUrl: "",
    // 网址起始时间
    siteStartDate: "2018",
    comment: {
      repo: "zhb333/vuepress-theme-knzn",
      repoId: "R_kgDOHSwV_A",
      category: "General",
      categoryId: "DIC_kwDOHSwV_M4CPHIA",
    },
  }),
})
