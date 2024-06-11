

import ImageLoading from "@/ui/ImageLoading";
import { Boundary } from "@/ui/boundary";
import getDate from "@/utils/caldate";
import Link from "next/link";
import { useEffect, useState } from "react";
import AdsTop from "@/ads/ads_top_body";
import AdsDetail from "@/ads/ads_detail";
import { getStorage } from "@/utils/localFx";
import { GlobalNav } from "@/ui/global-nav";
import { GetServerSideProps } from "next";
import { configBase } from "@/constants/constants";
import NoDataFound from "@/components/noDataFound";
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const _domain = context.req.headers.host;
  let domain = '_';
  if (!_domain.includes('localhost')) {
    domain = domain + _domain.replace('www.', '').replace('-', '').replace('.', '');
  }
  return {
    props: {
      domain: domain
    }
  }
}
export default function PageBookmark({ domain }: any) {
  let config_base = configBase[domain];
  const config = config_base?.SelectMangaTypeByPage('');


  const history = (item: any, index: number) => {
    return (
      <Link
        rel="dofollow"
        href={`${item.url_view}`}
        title={`${config?.configSetting?.lbl_inf_start_manga} ${item.namecomic}`}
        key={index}
        className="relative lg:w-1/2 w-full text-sm text-sky-500 dark:text-sky-400 "
      >
        <div className="overflow-auto my-1 mx-1 border-slate-700 border rounded-md hover:border-dashed hover:border-sky-400">
          <div className="overflow-hidden relative mx-auto flex items-center gap-6">
            <ImageLoading
              url={item.image}
              title={item.namecomic}
              classStyle="absolute w-20 h-20 rounded-md shadow-lg"
            />
            <div className="flex flex-col py-5 pl-24 ">
              <h2 className="px-1 truncate .. font-semibold first-line:uppercase first-letter:text-xl hover:text-md hover:font-semibold hover:text-sky-200">
                {item.namecomic} {item.namechapter && item.namechapter}
              </h2>
              <span className="px-1 text-slate-300 dark:text-slate-400">
                {config?.configSetting?.lbl_inf_continue}:{" "}
                <strong>{item.namechapter}</strong>
              </span>
              <span className="px-1 text-slate-300 dark:text-slate-400">
                {config?.configSetting?.lbl_inf_date}:{" "}
                <strong>{getDate(item.time, config)}</strong>
              </span>
            </div>
          </div>
        </div>
      </Link>
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

  const [list, setList] = useState([]);
  useEffect(() => {
    if (config?.localKey) {
      let _list = JSON.parse(getStorage(config?.localKey?.localReadView) as string);
      if (_list !== null && _list.length > 0) {
        let incomlist = _list
          .filter((word: any) => word.comicId != null)
          .reverse();
        setList(incomlist);
      }
    }
    //console.log("_list",_list)

  }, []);

  return (
    <>
      <GlobalNav domain={domain} />
      <div className="lg:pl-60  bg-slate-900/70 border border-slate-700">
        <main className="px-2">
          <AdsTop domain={domain} />
          {list && list.length > 0 && (
            <Boundary labels={config?.configSetting?.lbl_bookmark} />
          )}
          {list && list.length > 0 && (
            <div className="flex flex-wrap  pt-1">
              {list &&
                list.length > 0 &&
                list.map((data: any, index: number) => history(data, index))}
            </div>
          )}
          <AdsDetail domain={domain} />
        </main>
      </div>
    </>
  );
}
