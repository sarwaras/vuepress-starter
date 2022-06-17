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

export default defineUserConfig({
  lang: "zh-CN",
  title: "Hello VuePress ~",
  description: "it is my first vuepress item , try it !",
  // pagePatterns: ["**/*.md", "!.vuepress", "!node_modules", "!MyBlog/*.md"],
  // public: path.resolve(__dirname, "./static"),
  base: "/vuepress-starter/",
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
  theme: defaultTheme({
    locales: {
      "/": {
        selectLanguageName: "English",
        selectLanguageText: "Languages",
      },
      "/zh/": {
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
      },
    },
  }),

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
})
