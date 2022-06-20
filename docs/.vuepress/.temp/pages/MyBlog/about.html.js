export const data = JSON.parse("{\"key\":\"v-1abbd0b4\",\"path\":\"/MyBlog/about.html\",\"title\":\"my blog\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1655455209000,\"contributors\":[{\"name\":\"asiyeaili\",\"email\":\"88175568+asiyeaili@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"MyBlog/about.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
