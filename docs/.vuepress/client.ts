import { defineClientConfig, usePagesData } from "@vuepress/client"

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    const pagesData = usePagesData()
    // console.log(pagesData.value)
    Promise.all(Object.keys(pagesData.value).map(key => pagesData.value[key]())).then(pages => {
      console.log(pages)
      app.provide("pages", pages)
    })
  },
  setup() {
    console.log("root componnets setup ")
  },
  rootComponents: [],
})
