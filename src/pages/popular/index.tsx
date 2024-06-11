
import { GlobalNav } from "@/ui/global-nav";
import { GetServerSideProps } from "next";
import AdsTop from "@/ads/ads_top_body";
import AdsDetail from "@/ads/ads_detail";
import { baseSeo, configBase, configPrefixBase } from "@/constants/constants";
import PopupHomeClient from "@/components/homePage/popupHomeClient";
import NoDataFound from "@/components/noDataFound";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context:any) => {
  try{
  const _domain=context.req.headers.host;
  let domain='_';
  let config_base= configBase["_"];
  if(!_domain.includes('localhost')){
    domain=domain+_domain.replace('www.','').replace('-','').replace('.','');
    config_base= configBase[domain];
  }
  //console.log(config_base)
  const config = config_base?.SelectMangaTypeByPage('');
 
  return { 
      props: { 
        config:config,
        domain:domain,
      }
   }
  }catch(ex){
    
    console.log(`pop pular ${context.req.url} :`,ex);
    return {
      props: {
        config:null,
        domain:"_"
      }
    }
  }
}
export default function PageAlpha({config,domain}:any) {
  if(config==null/* || domain=="_" */){
    return (<NoDataFound domain={domain} />)
  }
  let config_baseSeo= baseSeo[domain]?.default;
  let config_prefix_baseSeo= configPrefixBase[domain];
  return (
    <>
     <Head>
      <meta httpEquiv="content-language" content={config_baseSeo?.locale} />
      <meta name="sitemap" content={`${config_prefix_baseSeo._hostwww}/${domain}/sitemap-index.xml`}/>
      <meta name="robots" content={`${config_prefix_baseSeo._hostwww}/${domain}/robots.txt`}/>
    </Head>
      <GlobalNav domain={domain}/>
      <div className="lg:pl-60 ">
        <main className=" bg-slate-900/60 border border-slate-700">
          <div id="wapper" className="mt-4 px-2">
            <AdsTop domain={domain}/>
            {config.activeSource.map((item:any,index:number)=>{

              return <PopupHomeClient typeManga={item.value} nameLable={item.lable} key={index} domain={domain} />
            })}
            <AdsDetail domain={domain}/>
          </div>
        </main>
      </div>
    </>
  );
}
