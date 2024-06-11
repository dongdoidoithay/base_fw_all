import { _lbl_domain_name, _sb_seo_default_image, _sb_seo_df_title, _sb_seo_df_title_ita, _sb_seo_page_default_desc, _sb_seo_page_default_desc_ita, _sb_seo_page_default_key, _sb_seo_page_default_key_ita } from "./configSettingBase";

export default {
    title:_sb_seo_df_title_ita,
    description:_sb_seo_page_default_desc_ita,
    keywords:_sb_seo_page_default_key_ita,
    canonical: `https://${_lbl_domain_name}`,
    openGraph: {
      type: 'website',
      locale: 'id-ID',
      url:  `https://${_lbl_domain_name}`,
      title: _sb_seo_df_title_ita,
      description: _sb_seo_page_default_desc_ita,
      images: [
        {
          url: _sb_seo_default_image,
          width: 800,
          height: 600,
          alt: _sb_seo_df_title_ita,
        }
      ],
    },
    twitter: {
      handle: _sb_seo_df_title_ita,
      site: `https://${_lbl_domain_name}`,
      cardType: 'summary_large_image',
    },
  };
  