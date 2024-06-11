import InfoViewNovels from "./novelview/infoView"
import InfoViewAnime from "./animeview/infoView"
import InfoViewManga from "./mangaview/infoView"
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid"
import { configBase, configPrefixBase } from "@/constants/constants"


const RenderSwitch=({type,config,idmanga,iddetail,data,domain,nameType})=> {

  let config_prefix_base = configPrefixBase[domain];
   // console.log(`dt: ${JSON.stringify(data)}`);
    const breadcrumb = () => {
        return (
          <div id="breadcrumb" className="group block xs:hidden font-semibold mb-4 mt-4 4-50">
            <ol className="list-outside list-none flex flex-wrap gap-1" itemScope itemType="http://schema.org/BreadcrumbList">
              <li className="flex flex-row flex-nowrap  hover:text-sky-500 dark:hover:text-sky-400" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <HomeIcon className="block w-6 mx-1" />
                <a href={`${config.configPrefix.url_host}/`}
                  className="hover:text-sky-500 dark:hover:text-sky-400"
                  itemProp="item">
                  {config?.configSetting?.lbl_domain_home}
                </a>
                <meta itemProp="name" content={`${config?.configSetting?.lbl_domain_home}`} />
                <meta itemProp="position" content="1" />
              </li>
              <li className="flex flex-row flex-nowrap  hover:text-sky-500 dark:hover:text-sky-400" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <ChevronRightIcon className="block w-4 mx-1" />
                <a href={`${config.configPrefix.pageManga}`}
                  className="hover:text-sky-500 dark:hover:text-sky-400"
                  itemProp="item">
                  {nameType}
    
                </a>
                <meta itemProp="name" content={`${nameType}`} />
                <meta itemProp="position" content="2" />
              </li>
              <li className="flex flex-row flex-nowrap  hover:text-sky-500 dark:hover:text-sky-400" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <ChevronRightIcon className="block w-4 mx-1" />
                <a href={`${config.configPrefix.pageManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}`}
                  className="hover:text-sky-500 dark:hover:text-sky-400"
                  itemProp="item">
                  {data.nameDoc}
    
                </a>
                <meta itemProp="name" content={`${data.nameDoc}`} />
                <meta itemProp="position" content="3" />
              </li>
    
              <li className="flex flex-row" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <ChevronRightIcon className="block w-4 text-gray-400 mx-1" />{" "}
                {config?.configSetting?.lbl_start_chapter} {data?.idDetail}
                <meta itemProp="name" content={`${config?.configSetting?.lbl_start_chapter} ${data?.idDetail}`} />
                <meta itemProp="position" content="4" />
              </li>
            </ol>
          </div>
        )
      }

    switch(type) {
      case config_prefix_base._Prefix_Root_Novel:
        return (
        <>
            {breadcrumb()}
            <InfoViewNovels config={config} data={data} loading={false} domain={domain} />
        </>
        )
      case config_prefix_base._Prefix_Root_Anime:
      case config_prefix_base?._Prefix_Root_Video_Ru:
          return (
            <>
                {/* {_dataManga.isLoading && breadcrumbSkeleton()} */}
                {breadcrumb()}
                <InfoViewAnime config={config} data={data} loading={false} domain={domain} />
            </>
            )
      default:
        return  (
            <>
               {/*  {_dataManga.isLoading && breadcrumbSkeleton()} */}
                { breadcrumb()}
                <InfoViewManga config={config} data={data} loading={false} domain={domain} />
            </>
            )
    }
  }
export default RenderSwitch;