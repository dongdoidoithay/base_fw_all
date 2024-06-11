

import { base_desc_info_manga, base_desc_info_manga_br, base_desc_view_name_chapter, base_desc_view_name_chapter_br, base_info_name_manga_title, base_keyword_info_manga, base_keyword_info_manga_br, base_keyword_view_name_chapter, base_keyword_view_name_chapter_br, base_sb_seo_df_title, base_sb_seo_df_title_br, base_sb_seo_page_default_desc, base_sb_seo_page_default_desc_br, base_sb_seo_page_default_key, base_sb_seo_page_default_key_br, base_sb_seo_page_group_desc, base_sb_seo_page_group_desc_br, base_sb_seo_page_group_key, base_sb_seo_page_group_key_br, base_sb_seo_page_group_title, base_sb_seo_page_group_title_br, base_view_name_chapter_title, base_view_name_chapter_title_br } from "../base/baseConfigSettingBase";
import sample from 'lodash/sample';

export const _Brand_Name="mangaUpdate";

export const _lbl_Name_Page=`<span class="text-sky-400 font-bold">🅼🅰🅽🅶🅰</span><span class="text-orange-600 font-bold">💯 Update</span>`;
export const _lbl_domain_Page="mangaupdate.xyz";
export const _lbl_domain_name="mangaupdate.xyz";
export const _sb_seo_default_image="https://mangaupdate.xyz/bg.jpg";

export const _sb_seo_df_title=sample(base_sb_seo_df_title(_lbl_domain_name,_Brand_Name)) ;
export const _sb_seo_page_default_desc=sample(base_sb_seo_page_default_desc(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_default_key=sample(base_sb_seo_page_default_key(_lbl_domain_name,_Brand_Name));

export const _sb_seo_page_group_title= sample(base_sb_seo_page_group_title(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_group_desc= sample(base_sb_seo_page_group_desc(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_group_key= sample(base_sb_seo_page_group_key(_lbl_domain_name,_Brand_Name));

export const _info_name_manga= "Manga {name}";
export const _view_name_chapter= "Read {name} {chapter} - {nameOther}";

export const _info_name_manga_title=sample(base_info_name_manga_title(_lbl_domain_name,_Brand_Name));
export const _desc_info_manga= sample(base_desc_info_manga(_lbl_domain_name,_Brand_Name));
export const _keyword_info_manga= sample(base_keyword_info_manga(_lbl_domain_name,_Brand_Name));

export const _view_name_chapter_title= sample(base_view_name_chapter_title(_lbl_domain_name,_Brand_Name));
export const _desc_view_name_chapter= sample(base_desc_view_name_chapter(_lbl_domain_name,_Brand_Name));
export const _keyword_view_name_chapter= sample(base_keyword_view_name_chapter(_lbl_domain_name,_Brand_Name));

export const _tag_view_name_chapter= "read {name} Chapter {chapter}, comic {name} Chapter {chapter}, read {name} volume {chapter} online, {name} Chapter {chapter} high quality, {name} Chapter {chapter} manga scan";
export const _desc_view_chapter= "Read the latest Novel or Manga and Comic <b> {name} {chapter} </b> at <b> {namePage} </b>. Manga <b> {name} </b> is always updated at <b> {namePage} </b>. Dont forget to read the other manga updates. A list of manga collections <b> {namePage} </b> is in the Manga List menu. </p>";

export const _info_name_manga_br= "Mangás {name}";
export const _view_name_chapter_br= "Mangá {name} {chapter} - {nameOther}";

export const _sb_seo_df_title_br= sample(base_sb_seo_df_title_br(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_default_key_br= sample(base_sb_seo_page_default_key_br(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_default_desc_br= sample(base_sb_seo_page_default_desc_br(_lbl_domain_name,_Brand_Name));

export const _sb_seo_page_group_title_br=sample(base_sb_seo_page_group_title_br(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_group_desc_br= sample(base_sb_seo_page_group_desc_br(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_group_key_br= sample(base_sb_seo_page_group_key_br(_lbl_domain_name,_Brand_Name));

export const _info_name_manga_title_br=sample(base_info_name_manga_title(_lbl_domain_name,_Brand_Name));
export const _desc_info_manga_br= sample(base_desc_info_manga_br(_lbl_domain_name,_Brand_Name));
export const _keyword_info_manga_br= sample(base_keyword_info_manga_br(_lbl_domain_name,_Brand_Name));

export const _view_name_chapter_title_br= sample(base_view_name_chapter_title_br(_lbl_domain_name,_Brand_Name));
export const _desc_view_name_chapter_br= sample(base_desc_view_name_chapter_br(_lbl_domain_name,_Brand_Name));
export const _keyword_view_name_chapter_br= sample(base_keyword_view_name_chapter_br(_lbl_domain_name,_Brand_Name));

export const _tag_view_name_chapter_br= "leia mangá {name} Chapter {chapter}, comic {name} Chapter {chapter}, leia {name} Chapter {chapter} online, {name} Chapter {chapter} de alta qualidade, {name} Chapter {chapter} mangá scan";
export const _desc_view_chapter_br= "Leia o mangá mais recente <b> {name} {chapter} </b> em <b> {namePage} </b>. O mangá <b> {name} </b> é sempre atualizado em <b> {namePage} </b>. Não se esqueça de ler as outras atualizações do mangá. Uma lista de coleções de mangás <b> {namePage} </b> está no menu Manga List. </p>";


export const analytics_key='G-X5RF2BK4V3';


export type ConfigSetting ={
    lblMangaType:string,
    lblTopView:  string,
    Lbl_Home_New_Upadte:  string,
    Lbl_Home_Hot:  string,
    Lbl_Home_Suggest: string,
    Lbl_Home_Complate:  string,
    Lbl_Home_Pop:  string,
    Lbl_Home_Random:  string,

    lbl_bookmark:  string,
    lbl_Find_list:  string,


    lbl_year: string,
    lbl_type: string,
    lbl_genres: string,
    lbl_status:string,
    lbl_alpha:string,
    lbl_tag:string,
    lbl_cate: string,

    lbl_start_chapter:string,
    lbl_start_manga:string,
    lbl_text_chapter:string,

    lbl_inf_NameOther: string,
    lbl_inf_View: string,
    lbl_inf_Genres: string,
    lbl_inf_Auth: string,
    lbl_inf_Type: string,
    lbl_inf_Year: string,
    lbl_inf_Scan: string,
    lbl_inf_Art: string,
    lbl_inf_date: string,
    lbl_inf_status: string,
    lbl_inf_Summary: string,
    lbl_inf_start_read: string,
    lbl_inf_continue: string,
    lbl_inf_chapters: string,
    lbl_inf_chapters_next: string,
  
    lbl_inf_keyword: string,
    lbl_inf_first_chapter:string,
    lbl_inf_new_chapter:string,
    lbl_inf_chapter_list:string,
    lbl_inf_comment:string,
    lbl_inf_start_manga: string,
    info_name_manga_title: string,


    lbl_date_now: string,
    lbl_date_minutes: string,
    lbl_date_hour: string,
    lbl_date_yesterday: string,
    lbl_date_days: string,
    lbl_date_months: string,
    lbl_date_years: string,



    sb_seo_page_default_key: string,
    sb_seo_page_default_desc:string,
    sb_seo_page_group_title: string,
    sb_seo_page_group_desc: string,
    sb_seo_page_group_key: string,
    sb_seo_df_title: string,
    lbl_show_all:string,
    lbl_show_less:string,
    lbl_view_more:string,
    info_name_manga: string,
    desc_info_manga: string,
    keyword_info_manga: string,
    view_name_chapter_title:string,
    view_name_chapter: string,
    desc_view_name_chapter: string,
    keyword_view_name_chapter:string,
    tag_view_name_chapter: string,
    desc_view_chapter: string,

    lbl_Name_Page:string,
    lbl_domain_Page:string,
    lbl_domain_name:string,
    lbl_domain_home:string,
    
    lbl_next_data:string,
    lbl_prev_data:string,

    sb_seo_default_image:string,
} 

export const MangaBrSetting:ConfigSetting={
    lblMangaType: "Mangás português",

    lblTopView: "Top View",
    Lbl_Home_New_Upadte: "Últimos Lançamentos",
    Lbl_Home_Hot: "Popular hoje",
    Lbl_Home_Suggest: "Series Suggest Popular",
    Lbl_Home_Complate: "Complatte",
    Lbl_Home_Pop: "Popular",
    Lbl_Home_Random: "Mangás",
    lbl_bookmark: "marca páginas",
    lbl_Find_list: "Find list",


    lbl_year: "Ano",
    lbl_type: "Tipo",
    lbl_genres: "Gêneros",
    lbl_status: "Status",
    lbl_alpha: "Alpha",
    lbl_tag: "Tags",
    lbl_cate: "Gêneros",

    lbl_start_chapter: "Capítulos",
    lbl_start_manga: "Mangás",
    lbl_text_chapter: "Capítulos",

    lbl_inf_NameOther: "Títulos alternativos",
    lbl_inf_View: "Visualizar",
    lbl_inf_Genres: "Gêneros",
    lbl_inf_Auth: "Autor",
    lbl_inf_Type: "Tipo",
    lbl_inf_Year: "Ano",
    lbl_inf_Scan: "Scan(s)",
    lbl_inf_Art: "Arte",
    lbl_inf_date: "Atualizado em",
    lbl_inf_status: "Status",
    lbl_inf_Summary: "Summary",
    lbl_inf_start_read: "Iniciar leitura",
    lbl_inf_continue: "continuar",
    lbl_inf_chapters: "Listar capítulos",
    lbl_inf_chapters_next: "A seguir",

    lbl_inf_keyword: "keywords",
    lbl_inf_first_chapter: "Primeiro Capítulo",
    lbl_inf_new_chapter: "Novo capítulo",
    lbl_inf_chapter_list: "Listar capítulo: ",
    lbl_inf_comment: "Comente",
    lbl_inf_start_manga: "Mangás",



    lbl_date_now: 'agora',
    lbl_date_minutes: 'minutos',
    lbl_date_hour: 'hora',
    lbl_date_yesterday: 'ontem',
    lbl_date_days: 'dias',
    lbl_date_months: 'meses',
    lbl_date_years: 'anos',

    info_name_manga_title: _info_name_manga_title_br,
    sb_seo_page_default_key:_sb_seo_page_default_key_br,
    sb_seo_page_default_desc:_sb_seo_page_default_desc_br,
    sb_seo_page_group_title: _sb_seo_page_group_title_br,
    sb_seo_page_group_desc:_sb_seo_page_group_desc_br,
    sb_seo_page_group_key: _sb_seo_page_group_key_br,
    sb_seo_df_title: _sb_seo_df_title_br,
    info_name_manga: _info_name_manga_br,
    desc_info_manga:_desc_info_manga_br,
    keyword_info_manga: _keyword_info_manga_br,
    view_name_chapter_title: _view_name_chapter_title_br,
    view_name_chapter: _view_name_chapter_br,
    desc_view_name_chapter: _desc_view_name_chapter_br,
    keyword_view_name_chapter: _keyword_view_name_chapter_br,
    tag_view_name_chapter: _tag_view_name_chapter_br,
    desc_view_chapter: _desc_view_chapter_br,
    lbl_Name_Page:_lbl_Name_Page,
    lbl_domain_Page:_lbl_domain_Page,
    lbl_domain_name:_lbl_domain_name,
    sb_seo_default_image:_sb_seo_default_image,


    lbl_show_all: "Mostre tudo",
    lbl_show_less: "Mostre menos",
    lbl_view_more: "Veja mais ",
    


    lbl_domain_home:"Home",
    lbl_next_data:"Próximo",
    lbl_prev_data:"Anterior"
    
}

export const AdultBrSetting:ConfigSetting={
    lblMangaType: "Mangás Adult",

    lblTopView: "Top View",
    Lbl_Home_New_Upadte: "Últimos Lançamentos",
    Lbl_Home_Hot: "Popular hoje",
    Lbl_Home_Suggest: "Series Suggest Popular",
    Lbl_Home_Complate: "Complatte",
    Lbl_Home_Pop: "Popular",
    Lbl_Home_Random: "Mangás",
    lbl_bookmark: "marca páginas",
    lbl_Find_list: "Find list",


    lbl_year: "Ano",
    lbl_type: "Tipo",
    lbl_genres: "Gêneros",
    lbl_status: "Status",
    lbl_alpha: "Alpha",
    lbl_tag: "Tags",
    lbl_cate: "Gêneros",

    lbl_start_chapter: "Capítulos",
    lbl_start_manga: "Mangás",
    lbl_text_chapter: "Capítulos",

    lbl_inf_NameOther: "Títulos alternativos",
    lbl_inf_View: "Visualizar",
    lbl_inf_Genres: "Gêneros",
    lbl_inf_Auth: "Autor",
    lbl_inf_Type: "Tipo",
    lbl_inf_Year: "Ano",
    lbl_inf_Scan: "Scan(s)",
    lbl_inf_Art: "Arte",
    lbl_inf_date: "Atualizado em",
    lbl_inf_status: "Status",
    lbl_inf_Summary: "Summary",
    lbl_inf_start_read: "Iniciar leitura",
    lbl_inf_continue: "continuar",
    lbl_inf_chapters: "Listar capítulos",
    lbl_inf_chapters_next: "A seguir",

    lbl_inf_keyword: "keywords",
    lbl_inf_first_chapter: "Primeiro Capítulo",
    lbl_inf_new_chapter: "Novo capítulo",
    lbl_inf_chapter_list: "Listar capítulo: ",
    lbl_inf_comment: "Comente",
    lbl_inf_start_manga: "Mangás",



    lbl_date_now: 'agora',
    lbl_date_minutes: 'minutos',
    lbl_date_hour: 'hora',
    lbl_date_yesterday: 'ontem',
    lbl_date_days: 'dias',
    lbl_date_months: 'meses',
    lbl_date_years: 'anos',

    info_name_manga_title: _info_name_manga_title_br,
    sb_seo_page_default_key:_sb_seo_page_default_key_br,
    sb_seo_page_default_desc:_sb_seo_page_default_desc_br,
    sb_seo_page_group_title: _sb_seo_page_group_title_br,
    sb_seo_page_group_desc:_sb_seo_page_group_desc_br,
    sb_seo_page_group_key: _sb_seo_page_group_key_br,
    sb_seo_df_title: _sb_seo_df_title_br,
    info_name_manga: _info_name_manga_br,
    desc_info_manga:_desc_info_manga_br,
    keyword_info_manga: _keyword_info_manga_br,
    view_name_chapter_title: _view_name_chapter_title_br,
    view_name_chapter: _view_name_chapter_br,
    desc_view_name_chapter: _desc_view_name_chapter_br,
    keyword_view_name_chapter: _keyword_view_name_chapter_br,
    tag_view_name_chapter: _tag_view_name_chapter_br,
    desc_view_chapter: _desc_view_chapter_br,
    lbl_Name_Page:_lbl_Name_Page,
    lbl_domain_Page:_lbl_domain_Page,
    lbl_domain_name:_lbl_domain_name,
    sb_seo_default_image:_sb_seo_default_image,


    lbl_show_all: "Mostre tudo",
    lbl_show_less: "Mostre menos",
    lbl_view_more: "Veja mais ",
    


    lbl_domain_home:"Home",
    lbl_next_data:"Próximo",
    lbl_prev_data:"Anterior"
}

export const ScanSetting:ConfigSetting={
    lblMangaType: "Manga Translate",

    lblTopView: "Top View",
    Lbl_Home_New_Upadte: "New Update",
    Lbl_Home_Hot: "Popular Today",
    Lbl_Home_Suggest: "Series Suggest Popular",
    Lbl_Home_Complate: "Complatte",
    Lbl_Home_Pop: "Popular",
    Lbl_Home_Random: "Manga",
    lbl_bookmark: "Bookmark",
    lbl_Find_list: "Find list",


    lbl_year: "Year",
    lbl_type: "Type",
    lbl_genres: "Genres",
    lbl_status: "Status",
    lbl_alpha: "Alpha",
    lbl_tag: "Tags",
    lbl_cate: "Category",

    lbl_start_chapter: "Chapter",
    lbl_start_manga: "Manga",
    lbl_text_chapter: "Chapter",

    lbl_inf_NameOther: "Alternative Titles",
    lbl_inf_View: "View",
    lbl_inf_Genres: "Genres",
    lbl_inf_Auth: "Author",
    lbl_inf_Type: "Type",
    lbl_inf_Year: "Released",
    lbl_inf_Scan: "Scan",
    lbl_inf_Art: "Artist",
    lbl_inf_date: "Updated On",
    lbl_inf_status: "Status",
    lbl_inf_Summary: "Summary",
    lbl_inf_start_read: "Start Read",
    lbl_inf_continue: "Continue",
    lbl_inf_chapters: "List Chapters",
    lbl_inf_chapters_next: "Coming Next",

    lbl_inf_keyword: "keywords",
    lbl_inf_first_chapter: "First Chapter",
    lbl_inf_new_chapter: "New Chapter",
    lbl_inf_chapter_list: "Chapter list: ",
    lbl_inf_comment: "Comment",
    lbl_inf_start_manga: "Manga",



    lbl_date_now: 'now',
    lbl_date_minutes: 'minutes',
    lbl_date_hour: 'hour',
    lbl_date_yesterday: 'yesterday',
    lbl_date_days: 'days',
    lbl_date_months: 'months',
    lbl_date_years: 'years',

    info_name_manga_title: _info_name_manga_title,
    sb_seo_page_default_key:_sb_seo_page_default_key,
    sb_seo_page_default_desc:_sb_seo_page_default_desc,
    sb_seo_page_group_title: _sb_seo_page_group_title,
    sb_seo_page_group_desc:_sb_seo_page_group_desc,
    sb_seo_page_group_key: _sb_seo_page_group_key,
    sb_seo_df_title: _sb_seo_df_title,
    info_name_manga: _info_name_manga,
    desc_info_manga:_desc_info_manga,
    keyword_info_manga: _keyword_info_manga,
    view_name_chapter_title: _view_name_chapter_title,
    view_name_chapter: _view_name_chapter,
    desc_view_name_chapter: _desc_view_name_chapter,
    keyword_view_name_chapter: _keyword_view_name_chapter,
    tag_view_name_chapter: _tag_view_name_chapter,
    desc_view_chapter: _desc_view_chapter,
    lbl_Name_Page:_lbl_Name_Page,
    lbl_domain_Page:_lbl_domain_Page,
    lbl_domain_name:_lbl_domain_name,
    sb_seo_default_image:_sb_seo_default_image,


    lbl_show_all: "Show all",
    lbl_show_less: "Show less",
    lbl_view_more: "View More ",
    


    lbl_domain_home:"Home",
    lbl_next_data:"Next",
    lbl_prev_data:"Previous"
    
}

export const RawSetting:ConfigSetting={
    lblMangaType: "Manga Raw",

    lblTopView: "Top View",
    Lbl_Home_New_Upadte: "New Update",
    Lbl_Home_Hot: "Popular Today",
    Lbl_Home_Suggest: "Series Suggest Popular",
    Lbl_Home_Complate: "Complatte",
    Lbl_Home_Pop: "Popular",
    Lbl_Home_Random: "Manga",
    lbl_bookmark: "Bookmark",
    lbl_Find_list: "Find list",


    lbl_year: "Year",
    lbl_type: "Type",
    lbl_genres: "Genres",
    lbl_status: "Status",
    lbl_alpha: "Alpha",
    lbl_tag: "Tags",
    lbl_cate: "Category",

    lbl_start_chapter: "Chapter",
    lbl_start_manga: "Manga",
    lbl_text_chapter: "Chapter",

    lbl_inf_NameOther: "Alternative Titles",
    lbl_inf_View: "View",
    lbl_inf_Genres: "Genres",
    lbl_inf_Auth: "Author",
    lbl_inf_Type: "Type",
    lbl_inf_Year: "Released",
    lbl_inf_Scan: "SCAN",
    lbl_inf_Art: "Artist",
    lbl_inf_date: "Updated On",
    lbl_inf_status: "Status",
    lbl_inf_Summary: "Summary",
    lbl_inf_start_read: "Start Read",
    lbl_inf_continue: "Continue",
    lbl_inf_chapters: "List Chapters",
    lbl_inf_chapters_next: "Coming Next",

    lbl_inf_keyword: "keywords",
    lbl_inf_first_chapter: "First Chapter",
    lbl_inf_new_chapter: "New Chapter",
    lbl_inf_chapter_list: "Chapter list: ",
    lbl_inf_comment: "Comment",
    lbl_inf_start_manga: "Manga",
    lbl_date_now: 'now',
    lbl_date_minutes: 'minutes',
    lbl_date_hour: 'hour',
    lbl_date_yesterday: 'yesterday',
    lbl_date_days: 'days',
    lbl_date_months: 'months',
    lbl_date_years: 'years',


 
    lbl_show_all: "Show all",
    lbl_show_less: "Show less",
    lbl_view_more: "View More ",
    info_name_manga: _info_name_manga,
    desc_info_manga:_desc_info_manga,
    keyword_info_manga: _keyword_info_manga,
    view_name_chapter_title: _view_name_chapter_title,
    view_name_chapter: _view_name_chapter,
    desc_view_name_chapter: _desc_view_name_chapter,
    keyword_view_name_chapter: _keyword_view_name_chapter,
    tag_view_name_chapter: _tag_view_name_chapter,
    desc_view_chapter: _desc_view_chapter,
    lbl_Name_Page:_lbl_Name_Page,
    lbl_domain_Page:_lbl_domain_Page,
    lbl_domain_name:_lbl_domain_name,
    sb_seo_default_image: _sb_seo_default_image,
    info_name_manga_title: _info_name_manga_title,
    sb_seo_page_default_key: _sb_seo_page_default_key,
    sb_seo_page_default_desc: _sb_seo_page_default_desc,
    sb_seo_page_group_title: _sb_seo_page_group_title,
    sb_seo_page_group_desc: _sb_seo_page_group_desc,
    sb_seo_page_group_key: _sb_seo_page_group_key,
    sb_seo_df_title: _sb_seo_df_title,


    lbl_domain_home:"Home",

    lbl_next_data:"Next",
    lbl_prev_data:"Previous"
}

export const AdultSetting:ConfigSetting={
    lblMangaType: "Manga Adult",

    lblTopView: "Top View",
    Lbl_Home_New_Upadte: "New Update",
    Lbl_Home_Hot: "Popular Today",
    Lbl_Home_Suggest: "Series Suggest Popular",
    Lbl_Home_Complate: "Complatte",
    Lbl_Home_Pop: "Popular",
    Lbl_Home_Random: "Manga",
    lbl_bookmark: "Bookmark",
    lbl_Find_list: "Find list",


    lbl_year: "Year",
    lbl_type: "Type",
    lbl_genres: "Genres",
    lbl_status: "Status",
    lbl_alpha: "Alpha",
    lbl_tag: "Tags",
    lbl_cate: "Category",

    lbl_start_chapter: "Chapter",
    lbl_start_manga: "Manga",
    lbl_text_chapter: "Chapter",

    lbl_inf_NameOther: "Alternative Titles",
    lbl_inf_View: "View",
    lbl_inf_Genres: "Genres",
    lbl_inf_Auth: "Author",
    lbl_inf_Type: "Type",
    lbl_inf_Year: "Released",
    lbl_inf_Scan: "SCAN",
    lbl_inf_Art: "Artist",
    lbl_inf_date: "Updated On",
    lbl_inf_status: "Status",
    lbl_inf_Summary: "Summary",
    lbl_inf_start_read: "Start Read",
    lbl_inf_continue: "Continue",
    lbl_inf_chapters: "List Chapters",
    lbl_inf_chapters_next: "Coming Next",

    lbl_inf_keyword: "keywords",
    lbl_inf_first_chapter: "First Chapter",
    lbl_inf_new_chapter: "New Chapter",
    lbl_inf_chapter_list: "Chapter list: ",
    lbl_inf_comment: "Comment",
    lbl_inf_start_manga: "Manga",


    lbl_date_now: 'now',
    lbl_date_minutes: 'minutes',
    lbl_date_hour: 'hour',
    lbl_date_yesterday: 'yesterday',
    lbl_date_days: 'days',
    lbl_date_months: 'months',
    lbl_date_years: 'years',


    lbl_show_all: "Show all",
    lbl_show_less: "Show less",
    lbl_view_more: "View More ",
    info_name_manga: _info_name_manga,
    desc_info_manga:_desc_info_manga,
    keyword_info_manga: _keyword_info_manga,
    view_name_chapter_title: _view_name_chapter_title,
    view_name_chapter: _view_name_chapter,
    desc_view_name_chapter: _desc_view_name_chapter,
    keyword_view_name_chapter: _keyword_view_name_chapter,
    tag_view_name_chapter: _tag_view_name_chapter,
    desc_view_chapter: _desc_view_chapter,
    lbl_Name_Page:_lbl_Name_Page,
    lbl_domain_Page:_lbl_domain_Page,
    lbl_domain_name:_lbl_domain_name,
    sb_seo_default_image: _sb_seo_default_image,
    info_name_manga_title: _info_name_manga_title,
    sb_seo_page_default_key: _sb_seo_page_default_key,
    sb_seo_page_default_desc: _sb_seo_page_default_desc,
    sb_seo_page_group_title: _sb_seo_page_group_title,
    sb_seo_page_group_desc: _sb_seo_page_group_desc,
    sb_seo_page_group_key: _sb_seo_page_group_key,
    sb_seo_df_title: _sb_seo_df_title,


    lbl_domain_home:"Home",

    lbl_next_data:"Next",
    lbl_prev_data:"Previous"
}

export const NovelSetting:ConfigSetting={
    lblMangaType: "Novel Light",

    lblTopView: "Top View",
    Lbl_Home_New_Upadte: "New Update",
    Lbl_Home_Hot: "Popular Today",
    Lbl_Home_Suggest: "Series Suggest Popular",
    Lbl_Home_Complate: "Complatte",
    Lbl_Home_Pop: "Popular",
    Lbl_Home_Random: "Manga",
    lbl_bookmark: "Bookmark",
    lbl_Find_list: "Find list",


    lbl_year: "Year",
    lbl_type: "Type",
    lbl_genres: "Genres",
    lbl_status: "Status",
    lbl_alpha: "Alpha",
    lbl_tag: "Tags",
    lbl_cate: "Category",

    lbl_start_chapter: "Chapter",
    lbl_start_manga: "Read:",
    lbl_text_chapter: "Volume ",

    lbl_inf_NameOther: "Alternative Titles",
    lbl_inf_View: "View",
    lbl_inf_Genres: "Genres",
    lbl_inf_Auth: "Author",
    lbl_inf_Type: "Type",
    lbl_inf_Year: "Released",
    lbl_inf_Scan: "SCAN",
    lbl_inf_Art: "Artist",
    lbl_inf_date: "Updated On",
    lbl_inf_status: "Status",
    lbl_inf_Summary: "Summary",
    lbl_inf_start_read: "Start Read",
    lbl_inf_continue: "Continue",
    lbl_inf_chapters: "List Chapters",
    lbl_inf_chapters_next: "Coming Next",

    lbl_inf_keyword: "keywords",
    lbl_inf_first_chapter: "First Chapter",
    lbl_inf_new_chapter: "New Chapter",
    lbl_inf_chapter_list: "Chapter list: ",
    lbl_inf_comment: "Comment",
    lbl_inf_start_manga: "Readding",


    lbl_date_now: 'now',
    lbl_date_minutes: 'minutes',
    lbl_date_hour: 'hour',
    lbl_date_yesterday: 'yesterday',
    lbl_date_days: 'days',
    lbl_date_months: 'months',
    lbl_date_years: 'years',


    lbl_show_all: "Show all",
    lbl_show_less: "Show less",
    lbl_view_more: "View More ",
    info_name_manga: _info_name_manga,
    desc_info_manga:_desc_info_manga,
    keyword_info_manga: _keyword_info_manga,
    view_name_chapter_title: _view_name_chapter_title,
    view_name_chapter: _view_name_chapter,
    desc_view_name_chapter: _desc_view_name_chapter,
    keyword_view_name_chapter: _keyword_view_name_chapter,
    tag_view_name_chapter: _tag_view_name_chapter,
    desc_view_chapter: _desc_view_chapter,
    lbl_Name_Page:_lbl_Name_Page,
    lbl_domain_Page:_lbl_domain_Page,
    lbl_domain_name:_lbl_domain_name,
    sb_seo_default_image: _sb_seo_default_image,
    info_name_manga_title: _info_name_manga_title,
    sb_seo_page_default_key: _sb_seo_page_default_key,
    sb_seo_page_default_desc: _sb_seo_page_default_desc,
    sb_seo_page_group_title: _sb_seo_page_group_title,
    sb_seo_page_group_desc: _sb_seo_page_group_desc,
    sb_seo_page_group_key: _sb_seo_page_group_key,
    sb_seo_df_title: _sb_seo_df_title,


    lbl_domain_home:"Home",

    lbl_next_data:"Next",
    lbl_prev_data:"Previous"
}

export const DcSetting:ConfigSetting={
    lblMangaType: "Comic DC/MARVEL",

    lblTopView: "Top View",
    Lbl_Home_New_Upadte: "New Update",
    Lbl_Home_Hot: "Popular Today",
    Lbl_Home_Suggest: "Series Suggest Popular",
    Lbl_Home_Complate: "Complatte",
    Lbl_Home_Pop: "Popular",
    Lbl_Home_Random: "Manga",
    lbl_bookmark: "Bookmark",
    lbl_Find_list: "Find list",


    lbl_year: "Year",
    lbl_type: "Type",
    lbl_genres: "Genres",
    lbl_status: "Status",
    lbl_alpha: "Alpha",
    lbl_tag: "Tags",
    lbl_cate: "Category",

    lbl_start_chapter: "Chapter",
    lbl_start_manga: "Comic",
    lbl_text_chapter: "Chapter",

    lbl_inf_NameOther: "Alternative Titles",
    lbl_inf_View: "View",
    lbl_inf_Genres: "Genres",
    lbl_inf_Auth: "Author",
    lbl_inf_Type: "Type",
    lbl_inf_Year: "Released",
    lbl_inf_Scan: "SCAN",
    lbl_inf_Art: "Artist",
    lbl_inf_date: "Updated On",
    lbl_inf_status: "Status",
    lbl_inf_Summary: "Summary",
    lbl_inf_start_read: "Start Read",
    lbl_inf_continue: "Continue",
    lbl_inf_chapters: "List Chapters",
    lbl_inf_chapters_next: "Coming Next",

    lbl_inf_keyword: "keywords",
    lbl_inf_first_chapter: "First Chapter",
    lbl_inf_new_chapter: "New Chapter",
    lbl_inf_chapter_list: "Chapter list: ",
    lbl_inf_comment: "Comment",
    lbl_inf_start_manga: "Manga",


    lbl_date_now: 'now',
    lbl_date_minutes: 'minutes',
    lbl_date_hour: 'hour',
    lbl_date_yesterday: 'yesterday',
    lbl_date_days: 'days',
    lbl_date_months: 'months',
    lbl_date_years: 'years',


    lbl_show_all: "Show all",
    lbl_show_less: "Show less",
    lbl_view_more: "View More ",
    info_name_manga: _info_name_manga,
    desc_info_manga:_desc_info_manga,
    keyword_info_manga: _keyword_info_manga,
    view_name_chapter_title: _view_name_chapter_title,
    view_name_chapter: _view_name_chapter,
    desc_view_name_chapter: _desc_view_name_chapter,
    keyword_view_name_chapter: _keyword_view_name_chapter,
    tag_view_name_chapter: _tag_view_name_chapter,
    desc_view_chapter: _desc_view_chapter,
    lbl_Name_Page:_lbl_Name_Page,
    lbl_domain_Page:_lbl_domain_Page,
    lbl_domain_name:_lbl_domain_name,
    sb_seo_default_image: _sb_seo_default_image,
    info_name_manga_title: _info_name_manga_title,
    sb_seo_page_default_key: _sb_seo_page_default_key,
    sb_seo_page_default_desc: _sb_seo_page_default_desc,
    sb_seo_page_group_title: _sb_seo_page_group_title,
    sb_seo_page_group_desc: _sb_seo_page_group_desc,
    sb_seo_page_group_key: _sb_seo_page_group_key,
    sb_seo_df_title: _sb_seo_df_title,


    lbl_domain_home:"Home",

    lbl_next_data:"Next",
    lbl_prev_data:"Previous"
}

export const NewsDcSetting:ConfigSetting={
    lblMangaType: "Blogs",

    lblTopView: "Top View",
    Lbl_Home_New_Upadte: "New Update",
    Lbl_Home_Hot: "Popular Today",
    Lbl_Home_Suggest: "Series Suggest Popular",
    Lbl_Home_Complate: "Complatte",
    Lbl_Home_Pop: "Popular",
    Lbl_Home_Random: "Manga",
    lbl_bookmark: "Bookmark",
    lbl_Find_list: "Find list",


    lbl_year: "Year",
    lbl_type: "Type",
    lbl_genres: "Genres",
    lbl_status: "Status",
    lbl_alpha: "Alpha",
    lbl_tag: "Tags",
    lbl_cate: "Category",

    lbl_start_chapter: "Chapter",
    lbl_start_manga: "Comic",
    lbl_text_chapter: "Chapter",

    lbl_inf_NameOther: "Alternative Titles",
    lbl_inf_View: "View",
    lbl_inf_Genres: "Genres",
    lbl_inf_Auth: "Author",
    lbl_inf_Type: "Type",
    lbl_inf_Year: "Released",
    lbl_inf_Scan: "SCAN",
    lbl_inf_Art: "Artist",
    lbl_inf_date: "Updated On",
    lbl_inf_status: "Status",
    lbl_inf_Summary: "Summary",
    lbl_inf_start_read: "Start Read",
    lbl_inf_continue: "Continue",
    lbl_inf_chapters: "List Chapters",
    lbl_inf_chapters_next: "Coming Next",

    lbl_inf_keyword: "keywords",
    lbl_inf_first_chapter: "First Chapter",
    lbl_inf_new_chapter: "New Chapter",
    lbl_inf_chapter_list: "Chapter list: ",
    lbl_inf_comment: "Comment",
    lbl_inf_start_manga: "Manga",


    lbl_date_now: 'now',
    lbl_date_minutes: 'minutes',
    lbl_date_hour: 'hour',
    lbl_date_yesterday: 'yesterday',
    lbl_date_days: 'days',
    lbl_date_months: 'months',
    lbl_date_years: 'years',



    lbl_show_all: "Show all",
    lbl_show_less: "Show less",
    lbl_view_more: "View More ",
    info_name_manga: _info_name_manga,
    desc_info_manga: _desc_info_manga,
    keyword_info_manga: _keyword_info_manga,
    view_name_chapter_title: _view_name_chapter_title,
    view_name_chapter: _view_name_chapter,
    desc_view_name_chapter: _desc_view_name_chapter,
    keyword_view_name_chapter: _keyword_view_name_chapter,
    tag_view_name_chapter: _tag_view_name_chapter,
    desc_view_chapter: _desc_view_chapter,
    lbl_Name_Page: _lbl_Name_Page,
    lbl_domain_Page: _lbl_domain_Page,
    lbl_domain_name: _lbl_domain_name,

    sb_seo_default_image: _sb_seo_default_image,
    info_name_manga_title: _info_name_manga_title,
    sb_seo_page_default_key: _sb_seo_page_default_key,
    sb_seo_page_default_desc: _sb_seo_page_default_desc,
    sb_seo_page_group_title: _sb_seo_page_group_title,
    sb_seo_page_group_desc: _sb_seo_page_group_desc,
    sb_seo_page_group_key: _sb_seo_page_group_key,
    sb_seo_df_title: _sb_seo_df_title,

    lbl_domain_home: "Home",

    lbl_next_data: "Next",
    lbl_prev_data: "Previous",
   
}
export const AnimeSetting:ConfigSetting={
    lblMangaType: "Anime",

    lblTopView: "Top View",
    Lbl_Home_New_Upadte: "New Update",
    Lbl_Home_Hot: "Popular Today",
    Lbl_Home_Suggest: "Series Suggest Popular",
    Lbl_Home_Complate: "Complatte",
    Lbl_Home_Pop: "Popular",
    Lbl_Home_Random: "Anime",
    lbl_bookmark: "Bookmark",
    lbl_Find_list: "Find list",


    lbl_year: "Year",
    lbl_type: "Type",
    lbl_genres: "Genres",
    lbl_status: "Status",
    lbl_alpha: "Alpha",
    lbl_tag: "Tags",
    lbl_cate: "Category",

    lbl_start_chapter: "Episode",
    lbl_start_manga: "Comic",
    lbl_text_chapter: "Episode",

    lbl_inf_NameOther: "Alternative Titles",
    lbl_inf_View: "View",
    lbl_inf_Genres: "Genres",
    lbl_inf_Auth: "Author",
    lbl_inf_Type: "Type",
    lbl_inf_Year: "Released",
    lbl_inf_Scan: "SCAN",
    lbl_inf_Art: "Artist",
    lbl_inf_date: "Updated On",
    lbl_inf_status: "Status",
    lbl_inf_Summary: "Summary",
    lbl_inf_start_read: "Start Read",
    lbl_inf_continue: "Continue",
    lbl_inf_chapters: "List Chapters",
    lbl_inf_chapters_next: "Coming Next",

    lbl_inf_keyword: "keywords",
    lbl_inf_first_chapter: "First Episode",
    lbl_inf_new_chapter: "New Episode",
    lbl_inf_chapter_list: "Episode list: ",
    lbl_inf_comment: "Comment",
    lbl_inf_start_manga: "Anime",


    lbl_date_now: 'now',
    lbl_date_minutes: 'minutes',
    lbl_date_hour: 'hour',
    lbl_date_yesterday: 'yesterday',
    lbl_date_days: 'days',
    lbl_date_months: 'months',
    lbl_date_years: 'years',



    lbl_show_all: "Show all",
    lbl_show_less: "Show less",
    lbl_view_more: "View More ",
    info_name_manga: _info_name_manga,
    desc_info_manga: _desc_info_manga,
    keyword_info_manga: _keyword_info_manga,
    view_name_chapter_title: _view_name_chapter_title,
    view_name_chapter: _view_name_chapter,
    desc_view_name_chapter: _desc_view_name_chapter,
    keyword_view_name_chapter: _keyword_view_name_chapter,
    tag_view_name_chapter: _tag_view_name_chapter,
    desc_view_chapter: _desc_view_chapter,
    lbl_Name_Page: _lbl_Name_Page,
    lbl_domain_Page: _lbl_domain_Page,
    lbl_domain_name: _lbl_domain_name,

    sb_seo_default_image: _sb_seo_default_image,
    info_name_manga_title: _info_name_manga_title,
    sb_seo_page_default_key: _sb_seo_page_default_key,
    sb_seo_page_default_desc: _sb_seo_page_default_desc,
    sb_seo_page_group_title: _sb_seo_page_group_title,
    sb_seo_page_group_desc: _sb_seo_page_group_desc,
    sb_seo_page_group_key: _sb_seo_page_group_key,
    sb_seo_df_title: _sb_seo_df_title,

    lbl_domain_home: "Home",

    lbl_next_data: "Next",
    lbl_prev_data: "Previous",
   
}