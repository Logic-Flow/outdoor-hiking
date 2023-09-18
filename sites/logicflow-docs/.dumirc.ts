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
        // { title: '文档', link: '/tutorial' },
      ],
      'en-US': [
        { title: 'Tutorial', link: '/en/tutorial' },
        { title: 'API', link: '/en/api' },
        { title: 'Examples', link: '/en/examples' },
        // { title: '文档', link: '/en/tutorial' },
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
});
