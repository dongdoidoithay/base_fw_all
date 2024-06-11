import AdsDetail from "@/ads/ads_detail";
import AdsTop from "@/ads/ads_top_body";
import MangaByGroupServer from "@/components/groupPage/mangaByGroupServer";
import { FetchGroupData } from "@/constants/FetchApi";
import { GlobalNav } from "@/ui/global-nav";
import { baseSeo, configBase, configPrefixBase } from "@/constants/constants";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import NoDataFound from "@/components/noDataFound";
import Head from "next/head";


export const getServerSideProps: GetServerSideProps = async (context: any) => {
  try{
  const _domain=context.req.headers.host;
  // console.log("_domain",_domain);
   let domain='_';
   let config_base= configBase["_"];
   if(!_domain.includes('localhost')){
     domain=domain+_domain.replace('www.','').replace('-','').replace('.','');
     config_base= configBase[domain];
   }
   const config = config_base?.SelectMangaTypeByPage(context.params.type);
   const nameType =config_base?.SelectMangaTypeName(context.params.type);
  let _page = context.query.page;
  if (_page == undefined || _page == "" || _page == null)
      _page = 0;
  let data_group;
  await Promise.all([
      FetchGroupData(config,"type",context.params.id,_page)

  ]).then((result) => {
      data_group = result[0];
  });

  return {
      props: {
          data_group: data_group ?? null,
          id:context.params.id,
          type:context.params.type,
          config:config,
          page:_page,
          domain:domain
      }
  }
}catch(ex){
    
  console.log(`in Type ${context.req.url} :`,ex);
  return {
    props: {
      data_group:  null,
      id: null,
      type: null,
      config: null,
      page: null,
      domain:"_"
    }
  }
}
}
export default function PageInGenres({data_group,id,type,config,page,domain}:any) {

  const router = useRouter()
  const pagginationHandler = (page: any) => {

  const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page.nextSelectedPage;

    router.push({
      pathname: currentPath,
      query: currentQuery, 
    }); 

  };
  if(data_group==null /* || domain=="_" */){
    return (<NoDataFound domain={domain} />)
}
  const _groupPageName="Type";
  const _pagePath='type';
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
      <meta name="sitemap" content={`${config_prefix_baseSeo._hostwww}/${domain}/sitemap-index.xml`}/>
      <meta name="robots" content={`${config_prefix_baseSeo._hostwww}/${domain}/robots.txt`}/>
    </Head>
<NextSeo
        title={`${config?.configSetting?.sb_seo_page_group_title
          .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
          .replace(/{groupname}/g, config?.configSetting?.lbl_status)
          .replace(/{key}/g, id?.toString())
          .replace(/{page}/g, `${page}`)
          }`
        }
        description={`${config?.configSetting?.sb_seo_page_group_desc
          .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
          .replace(/{groupname}/g, _groupPageName)
          .replace(/{key}/g, id?.toString())
          .replace(/{page}/g, `${page}`)}`
        }
        canonical={`/${config.typeManga}/${_pagePath}/${id}?page=${parseInt(data_group.currentPage)}`}
        openGraph={{
          url: `/${config.typeManga}/${_pagePath}/${id}?page=${parseInt(data_group.currentPage)}`,
          title: `${_groupPageName} ${id?.toString()}`,
          description: `${config?.configSetting?.sb_seo_page_group_desc
            .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
            .replace(/{groupname}/g, _groupPageName)
            .replace(/{key}/g, id?.toString())
            .replace(/{page}/g, `${page}`)}`,
          site_name: `${config?.configSetting?.lbl_domain_Page}`,
        }
        }
        additionalMetaTags={[{
          property: 'keywords',
          content: config?.configSetting?.sb_seo_page_group_key
            .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
            .replace(/{groupname}/g, config?.configSetting?.lbl_genres)
            .replace(/{key}/g, id?.toString())
            .replace(/{page}/g, `${_groupPageName}`)
        }]}
        additionalLinkTags={[{
          rel: "next",
          href: `/${config.typeManga}/${_pagePath}/${id}?page=${parseInt(data_group.currentPage)+1}`,
        }, {
          rel: "prev",
          href: `/${config.typeManga}/${_pagePath}/${id}?page=${parseInt(data_group.currentPage)-1}`,
        }
        ]}
      />
      <h1 style={{ "display": "none" }}>{config?.configSetting?.lbl_Find_list} {id}</h1>

      <GlobalNav domain={domain}/>
      <div className="lg:pl-60 ">
        <main className=" bg-slate-900/60 border border-slate-700">
          <div id="wapper" className="mt-4 px-2">

            <AdsTop domain={domain}/>
            <MangaByGroupServer  typeManga ={type} pathPage={_pagePath} data={data_group} idFind={id} config={config}/>
            <nav aria-label="Page navigation example ">
                {/* <ReactPaginate
                 // marginPagesDisplayed={2}
                 // pageRangeDisplayed={1}
                  previousLabel={"❮"}
                  nextLabel={"❯"}
                  breakLabel={"..."}
                  initialPage={page}
                  // disableInitialCallback={true}
                  pageCount={data_group.totalPage}
                  onClick={pagginationHandler}
                  //onPageChange={pagginationHandler}
                  containerClassName={"flex items-center -space-x-px h-10 text-base   cursor-pointer hover:border-dashed block border border-slate-700 rounded p-2 text-center hover:border-sky-500 dark:hover:border-sky-400  hover:text-sky-500 dark:hover:text-sky-400"}
                  pageLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                  previousClassName={"flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                  nextLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                  activeLinkClassName={"flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"}
                  breakClassName={"flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"}
                  //subContainerClassName={"paginate-inner"}
                  //activeClassName={"active"}
                /> */}
              </nav>
            <AdsDetail domain={domain}/>
          </div>
        </main>
      </div>
    </>
  );
}