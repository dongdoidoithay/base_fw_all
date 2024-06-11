import { GlobalNav } from "@/ui/global-nav";
import { GetServerSideProps } from "next";
import SliderHome from "@/components/homePage/slideHome";
import PopupHome from "@/components/homePage/popupHome";
import LastUpdateHome from "@/components/homePage/lastUpdate";
import TopComment from "@/components/homePage/topComments";
import HistoryHome from "@/components/homePage/historyHome";
import AdsTop from "@/ads/ads_top_body";
import AdsDetail from "@/ads/ads_detail";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { baseSeo, configBase, configPrefixBase } from "@/constants/constants";
import { CallApiWithRetry } from "@/constants/FetchApi";
import NoDataFound from "@/components/noDataFound";
import AdsViews from "@/ads/ads_view";

export const getServerSideProps: GetServerSideProps = async (context:any) => {
  try{
  //console.log("ctx",context.params);
  const _domain=context.req.headers.host;
  let domain='_';
  let config_base= configBase["_"];
  let config = config_base?.SelectMangaTypeByPage("");
  if(!_domain.includes('localhost')){
   domain=domain+_domain.replace('www.','').replace('-','').replace('.','');
    config_base= configBase[domain];
  }
  config = config_base?.SelectMangaTypeByPage(context.params.type);
  const _nameType =config_base?.SelectMangaTypeName(context.params.type);
 // console.log("_nameType",_nameType);
if(_nameType==undefined){
  return { 
    props: { 
      data_trend:null,
      data_slide:null,
      data_popular:null,
      data_lastuppdate:null,
      config:null,
      nameType:null,
      type:null,
      domain:"_"
    }
 }
}
  let data_trend;
  let data_slide;
  let data_popular;
  let data_lastuppdate;
  await Promise.all([
    CallApiWithRetry(config.apiPath + config.endPointPath.homeTren,9),
    CallApiWithRetry(config.apiPath + config.endPointPath.homeSlide,9),
    CallApiWithRetry(config.apiPath + config.endPointPath.homePopular,9),
    CallApiWithRetry(config.apiPath + config.endPointPath.homeLastUpdate + 0,9)

]).then((result) => {
  data_trend = result[0];
  data_slide = result[1];
  data_popular= result[2];
  data_lastuppdate= result[3];
});
 
  return { 
      props: { 
        data_trend:data_trend??null,
        data_slide:data_slide??null,
        data_popular:data_popular??null,
        data_lastuppdate:data_lastuppdate??null,
        config:config,
        nameType:_nameType,
        type:context.params.type,
        domain:domain
      }
   }
  }catch(ex){
    
    // console.log(`Type ${context.req.url} :`,ex);

    return { 
      props: { 
        data_trend:null,
        data_slide:null,
        data_popular:null,
        data_lastuppdate:null,
        config:null,
        nameType:null,
        type:null,
        domain:"_"
      }
   }
  }
}

export default function PageInTye({data_trend,data_slide,data_popular,data_lastuppdate,config,nameType,type,domain}:any) {
 if(nameType==null && config==null){
    return (<NoDataFound domain={domain} />)
  }
  try{
      let config_baseSeo= baseSeo[domain]?.default;
      let config_prefix_baseSeo= configPrefixBase[domain];
      let _lang=config_baseSeo?.locale;
     // console.log(config_baseSeo)
    switch(type) {
        case config_prefix_baseSeo?._Prefix_Root_Scan:
        case config_prefix_baseSeo?._Prefix_Root_Novel:
        case config_prefix_baseSeo?._Prefix_Root_Anime:
        case config_prefix_baseSeo?._Prefix_Root_Raw:
        case config_prefix_baseSeo?._Prefix_Root_Adult:
        case config_prefix_baseSeo?._Prefix_Root_Dc:
          _lang='en-GB';
        case config_prefix_baseSeo?._Prefix_Root_Indo:
          _lang='id-ID';
        case config_prefix_baseSeo?._Prefix_Root_Italy:
          _lang='es-ES';
        case config_prefix_baseSeo?._Prefix_Root_Video_Ru:
        case config_prefix_baseSeo?._Prefix_Root_Manga_Ru:
        case config_prefix_baseSeo?._Prefix_Root_Adult_Ru:
          case config_prefix_baseSeo?._Prefix_Root_Yaoi_Ru:
            _lang='ru-RU';

        case config_prefix_baseSeo?._Prefix_Root_Manga_Br:
        case config_prefix_baseSeo?._Prefix_Root_Adult_Br:
            _lang='pt-BR';
      
      }
      return (
        <>
        <Head>
          <title>{`${config?.configSetting?.sb_seo_page_group_title
            .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
            .replace(/{groupname}/g, nameType)
            .replace(/{key}/g, nameType)
            .replace(/{page}/g, `0`)
            }`}
          </title>
            <meta httpEquiv="content-language" content={_lang} />  
            <meta name="sitemap" content={`${config_prefix_baseSeo._hostwww}/${domain}/sitemap-index.xml`}></meta>
            <meta name="robots" content={`${config_prefix_baseSeo._hostwww}/${domain}/robots.txt`}></meta>
        </Head>
        <NextSeo
          title={`${config?.configSetting?.sb_seo_page_group_title
            .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
            .replace(/{groupname}/g, nameType)
            .replace(/{key}/g, nameType)
            .replace(/{page}/g, `0`)
            }`
          }
          description={`${config?.configSetting?.sb_seo_page_group_desc
            .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
            .replace(/{groupname}/g, nameType)
            .replace(/{key}/g, nameType)
            .replace(/{page}/g, `0`)}`
          }
          canonical={`/${config.typeManga}?page=${parseInt(data_lastuppdate.currentPage)}`}
          openGraph={{
            url: `/${config.typeManga}?page=${parseInt(data_lastuppdate.currentPage)}`,
            title: `${config?.configSetting?.sb_seo_page_group_title
              .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
              .replace(/{groupname}/g, nameType)
              .replace(/{key}/g, nameType)
              .replace(/{page}/g, `0`)
              }`,
            description: `${config?.configSetting?.sb_seo_page_group_desc
              .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
              .replace(/{groupname}/g, nameType)
              .replace(/{key}/g, nameType)
              .replace(/{page}/g, `0`)}`,
            site_name: `${config?.configSetting?.lbl_domain_Page}`,
          }
          }
          additionalMetaTags={[{
            property: 'keywords',
            content: config?.configSetting?.sb_seo_page_group_key
              .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
              .replace(/{groupname}/g, config?.configSetting?.lbl_genres)
              .replace(/{key}/g, 'latest releases')
              .replace(/{page}/g, `${nameType}`)
          }]}
        /*  additionalLinkTags={[{
            rel: "next",
            href: `/${config.typeManga}?page=${parseInt(data_lastuppdate.currentPage)+1}`,
          }, {
            rel: "prev",
            href: `/${config.typeManga}?page=${parseInt(data_lastuppdate.currentPage)-1}`,
          }
          ]} */
        />
          <GlobalNav domain={domain}/>
          <div className="lg:pl-60  bg-slate-900/70 border border-slate-700">
            <main className="px-2">
            <SliderHome typeManga={type} data_trend={data_trend} data_slide={data_slide} domain={domain}/>
                <AdsTop domain={domain}/>
                <HistoryHome domain={domain}/>
                <PopupHome typeManga={type} nameLable={null} data_popular={data_popular} domain={domain}/>
                <AdsViews domain={domain}/>
                 <LastUpdateHome typeManga={type} data_lastuppdate={data_lastuppdate} domain={domain}/>
                <AdsDetail domain={domain}/>
                <TopComment domain={domain}/>
            
            </main>
          </div>
        </>
      );
    }catch(ex){
      console.log(`type ${type} - ${domain} ex:`,ex);
      return (<NoDataFound domain={domain} />)
    }
}
