
import ImageLoading from "@/ui/ImageLoading";
import { Boundary } from "@/ui/boundary";
import getDate from "@/utils/caldate";
import { ArrowPathIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import { useRouter } from 'next/router';

const LastRelease = ({ typeManga ,data_lastuppdate,config}: any) => {

  //console.log(`data_lastuppdate : ${JSON.stringify(data_lastuppdate)}`);

  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const FnNext = () => {
    router.push(`/${config.typeName}/latest-releases?page=${parseInt(data_lastuppdate.currentPage)+1}`)
  }
  const FnPrev = () => {
    if (parseInt(data_lastuppdate.currentPage) > 0)
     router.push(`/${config.typeName}/latest-releases?page=${parseInt(data_lastuppdate.currentPage)-1}`)
  }

  const [loading, setLoading] = useState(false);
  const [itemLoading, setItemLoading] = useState<number>();
  const handleClick = (index:number) => {
    setLoading(true);
    setItemLoading(index);
  };
  const skeletonLoadding = () => {
    return (
      <tr className="animate-pulse border border-blue-300 shadow rounded-md">
      <td className="w-1"><div className="h-5 bg-slate-700 rounded-full "><ArrowPathIcon className="w-4 animate-spin font-semibold"/></div></td>
      <td className="w-1/2 ml-1"><div className="h-3 bg-slate-700 rounded ">Loadding..</div></td>
      <td className="w-1/5"><div className="h-7 bg-slate-700 rounded"></div></td>
      <td className="w-1/5"><div className="h-3 bg-slate-700 rounded "></div></td>
    </tr>
    )
  };  

  const _renderItem = (data: any, index: number) => {
    return (
      <>
      {loading && index==itemLoading ? skeletonLoadding():
      <tr key={index + "-" + data.idDoc} className="border-b border-dotted border-slate-700 hover:border-dashed hover:border-sky-400">
        <td className="w-1/12 justify-center text-center text-lg font-semibold">
          <div className="border border-dashed justify-center w-10/12 bg-slate-950/70 overflow-hidden rounded-md p-1 m-2">
            <ImageLoading url={data.image} title={`${config?.configSetting?.lbl_start_manga} ${data.name}`} classStyle={"w-full object-cover"} />
          </div>
        </td>
        <td className="w-1/2">
          <a
            className="text-sm text-sky-500 dark:text-sky-400 hover:text-md hover:font-semibold hover:text-sky-200"
            rel="dofollow"
            href={`${config.configPrefix.pageManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}`}
            title={`${config?.configSetting?.lbl_start_manga} ${data.name}`}
            onClick={()=>handleClick(index)}
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
                data.detail_documents.slice(0, 2).map((item: any, ind: number) => (
                  <tr
                    className="m-3 border-b border-dotted border-slate-600 hover:border-dashed hover:border-sky-400"
                    key={ind + "" + item.idDetail}
                  >
                    <td className="py-2 mr-1">
                      <a
                        className="text-sm text-sky-500 dark:text-sky-400 hover:text-md hover:font-semibold hover:text-sky-300"
                        rel="dofollow"
                        href={`${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${item.idDoc}/${config.configPrefix.startViewmanga}${item.idDetail}${config.configPrefix.endViewmanga}`}
                        title={`${config?.configSetting?.lbl_start_manga} ${data.name} ${config?.configSetting?.lbl_start_chapter} ${item.idDetail}`}

                        onClick={()=>handleClick(index)}
                      >
                        {config.configSetting
                          ? config?.configSetting?.lbl_text_chapter
                          : ""} {item.idDetail}
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
      }
     </>
    );
  };
  const PageAction = () => {
    return (
      <div id="next-prev" className="my-3 flex flex-row gap-2 mr-2">
        {(data_lastuppdate && parseInt(data_lastuppdate.currentPage) ==0) && <a

        title={`${config?.configSetting?.lbl_prev_data}`}
        className="cursor-pointer line-through hover:border-dashed w-1/2 block border border-slate-700 rounded p-2 text-center hover:border-orange-500 dark:hover:orange-sky-400  hover:text-orange-500 dark:hover:text-orange-400"  >
        <ChevronLeftIcon className="w-4 inline " />
        <b className="ml-3 font-semibold first-letter:uppercase">
          {config?.configSetting?.lbl_prev_data}
        </b>
        </a>

        }
        {(data_lastuppdate && parseInt(data_lastuppdate.currentPage) > 0) && <a
        onClick={FnPrev}
        title={`${config?.configSetting?.lbl_text_chapter} ${parseInt(data_lastuppdate.currentPage) - 1}`}
        className="cursor-pointer hover:border-dashed w-1/2 block border border-slate-700 rounded p-2 text-center hover:border-sky-500 dark:hover:border-sky-400  hover:text-sky-500 dark:hover:text-sky-400" >
        <ChevronLeftIcon className="w-4 inline " />
        <b className="ml-3 font-semibold first-letter:uppercase">
          {config?.configSetting?.lbl_prev_data}
        </b>
        </a>}

         {(data_lastuppdate && parseInt(data_lastuppdate.currentPage) >= data_lastuppdate.totalPage - 1) && <a

          title={`${config?.configSetting?.lbl_prev_data} ${data_lastuppdate.currentPage + 1}`}
          className="cursor-pointer line-through hover:border-dashed w-1/2 block border border-slate-700 rounded p-2 text-center hover:border-orange-500 dark:hover:orange-sky-400  hover:text-orange-500 dark:hover:text-orange-400" >
          <b className="mr-3 font-semibold first-letter:uppercase">
            {config?.configSetting?.lbl_next_data}
          </b>
          <ChevronRightIcon className="w-4 inline " />
        </a>}
        {(data_lastuppdate && parseInt(data_lastuppdate.currentPage) < data_lastuppdate.totalPage - 1) && (
          <a
            onClick={FnNext}
            title={`${config?.configSetting?.lbl_text_chapter} ${data_lastuppdate.currentPage + 1}`}
            className="cursor-pointer hover:border-dashed  w-1/2 block border border-slate-700 rounded p-2 text-center  hover:border-sky-500 dark:hover:border-sky-400  hover:text-sky-500 dark:hover:text-sky-400" >
            <b className="mr-3 font-semibold first-letter:uppercase">
              {config?.configSetting?.lbl_next_data}
            </b>
            <ChevronRightIcon className="w-4 inline " />
          </a>
        )} 
      </div>
    );
  };
  return (
    <>
      <div ref={sectionRef}></div>
      <Boundary labels={config?.configSetting?.Lbl_Home_New_Upadte} />
      <table className="w-full text-left border-collapse text-sm ">
        <tbody>
          {(!data_lastuppdate || (data_lastuppdate && data_lastuppdate.data.length<=0)) && tableSkeleton()}
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
const tableSkeleton = () => {
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
export default LastRelease;
