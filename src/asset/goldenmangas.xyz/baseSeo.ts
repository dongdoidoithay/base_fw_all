import { _lbl_domain_name, _sb_seo_default_image, _sb_seo_df_title, _sb_seo_page_default_desc, _sb_seo_page_default_key } from "./configSettingBase";

export default {
  title:_sb_seo_df_title,
  description:_sb_seo_page_default_desc,
  keywords:_sb_seo_page_default_key,
  canonical: `https://${_lbl_domain_name}`,
    domainName:_lbl_domain_name,
    publisher:_lbl_domain_name,
    archives:`https://web.archive.org/web/*/${_lbl_domain_name}*`,
    Icon:`https://${_lbl_domain_name}/logo.png`,
    locale: 'en-Gb',
    twitterSite:'@VnManga',
    images: [
        {
            url: `https://${_lbl_domain_name}/bg.jpg`,
            width: 800,
            height: 600,
            alt: _sb_seo_df_title,
        }
    ],
    viewport:'width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0',
    robots:'index,follow,nosnippet,max-snippet:-1,max-image-preview:none,noarchive,noimageindex,max-video-preview:-1,notranslate',
    alternates:{
        canonical:  `https://${_lbl_domain_name}`,
        types: {
          'application/rss+xml': [
            { url: `https://${_lbl_domain_name}/api/rss.xml`, title: `rss ${_lbl_domain_name}` },
            { url: `https://${_lbl_domain_name}/api/ror.xml`, title: `ror ${_lbl_domain_name}` },
            { url: `https://${_lbl_domain_name}/api/server-sitemap.xml`, title: `sitemap ${_lbl_domain_name}` },
          ],
          'text/plain':[
            {url:  `https://${_lbl_domain_name}/api/urllist.txt`, title: `link latestRelease ${_lbl_domain_name}` },
          ]
        },
      },
    manifest:{
        type: "website",
        url: _lbl_domain_name,
        title:_sb_seo_df_title,
        description: _sb_seo_page_default_desc,
        siteName: _sb_seo_df_title,
        images: [{
          url: `https://${_lbl_domain_name}/logo.png`,
        }],
    },
    bookmarks:`https://${_lbl_domain_name}/bookmark`,


  };