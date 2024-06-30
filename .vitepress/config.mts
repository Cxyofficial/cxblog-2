import { defineConfigWithTheme } from 'vitepress'
export interface ThemeConfig {
  //navBar
  menuList: { name: string; url: string }[]

  //banner
  name: string
  welcomeText: string
  motto: string
  social: { icon: string; url: string }[]

  //footer
  footerName: string
  poweredList: { name: string; url: string }[]

  //gitalk
  clientID: string
  clientSecret: string
  repo: string
  owner: string
  admin: string[]
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    // gitalk
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
  ],
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://cxblog.fun',
  },
  title: "Sensei's 部落格",
  description: "Sensei's 部落格",
  themeConfig: {
    // navBar
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
    ],

    //banner区配置
    name: "Cxy's Blog",
    welcomeText: 'Hello, Sensei',
    motto: '何気ない日常で、ほんの少しの奇跡を見つける物語。',
    social: [
      { icon: 'github', url: 'https://github.com/Cxyofficial' },
      { icon: 'bilibili', url: 'https://space.bilibili.com/495196124' },
      { icon: 'tw', url: 'https://x.com/cxyofficial?s=09' },
      { icon: 'netease_music', url: 'http://music.163.com/artist?id=59879419&userid=1379112746' },
    ],

    //footer配置
    footerName: 'Sensei',
    poweredList: [
      { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
      { name: 'Vercel', url: 'https://vercel.com/docs' },
      { name: 'Clouflare', url: 'https://cloudflare.com' },
    ],

    //gitalk配置
    clientID: 'Ov23li8ADaUIfHmRGFGI',
    clientSecret: 'ac93ad080df83ee94c55dcd792a9d72c106c3bb8',
    repo: 'cxblog',
    owner: 'Cxyofficial',
    admin: ['Cxyofficial'],
  },
  markdown: {
    theme: 'github-light',
    lineNumbers: true,
    math: true,
  },
    //seo
    sitemap: {
    hostname: 'https://cxblog.fun'
  }
})
