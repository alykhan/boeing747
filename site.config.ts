import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e26edaefb4f74c7a856fc1ee618d12b9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Boeing 747',
  domain: 'Boeing-747.com',
  author: 'Alykhan',
  seotitle: 'Fan site for the Boeing 747 Queen of the skies',

  // open graph metadata (optional)
  description: 'Fan site for the Boeing 747 Queen of the skies',

  // social usernames (optional)
  twitter: 'alykhan',
  github: 'alykhan',
  linkedin: 'alykhan',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  //defaultPageIcon: 'https://wr8.in/page-icon.png',
  //defaultPageCover: 'https://wr8.in/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages

  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Family',
      pageId: '72f1da1577f5465aa8293befdfe8ad61'
    },
    {
      title: 'Blog',
      pageId: '175edd668a894d46b1796cb5d5953c3f'
    },
    {
      title: 'Special',
      pageId: '83f1008842fd4ce9aed453dfbfeae85c'
    }
  ]
})
