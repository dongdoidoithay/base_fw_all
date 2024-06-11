import { _lbl_domain_name, _sb_seo_df_title_br, _sb_seo_page_default_desc_br, _sb_seo_page_default_key_br } from "./configSettingBase";

export default {
  title:_sb_seo_df_title_br,
  description:_sb_seo_page_default_desc_br,
  keywords:_sb_seo_page_default_key_br,
  canonical: `https://${_lbl_domain_name}`,
    domainName:_lbl_domain_name,
    publisher:_lbl_domain_name,
    archives:`https://web.archive.org/web/*/${_lbl_domain_name}*`,
    Icon:`https://${_lbl_domain_name}/icon_br.ico`,
    locale: 'pt-BR',
    twitterSite:'@VnManga',
    images: [
        {
            url: `https://${_lbl_domain_name}/bg_br.jpg`,
            width: 800,
            height: 600,
            alt: _sb_seo_df_title_br,
        }
    ],
    viewport:'width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0',
    robots:'index,follow,nosnippet,max-snippet:-1,max-image-preview:none,noarchive,noimageindex,max-video-preview:-1,notranslate',
    alternates:{
        canonical:  `https://${_lbl_domain_name}`,
        types: {
          'application/rss+xml': [
            { url: `https://${_lbl_domain_name}/api/rss.xml`, title: `rss ${_lbl_domain_name} rss` },
            { url: `https://${_lbl_domain_name}/api/ror.xml`, title: `ror ${_lbl_domain_name} ror` },
            { url: `https://${_lbl_domain_name}/api/server-sitemap.xml`, title: `sitemap ${_lbl_domain_name} update sitemap` },
          ],
          'text/plain':[
            {url:  `https://${_lbl_domain_name}/api/urllist.txt`, title: `link latestRelease ${_lbl_domain_name} list url update` },
          ]
        },
      },
    manifest:{
        type: "website",
        url: _lbl_domain_name,
        title:_sb_seo_df_title_br,
        description: _sb_seo_page_default_desc_br,
        siteName: _sb_seo_df_title_br,
        images: [{
          url: `https://${_lbl_domain_name}/icon_br.ico`,
        }],
    },
    bookmarks:`https://${_lbl_domain_name}/bookmark`,
  };