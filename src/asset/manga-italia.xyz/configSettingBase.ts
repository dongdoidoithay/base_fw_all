import { base_desc_info_manga, base_desc_info_manga_br, base_desc_info_manga_indo, base_desc_info_manga_ita, base_desc_view_name_chapter, base_desc_view_name_chapter_br, base_desc_view_name_chapter_indo, base_desc_view_name_chapter_ita, base_info_name_manga_title, base_info_name_manga_title_br, base_info_name_manga_title_indo, base_info_name_manga_title_ita, base_keyword_info_manga, base_keyword_info_manga_br, base_keyword_info_manga_indo, base_keyword_info_manga_ita, base_keyword_view_name_chapter, base_keyword_view_name_chapter_br, base_keyword_view_name_chapter_indo, base_keyword_view_name_chapter_ita, base_sb_seo_df_title, base_sb_seo_df_title_br, base_sb_seo_df_title_indo, base_sb_seo_df_title_ita, base_sb_seo_page_default_desc, base_sb_seo_page_default_desc_br, base_sb_seo_page_default_desc_indo, base_sb_seo_page_default_desc_ita, base_sb_seo_page_default_key, base_sb_seo_page_default_key_br, base_sb_seo_page_default_key_indo, base_sb_seo_page_default_key_ita, base_sb_seo_page_group_desc, base_sb_seo_page_group_desc_br, base_sb_seo_page_group_desc_indo, base_sb_seo_page_group_desc_ita, base_sb_seo_page_group_key, base_sb_seo_page_group_key_br, base_sb_seo_page_group_key_indo, base_sb_seo_page_group_key_ita, base_sb_seo_page_group_title, base_sb_seo_page_group_title_br, base_sb_seo_page_group_title_indo, base_sb_seo_page_group_title_ita, base_view_name_chapter_title, base_view_name_chapter_title_br, base_view_name_chapter_title_indo, base_view_name_chapter_title_ita } from "../base/baseConfigSettingBase";
import sample from 'lodash/sample';

export const _Brand_Name="ItaliaManga";

export const _lbl_Name_Page=`<span class="text-sky-400 font-bold">Manga 🐠</span><span class="text-orange-600 font-bold"> Capitoli</span>`;
export const _lbl_domain_Page="manga-italia.xyz";
export const _lbl_domain_name="manga-italia.xyz";
export const _sb_seo_default_image="https://manga-italia.xyz/bg.jpg";

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

export const _info_name_manga_title_br=sample(base_info_name_manga_title_br(_lbl_domain_name,_Brand_Name));
export const _desc_info_manga_br= sample(base_desc_info_manga_br(_lbl_domain_name,_Brand_Name));
export const _keyword_info_manga_br= sample(base_keyword_info_manga_br(_lbl_domain_name,_Brand_Name));

export const _view_name_chapter_title_br= sample(base_view_name_chapter_title_br(_lbl_domain_name,_Brand_Name));
export const _desc_view_name_chapter_br= sample(base_desc_view_name_chapter_br(_lbl_domain_name,_Brand_Name));
export const _keyword_view_name_chapter_br= sample(base_keyword_view_name_chapter_br(_lbl_domain_name,_Brand_Name));

export const _tag_view_name_chapter_br= "leia mangá {name} Chapter {chapter}, comic {name} Chapter {chapter}, leia {name} Chapter {chapter} online, {name} Chapter {chapter} de alta qualidade, {name} Chapter {chapter} mangá scan";
export const _desc_view_chapter_br= "Leia o mangá mais recente <b> {name} {chapter} </b> em <b> {namePage} </b>. O mangá <b> {name} </b> é sempre atualizado em <b> {namePage} </b>. Não se esqueça de ler as outras atualizações do mangá. Uma lista de coleções de mangás <b> {namePage} </b> está no menu Manga List. </p>";

//ý
export const _info_name_manga_ita= "fumetti {name}";
export const _view_name_chapter_ita= "fumetti {name} {chapter} - {nameOther}";

export const _sb_seo_df_title_ita= sample(base_sb_seo_df_title_ita(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_default_key_ita= sample(base_sb_seo_page_default_key_ita(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_default_desc_ita= sample(base_sb_seo_page_default_desc_ita(_lbl_domain_name,_Brand_Name));

export const _sb_seo_page_group_title_ita=sample(base_sb_seo_page_group_title_ita(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_group_desc_ita= sample(base_sb_seo_page_group_desc_ita(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_group_key_ita= sample(base_sb_seo_page_group_key_ita(_lbl_domain_name,_Brand_Name));

export const _info_name_manga_title_ita=sample(base_info_name_manga_title_ita(_lbl_domain_name,_Brand_Name));
export const _desc_info_manga_ita= sample(base_desc_info_manga_ita(_lbl_domain_name,_Brand_Name));
export const _keyword_info_manga_ita= sample(base_keyword_info_manga_ita(_lbl_domain_name,_Brand_Name));

export const _view_name_chapter_title_ita= sample(base_view_name_chapter_title_ita(_lbl_domain_name,_Brand_Name));
export const _desc_view_name_chapter_ita= sample(base_desc_view_name_chapter_ita(_lbl_domain_name,_Brand_Name));
export const _keyword_view_name_chapter_ita= sample(base_keyword_view_name_chapter_ita(_lbl_domain_name,_Brand_Name));

export const _tag_view_name_chapter_ita= "leggi {name} Capitolo {chapter}, fumetto {name} Capitolo {chapter}, leggi {name} volume {chapter} online, {name} Capitolo {chapter} alta qualità, {name} Capitolo {chapter} scan manga";
export const _desc_view_chapter_ita= "Leggi il più recente Romanzo o Manga e Fumetto <b> {name} {chapter} </b> su <b> {namePage} </b>. Il manga <b> {name} </b> è sempre aggiornato su <b> {namePage} </b>. Non dimenticare di leggere gli altri aggiornamenti manga. Un elenco delle collezioni manga <b> {namePage} </b> è nel menu Lista Manga. </p>";
//indo
export const _info_name_manga_indo= "Komik  {name}";
export const _view_name_chapter_indo= "Komik  {name} {chapter} - {nameOther}";

export const _sb_seo_df_title_indo= sample(base_sb_seo_df_title_indo(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_default_key_indo= sample(base_sb_seo_page_default_key_indo(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_default_desc_indo= sample(base_sb_seo_page_default_desc_indo(_lbl_domain_name,_Brand_Name));

export const _sb_seo_page_group_title_indo=sample(base_sb_seo_page_group_title_indo(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_group_desc_indo= sample(base_sb_seo_page_group_desc_indo(_lbl_domain_name,_Brand_Name));
export const _sb_seo_page_group_key_indo= sample(base_sb_seo_page_group_key_indo(_lbl_domain_name,_Brand_Name));

export const _info_name_manga_title_indo=sample(base_info_name_manga_title_indo(_lbl_domain_name,_Brand_Name));
export const _desc_info_manga_indo= sample(base_desc_info_manga_indo(_lbl_domain_name,_Brand_Name));
export const _keyword_info_manga_indo= sample(base_keyword_info_manga_indo(_lbl_domain_name,_Brand_Name));

export const _view_name_chapter_title_indo= sample(base_view_name_chapter_title_indo(_lbl_domain_name,_Brand_Name));
export const _desc_view_name_chapter_indo= sample(base_desc_view_name_chapter_indo(_lbl_domain_name,_Brand_Name));
export const _keyword_view_name_chapter_indo= sample(base_keyword_view_name_chapter_indo(_lbl_domain_name,_Brand_Name));

export const _tag_view_name_chapter_indo = "baca {name} Chapter {chapter}, komik {name} Chapter {chapter}, baca {name} volume {chapter} online, {name} Chapter {chapter} kualitas tinggi, {name} Chapter {chapter} scan manga";
export const _desc_view_chapter_indo = "Baca Novel, Manga dan Komik terbaru <b>{name} {chapter}</b> di <b>{namePage}</b>. Manga <b>{name}</b> selalu diperbarui di <b>{namePage}</b>. Jangan lupa membaca pembaruan manga lainnya. Daftar koleksi manga <b>{namePage}</b> ada di menu Daftar Manga. </p>";


export const analytics_key='G-XQTJBNMFLD';


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

export const MangaIndoSetting:ConfigSetting={
    lblMangaType: "Komik Indonesia",

    lblTopView: "Top View",
    Lbl_Home_New_Upadte: "Terbaru",
    Lbl_Home_Hot: "Populer Hari Ini",
    Lbl_Home_Suggest: "Rekomendasi Populer",
    Lbl_Home_Complate: "Tamat",
    Lbl_Home_Pop: "Populer",
    Lbl_Home_Random: "Komik Acak",
    lbl_bookmark: "bookmark",
    lbl_Find_list: "Temukan Daftar",
  
  
    lbl_year: "Tahun",
    lbl_type: "Tipe",
    lbl_genres: "Genre",
    lbl_status: "Status",
    lbl_alpha: "Abjad",
    lbl_tag: "Tag",
    lbl_cate: "Kategori",
  
    lbl_start_chapter: "Chapter",
    lbl_start_manga: "Komik",
    lbl_text_chapter: "Chapter",
  
    lbl_inf_NameOther: "Judul Lain",
    lbl_inf_View: "Lihat",
    lbl_inf_Genres: "Genre",
    lbl_inf_Auth: "Penulis",
    lbl_inf_Type: "Tipe",
    lbl_inf_Year: "Tahun",
    lbl_inf_Scan: "Scan",
    lbl_inf_Art: "Gambar",
    lbl_inf_date: "Diperbarui", 
    lbl_inf_status: "Status",
    lbl_inf_Summary: "Sinopsis",
    lbl_inf_start_read: "Mulai Baca",
    lbl_inf_continue: "lanjutkan",
    lbl_inf_chapters: "Daftar Chapter",
    lbl_inf_chapters_next: "Selanjutnya",
  
    lbl_inf_keyword: "kata kunci",
    lbl_inf_first_chapter: "Chapter Pertama",
    lbl_inf_new_chapter: "Chapter Baru",
    lbl_inf_chapter_list: "Daftar Chapter: ",
    lbl_inf_comment: "Komentar",
    lbl_inf_start_manga: "Komik",
  
  
  
    lbl_date_now: 'baru saja',
    lbl_date_minutes: 'menit',
    lbl_date_hour: 'jam',
    lbl_date_yesterday: 'kemarin',
    lbl_date_days: 'hari',
    lbl_date_months: 'bulan',
    lbl_date_years: 'tahun',

    info_name_manga_title: _info_name_manga_title_indo,
    sb_seo_page_default_key:_sb_seo_page_default_key_indo,
    sb_seo_page_default_desc:_sb_seo_page_default_desc_indo,
    sb_seo_page_group_title: _sb_seo_page_group_title_indo,
    sb_seo_page_group_desc:_sb_seo_page_group_desc_indo,
    sb_seo_page_group_key: _sb_seo_page_group_key_indo,
    sb_seo_df_title: _sb_seo_df_title_indo,
    info_name_manga: _info_name_manga_indo,
    desc_info_manga:_desc_info_manga_indo,
    keyword_info_manga: _keyword_info_manga_indo,
    view_name_chapter_title: _view_name_chapter_title_indo,
    view_name_chapter: _view_name_chapter_indo,
    desc_view_name_chapter: _desc_view_name_chapter_indo,
    keyword_view_name_chapter: _keyword_view_name_chapter_indo,
    tag_view_name_chapter: _tag_view_name_chapter_indo,
    desc_view_chapter: _desc_view_chapter_indo,
    lbl_Name_Page:_lbl_Name_Page,
    lbl_domain_Page:_lbl_domain_Page,
    lbl_domain_name:_lbl_domain_name,
    sb_seo_default_image:_sb_seo_default_image,


    lbl_show_all: "Tampilkan semua",
    lbl_show_less: "Tampilkan lebih sedikit",
    lbl_view_more: "Lihat lainnya",
    
    lbl_domain_home:"Beranda",
    lbl_next_data:"Selanjutnya",
    lbl_prev_data:"Sebelumnya"
    
}

export const MangaItalySetting:ConfigSetting={
    lblMangaType: "Manga italiani",

    lblTopView: "Più visti",
    Lbl_Home_New_Upadte: "Nuove uscite",
    Lbl_Home_Hot: "Popolari oggi",
    Lbl_Home_Suggest: "Serie popolari consigliate",
    Lbl_Home_Complate: "Completi",
    Lbl_Home_Pop: "Popolari",
    Lbl_Home_Random: "Manga casuali",
    lbl_bookmark: "segnalibri",
    lbl_Find_list: "Trova lista",
  
  
    lbl_year: "Anno",
    lbl_type: "Tipo",
    lbl_genres: "Generi",
    lbl_status: "Stato",
    lbl_alpha: "Alfabetico",
    lbl_tag: "Tags",
    lbl_cate: "Categorie",
  
    lbl_start_chapter: "Capitolo",
    lbl_start_manga: "Manga",
    lbl_text_chapter: "Capitolo",
  
    lbl_inf_NameOther: "Titoli alternativi",
    lbl_inf_View: "Visualizzazioni",
    lbl_inf_Genres: "Generi",
    lbl_inf_Auth: "Autore",
    lbl_inf_Type: "Tipo",
    lbl_inf_Year: "Anno",
    lbl_inf_Scan: "Scan",
    lbl_inf_Art: "Disegni",
    lbl_inf_date: "Aggiornato il",
    lbl_inf_status: "Stato",
    lbl_inf_Summary: "Trama",
    lbl_inf_start_read: "Inizia a leggere",
    lbl_inf_continue: "continua",
    lbl_inf_chapters: "Elenca capitoli",
    lbl_inf_chapters_next: "Prossimo",
  
    lbl_inf_keyword: "parole chiave",
    lbl_inf_first_chapter: "Primo capitolo",
    lbl_inf_new_chapter: "Nuovo capitolo",
    lbl_inf_chapter_list: "Elenco capitoli: ",
    lbl_inf_comment: "Commenta",
    lbl_inf_start_manga: "Manga",
  
  
  
    lbl_date_now: 'adesso',
    lbl_date_minutes: 'minuti',
    lbl_date_hour: 'ora',
    lbl_date_yesterday: 'ieri',
    lbl_date_days: 'giorni',
    lbl_date_months: 'mesi',
    lbl_date_years: 'anni',

    info_name_manga_title: _info_name_manga_title_ita,
    sb_seo_page_default_key:_sb_seo_page_default_key_ita,
    sb_seo_page_default_desc:_sb_seo_page_default_desc_ita,
    sb_seo_page_group_title: _sb_seo_page_group_title_ita,
    sb_seo_page_group_desc:_sb_seo_page_group_desc_ita,
    sb_seo_page_group_key: _sb_seo_page_group_key_ita,
    sb_seo_df_title: _sb_seo_df_title_ita,
    info_name_manga: _info_name_manga_ita,
    desc_info_manga:_desc_info_manga_ita,
    keyword_info_manga: _keyword_info_manga_ita,
    view_name_chapter_title: _view_name_chapter_title_ita,
    view_name_chapter: _view_name_chapter_ita,
    desc_view_name_chapter: _desc_view_name_chapter_ita,
    keyword_view_name_chapter: _keyword_view_name_chapter_ita,
    tag_view_name_chapter: _tag_view_name_chapter_ita,
    desc_view_chapter: _desc_view_chapter_ita,
    lbl_Name_Page:_lbl_Name_Page,
    lbl_domain_Page:_lbl_domain_Page,
    lbl_domain_name:_lbl_domain_name,
    sb_seo_default_image:_sb_seo_default_image,


    lbl_show_all: "Mostra tutto",
    lbl_show_less: "Mostra meno",
    lbl_view_more: "Vedi altro",
    
    
    
    lbl_domain_home:"Home",
    lbl_next_data:"Successivo",  
    lbl_prev_data:"Precedente"
    
}