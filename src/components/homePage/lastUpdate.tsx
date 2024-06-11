
import { Boundary } from "@/ui/boundary";
import getDate from "@/utils/caldate";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import { useRouter } from 'next/router';
import { configBase } from "@/constants/constants";

const LastUpdateHome = ({ typeManga ,data_lastuppdate,domain}: any) => {
 // console.log(`data_lastuppdate`,data_lastuppdate);
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  let config_base= configBase[domain];
  let config = config_base?.SelectMangaTypeByPage(typeManga);
  //console.log(config);
  const FnNext = () => {
    router.push(`/${config.typeName}/latest-releases?page=1`)
  
  }
  const _renderItem = (data: any, index: number) => {
    return (
      <tr key={index + "-" + data.idDoc} className="border-b border-dotted border-slate-600 hover:border-dashed hover:border-sky-400">
        <td className="w-1/12 justify-center text-center text-lg font-semibold">
          <div className="font-semibold border border-dotted rounded-full justify-center w-2/3 bg-slate-950/70 hover:border-dashed hover:border-sky-400">
            {index + 1}
          </div>
        </td>
        <td className="w-1/2">
          <a
            className="text-sm text-sky-500 dark:text-sky-400 hover:text-md hover:font-semibold hover:text-sky-200"
            rel="dofollow"
            href={`${config.configPrefix.pageManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}`}
            title={`${config?.configSetting?.lbl_start_manga} ${data.name}`}
          >
            {data.name}
          </a>
        </td>
        <td className="hidden sm:block py-5 align-middle">
          <div>
            {config?.configSetting?.lbl_inf_status}: <strong className="  text-sky-600 dark:text-sky-500">{data.status}</strong>
          </div>
          <div>
            {config?.configSetting?.lbl_inf_View}: <strong className=" text-sky-600 dark:text-sky-500">{data.view}</strong>
          </div>
        </td>
        <td className="w-1/5 xs:1/2">
          <table className="w-full text-left border-collapse text-sm ">
            <tbody>
              {data.detail_documents &&
                data.detail_documents.slice(0,2).map((item: any, index: number) => (
                  <tr
                    className="m-3 border-b border-dotted border-slate-600 hover:border-dashed hover:border-sky-400"
                    key={index + "" + item.idDetail}
                  >
                    <td className="py-2 mr-1">
                      <a
                        className="text-sm text-sky-500 dark:text-sky-400 hover:text-md hover:font-semibold hover:text-sky-300"
                        rel="dofollow"
                        href={`${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${item.idDoc}/${config.configPrefix.startViewmanga}${item.idDetail}${config.configPrefix.endViewmanga}`}
                        title={`${config?.configSetting?.lbl_start_manga} ${data.name} ${config?.configSetting?.lbl_start_chapter} ${item.idDetail}`}
                      >
                       {config.configSetting
                          ? config?.configSetting?.lbl_text_chapter
                          : ""} {item.idDetail}
                         {/*  {item.idDetail.replace('-',' ').replace('vol_','Volume ').replace('ch_',config.configSetting? config?.configSetting?.lbl_text_chapter+" ": " ")} */}
                      </a>
                    </td>
                    <td className="hidden sm:block justify-end float-right">
                      {getDate(item.date, config)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </td>
      </tr>
    );
  };
  const PageAction = () => {
    return (
      <div id="next-prev" className="my-3 flex flex-row gap-2 mr-2 w-">
       <a
            onClick={FnNext}
            title={`${config?.configSetting?.lbl_text_chapter} ${1}`}
            className="cursor-pointer hover:border-dashed w-full block border border-slate-700 rounded p-2 text-center  hover:border-sky-500 dark:hover:border-sky-400  hover:text-sky-500 dark:hover:text-sky-400"           >
            <b className="mr-3 font-semibold first-letter:uppercase">
              {config?.configSetting?.lbl_next_data}
            </b>
            <ChevronRightIcon className="w-4 inline " />
          </a>
      </div>
    );
  };
  return (
    <>
    <div ref={sectionRef}></div>
      <Boundary labels={config?.configSetting?.Lbl_Home_New_Upadte} />
      <table className="w-full text-left border-collapse text-sm " >
        <tbody>
          {(!data_lastuppdate || (data_lastuppdate && data_lastuppdate.data.length<=0)) &&  tableSkeleton()}
          {data_lastuppdate && data_lastuppdate.data.length>0 && data_lastuppdate.data.map((data: any, index: number) => (_renderItem(data, index)))} 
        </tbody>
      </table>
      {/*load more*/}
      {PageAction()}
    </>
  );
};

const skeleton = () => {
  return (
      <tr className="animate-pulse border border-blue-300 shadow rounded-md">
        <td className="w-1"><div className="h-5 bg-slate-700 rounded-full "></div></td>
        <td className="w-1/2 ml-1"><div className="h-3 bg-slate-700 rounded "></div></td>
        <td className="w-1/5"><div className="h-7 bg-slate-700 rounded"></div></td>
        <td className="w-1/5"><div className="h-3 bg-slate-700 rounded "></div></td>
      </tr>
    )
};
const tableSkeleton=()=>{
  return (
    <>
      {skeleton()}
      {skeleton()}
      {skeleton()}
      {skeleton()}
      {skeleton()}
      {skeleton()}
    </>
  )
}
export default LastUpdateHome;
