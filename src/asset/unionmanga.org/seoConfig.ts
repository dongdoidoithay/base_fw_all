import { _lbl_domain_name, _sb_seo_default_image, _sb_seo_df_title_br, _sb_seo_page_default_desc_br, _sb_seo_page_default_key_br } from "./configSettingBase";

export default {
    title:_sb_seo_df_title_br,
    description:_sb_seo_page_default_desc_br,
    keywords:_sb_seo_page_default_key_br,
    canonical: `https://${_lbl_domain_name}`,
    openGraph: {
      type: 'website',
      locale: 'pt-PT',
      url:  `https://${_lbl_domain_name}`,
      title: _sb_seo_df_title_br,
      description: _sb_seo_page_default_desc_br,
      images: [
        {
          url: _sb_seo_default_image,
          width: 800,
          height: 600,
          alt: _sb_seo_df_title_br,
        }
      ],
    },
    twitter: {
      handle: _sb_seo_df_title_br,
      site: `https://${_lbl_domain_name}`,
      cardType: 'summary_large_image',
    },
  };
  