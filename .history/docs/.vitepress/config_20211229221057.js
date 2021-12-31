module.exports = {
  title: "Notes on Graeber and stuff",
  description: "you know ... notes ... ",
  base: "/graeber/",
  themeConfig: {
    search: true,
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help improve the page?'
  },
  markdown: {
    config: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-footnote'))
    }
  }
}