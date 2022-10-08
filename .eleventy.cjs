module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
  output: "docs"
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true
  })
}
