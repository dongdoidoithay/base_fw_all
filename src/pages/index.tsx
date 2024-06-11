import  {GlobalNav}  from "@/ui/global-nav";

import AdsTop from '@/ads/ads_top_body';
import AdsDetail from '@/ads/ads_detail';
import { GetServerSideProps } from "next";
import { CallApiWithRetry } from "@/constants/FetchApi";
//import useApps from "@/context/useApps";
import { baseSeo, configBase, configPrefixBase, configSettingBase, seoConfig } from "@/constants/constants";
import SliderHome from "@/components/homePage/slideHome";
import HistoryHome from "@/components/homePage/historyHome";
import PopupHome from "@/components/homePage/popupHome";
import LastUpdateHome from "@/components/homePage/lastUpdate";
import TopComment from "@/components/homePage/topComments";
import Head from "next/head";
import AdsViews from "@/ads/ads_view";
import { AdsGalaksionButton } from "@/ads/ads_constants";


export const getServerSideProps: GetServerSideProps = async (context) => {
  try{
   const _domain=context.req.headers.host;
 // console.log("_domain",_domain);

  let domain="_";//'_';
  let config_base= configBase[domain];
  if(!_domain.includes('localhost')){
   domain=domain+_domain.replace('www.','').replace('-','').replace('.','');
   config_base= configBase[domain];
  }
  //console.log(config_base);
  let config = config_base?.SelectMangaTypeByPage("");
 // console.log(config);
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
        domain:domain
      }
   }
  }catch(ex){
    
    console.log(`Index ${context.req.url} :`,ex);
    return {
      props: {
        data_trend:null,
        data_slide:null,
        data_popular:null,
        data_lastuppdate:null,
        domain:"_"
      }
    }
  }

}

export default function Home({data_trend,data_slide,data_popular,data_lastuppdate,domain}:any) {
/*   if( domain=="_"){
    return (  <NoDataFound domain={domain} />)
  } */
 // console.log("domain::",domain);
  let config_baseSeo= baseSeo[domain]?.default;
  let config_prefix_baseSeo= configPrefixBase[domain];
  let seo_config= seoConfig[domain];
  let config_setting_baseSeo= configSettingBase[domain];
 
  //console.log(`config_setting_baseSeo: ${JSON.stringify(config_setting_baseSeo.domain_verification)} `);
  return (
    <>
    <Head>
      <meta httpEquiv="content-language" content={config_baseSeo?.locale} />
      <meta name="sitemap" content={`${config_prefix_baseSeo._hostwww}/${domain}/sitemap-index.xml`}></meta>
      <meta name="robots" content={`${config_prefix_baseSeo._hostwww}/${domain}/robots.txt`}></meta>
      <meta name="galaksion-domain-verification" content={`${config_setting_baseSeo.domain_verification}`} />
    </Head>
      <h1 style={{"position": "absolute","top": "-999px"}} suppressHydrationWarning > {config_baseSeo.title.replaceAll('{domain}',config_baseSeo.domainName)}</h1>
      <GlobalNav domain={domain}/>
      <div className="lg:pl-60  bg-slate-900/70 border border-slate-700">
        <main className="px-2">
            <SliderHome typeManga={null} data_trend={data_trend} data_slide={data_slide} domain={domain}/>
            <AdsTop domain={domain}/>
            <HistoryHome domain={domain}/>
            <PopupHome typeManga={null} nameLable={null} data_popular={data_popular} domain={domain}/>
            <AdsViews domain={domain}/>
            <LastUpdateHome typeManga={null} data_lastuppdate={data_lastuppdate} domain={domain}/>
            <AdsDetail domain={domain}/>
            <TopComment domain={domain}/>  
           
        </main>
      </div>
    </>
  );
}
