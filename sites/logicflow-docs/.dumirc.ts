import { defineConfig } from 'dumi';
import { repository } from './package.json';

export default defineConfig({
  themeConfig: {
    name: 'LogicFlow',
    logo: '/logo.png',
    footer: `Copyright © 2023 | Powered by self`,
    rtl: true,
    nav: {
      'zh-CN': [
        { title: '文档', link: '/tutorial' },
        { title: 'API', link: '/api' },
        { title: '示例', link: '/examples' },
        { title: '文章', link: '/article' },
      ],
      'en-US': [
        { title: 'Tutorial', link: '/en-US/tutorial' },
        { title: 'API', link: '/en-US/api' },
        { title: 'Examples', link: '/en-US/examples' },
        { title: 'Article', link: '/en-US/article' },
      ],
    },
    socialLinks: {
      github: repository,
    },
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  theme: {
    '@c-primary': '#2d71fa',
  },
});
