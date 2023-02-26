import { NextraBlogTheme } from 'nextra-theme-blog'

const config: NextraBlogTheme = {
  footer: <p>MIT 2023 © wangly19.</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: "阅读全文",
  postFooter: null,
  darkMode: true,
  navs: [
    {
      url: "https://juejin.cn/user/4248168660735310",
      name: "掘金社区",
    },
    {
      url: "https://github.com/wangly19",
      name: "Github",
    },
  ],
};

export default config
