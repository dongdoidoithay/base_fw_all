
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules

import { CallApiWithRetry, FetchApi } from "@/constants/FetchApi";
import getDate from "@/utils/caldate";
import ImageLoading from "@/ui/ImageLoading";
import { Boundary } from "@/ui/boundary";
import { configBase } from "@/constants/constants";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const FetchDataPopular = async (config: any) => {
  return await FetchApi(config.apiPath + config.endPointPath.homePopular);
};
const PopupHomeClient = ({ typeManga,nameLable,domain }) => {
  if(nameLable==undefined)
  {
    nameLable='';
  }
  let config_base= configBase[domain];
  let config = config_base?.SelectMangaTypeByPage(typeManga);
  const[dataPopular,SetDataPopular]=useState(null);

  const _fetchDataPopular = useQuery(
    ["_fetchDataPopular", typeManga],
    () => FetchDataPopular(config),
    {
      retry: 10,
      staleTime: 10000,
      cacheTime: 5000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
 /*  useEffect(()=>{
  async function fetchData() {
    FetchApi(config.apiPath + config.endPointPath.homePopular).then((_data)=>{
     SetDataPopular(_data);
    });    
  }
  fetchData();
},[]) */


  const popular = (data: any, index: number) => {
    if(data==null)
    return <></>
    return (
      <a
        rel="dofollow"
        href={`${config.configPrefix.pageManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}`}
        title={`${config?.configSetting?.lbl_inf_start_manga} ${data.name}`}
        key={index}
        className="relative lg:w-1/2 w-full text-sm text-sky-500 dark:text-sky-400 " 
      >
        <div className="overflow-auto my-1 mx-1 border-slate-700 border rounded-md hover:border-dashed hover:border-sky-400">
          <div className="overflow-hidden relative mx-auto flex items-center gap-6">
            <ImageLoading
              url={data.image}
              title={data.nameSeo}
              classStyle="absolute  w-24 h-24 rounded-full shadow-lg"
            />
            <div className="flex flex-col py-5 pl-24 ">
              <h2 className="px-1 truncate .. font-semibold first-line:uppercase first-letter:text-xl hover:text-md hover:font-semibold hover:text-sky-200">
                {data.name}
              </h2>
              <span className="px-1 text-slate-300 dark:text-slate-400">
                {config?.configSetting?.lbl_inf_status}:{" "}
                <strong>{data.status}</strong>
              </span>
              <span className="px-1 text-slate-300 dark:text-slate-400">
                {config?.configSetting?.lbl_inf_date}:{" "}
                <strong>{getDate(data.date, config)}</strong>
              </span>
            </div>
          </div>
        </div>
      </a>
    );
  };
  const skeleton = () => {
    return (
      <div className="w-full lg:w-1/2 p-1">
        <div className="animate-pulse flex space-x-4 mx-1 my-1 border border-blue-300 shadow rounded-md ">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const popularSkeleton = () => {
    return (
      <>
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
      </>
    );
  };

  return (
    <>
    
      <Boundary labels={`${config?.configSetting?.Lbl_Home_Pop} ${nameLable}`}/>
      <div className="flex flex-wrap  pt-1">
      {_fetchDataPopular.isLoading && popularSkeleton()}
        {!_fetchDataPopular.isLoading &&
          _fetchDataPopular.data &&
          _fetchDataPopular.data.map((data: any, index: number) =>
            popular(data.document, index)
          )}
        {/* {!dataPopular && popularSkeleton()}
        {dataPopular && dataPopular.map((data: any, index: number) =>
            popular(data.document, index)
          )} */}
      </div>
    </>
  );
};

export default PopupHomeClient;
