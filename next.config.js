const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  latex: true,
  staticImage: true,
})
 
module.exports = withNextra({
})