module.exports = {
  title: "My title",
  description: "My description",
  base: "/graeber/",
  themeConfig: {
    search: true
  },
      config: md => {
      md.set({breaks: true})
      md.use(require('markdown-it-footnote'))
    }
}