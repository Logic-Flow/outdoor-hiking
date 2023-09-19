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
        { title: '文档', link: '/tutorial/tutorial' },
        { title: 'API', link: '/api/api' },
        { title: '示例', link: '/examples/examples' },
      ],
      'en-US': [
        { title: 'Tutorial', link: '/en-US/tutorial/tutorial' },
        { title: 'API', link: '/en-US/api/api' },
        { title: 'Examples', link: '/en-US/examples/examples' },
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
