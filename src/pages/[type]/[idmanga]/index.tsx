import AdsTop from "@/ads/ads_top_body";
import DisqusComments from "@/components/mangaInfo/disquscomment";
import InfoManga from "@/components/mangaInfo/infoManga";
import { GlobalNav } from "@/ui/global-nav";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { baseSeo, configBase, configPrefixBase } from "@/constants/constants";
import { CallApiWithRetry } from "@/constants/FetchApi";
import NoDataFound from "@/components/noDataFound";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  try{
  const _domain = context.req.headers.host;
  // console.log("_domain",_domain);
  let domain='_';
  let config_base = configBase[domain];
  if (!_domain.includes("localhost")) {
    domain =
      domain + _domain.replace("www.", "").replace("-", "").replace(".", "");
    config_base = configBase[domain];
  }

  const config = config_base?.SelectMangaTypeByPage(context.params.type);
  const nameType = config_base?.SelectMangaTypeName(context.params.type);

  const idmanga = context.params.idmanga;
  let _idmanga = "";
  if (idmanga != undefined) {
    _idmanga = idmanga
      .toString()
      .replace(config.configPrefix.startManga, "")
      .replace(config.configPrefix.endManga, "");
  }
  let _dataManga;
  let _checkTrend;
  await Promise.all([
    CallApiWithRetry(
      config.apiPath + config.endPointPath.infoManga + _idmanga,
      9
    ),
    CallApiWithRetry(
      config.apiPath + config.endPointPath.checkTrend + _idmanga,
      9
    ),
  ]).then((result) => {
   
    _dataManga = result[0];
    _checkTrend = result[1];
    //console.log("xxxx",_dataManga);
    if(_dataManga.err && _dataManga.err=="no data found"){
      _dataManga=null;
    }
    
  });
 
  return {
    
    props: {
      dataManga: _dataManga,
      type: context.params.type,
      idmanga: _idmanga,
      config: config,
      domain: domain,
      typeName: nameType,
      checkTrend: _checkTrend,
    },
  };
}catch(ex){
    
  
  return {
    props: {
      dataManga:  null,
      type: null,
      idmanga: null,
      config: null,
      domain: "_",
      typeName: null,
      checkTrend: null,
    }
  }
}
};

const Info = ({
  dataManga,
  type,
  idmanga,
  config,
  domain,
  typeName,
  checkTrend,
}: any) => {
  
  if (dataManga == null/* || domain=="_" */) {
    return (<NoDataFound domain={domain} />)
  }

  const breadcrumb = () => {
    return (
      <div id="breadcrumb" className="group block xs:hidden font-semibold mb-4">
        <ol
          className="list-outside list-none flex flex-wrap gap-1"
          itemScope
          itemType="http://schema.org/BreadcrumbList"
        >
          <li
            className="flex flex-row flex-nowrap  hover:text-sky-500 dark:hover:text-sky-400"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/ListItem"
          >
            <HomeIcon className="block w-6 mx-1" />
            <Link
              itemProp="item"
              href={`${config.configPrefix.url_host}`}
              className="hover:text-sky-500 dark:hover:text-sky-400"
            >
              {config?.configSetting?.lbl_domain_home}
            </Link>
            <meta itemProp="name" content={`${config?.configSetting?.lbl_domain_home}`} />
            <meta itemProp="position" content="1" />
          </li>
          <li
            className="flex flex-row flex-nowrap  hover:text-sky-500 dark:hover:text-sky-400"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/ListItem"
          >
            <ChevronRightIcon className="block w-4 mx-1" />
            <Link
              href={`${config.configPrefix.url_host}${config.configPrefix.pageManga}`}
              className="hover:text-sky-500 dark:hover:text-sky-400"
              itemProp="item"
            >
              {typeName}
            </Link>
            <meta itemProp="name" content={`${config?.configSetting?.lbl_domain_home}`} />
            <meta itemProp="position" content="2" />
          </li>
          <li
            className="flex flex-row"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/ListItem"
          >
            <ChevronRightIcon className="block w-4 text-gray-400 mx-1" />{" "}
            {dataManga?.name}
            <meta itemProp="name" content={dataManga?.name} />
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </div>
    );
  };

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
      <meta httpEquiv="content-language" content={_lang} />
      <meta name="sitemap" content={`${config_prefix_baseSeo._hostwww}/${domain}/sitemap-index.xml`}></meta>
      <meta name="robots" content={`${config_prefix_baseSeo._hostwww}/${domain}/robots.txt`}></meta>
    </Head>
      <GlobalNav domain={domain} />
      <div className="lg:pl-60 ">
        <main className=" bg-slate-900/60 border border-slate-700">
          <div id="wapper" className="mt-4 px-2">
            <AdsTop domain={domain} />
            {breadcrumb()}
            {
              <InfoManga
                id={idmanga}
                config={config}
                dataManga={dataManga}
                domain={domain}
                checkTrend={checkTrend}
              />
            }

            {
              <div id="manga-comments" className="w-full bg-slate-900/70 ">
                <h3 className="font-semibold text-white/80 first-letter:uppercase before:content-['_↗']">
                  {config?.configSetting?.lbl_inf_comment}
                </h3>
                {
                  <DisqusComments
                    image={dataManga?.image}
                    type={config.typeManga}
                    url={`${config.configPrefix.url_host}${config.configPrefix.pageManga}/${config.configPrefix.startManga}${dataManga?.idDoc}${config.configPrefix.endManga}`}
                    id={dataManga?.idDoc}
                    title={dataManga?.name}
                    domain={domain}
                  />
                }
              </div>
            }
          </div>
        </main>
      </div>
    </>
  );
};
export default Info;
