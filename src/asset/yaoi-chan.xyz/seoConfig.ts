import { _lbl_domain_name, _sb_seo_default_image, _sb_seo_df_title_ru, _sb_seo_page_default_desc_ru, _sb_seo_page_default_key_ru } from "./configSettingBase";

export default {
    title:_sb_seo_df_title_ru,
    description:_sb_seo_page_default_desc_ru,
    keywords:_sb_seo_page_default_key_ru,
    canonical: `https://${_lbl_domain_name}`,
    openGraph: {
      type: 'website',
      locale: 'ru-RU',
      url:  `https://${_lbl_domain_name}`,
      title: _sb_seo_df_title_ru,
      description: _sb_seo_page_default_desc_ru,
      images: [
        {
          url: _sb_seo_default_image,
          width: 800,
          height: 600,
          alt: _sb_seo_df_title_ru,
        }
      ],
    },
    twitter: {
      handle: _sb_seo_df_title_ru,
      site: `https://${_lbl_domain_name}`,
      cardType: 'summary_large_image',
    },
  };
  