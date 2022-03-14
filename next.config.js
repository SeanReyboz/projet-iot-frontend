/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")
const withSass = require("@zeit/next-sass")
const runtimeCaching = require("next-pwa/cache")
const path = require("path")

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
})

module.exports = withSass({
  cssModules: true,
})

module.exports = {
  /* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
}
