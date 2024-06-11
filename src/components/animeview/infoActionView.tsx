import React, { useState } from "react";

import { toast } from "react-toastify";
import { useCookies } from 'react-cookie';
import { AuthApi } from "@/constants/FetchApi";
import { getStorage } from "@/utils/localFx";
import { BookOpenIcon, BookmarkIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ExclamationTriangleIcon, HeartIcon, Square2StackIcon, Square3Stack3DIcon, TagIcon } from "@heroicons/react/20/solid";
import Link from "next/link";



  const FnReportError = () => {
    toast("🦄 Report Error Functions under development", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
const InfoActionView = ({ 
    config, 
    data,
    fontSize,
    setfontSize,
    lineHieght,
    setLineHieght,
    bgColor,
    setBgColor,
    colorSelect,
    setColorSelect,
    fontFamilySelect,
    setFontFamilySelect}: any) => {
    
    const[modelSetting,setModelSetting]=useState(false);

    const [cookies, setCookies] = useCookies(['token', 'userName', 'email', 'userId']);

    //console.log(data);
    const FnSubscribe = async () => {
      //addSubscriptUsers
      if(data && data.idDoc && config &&cookies && cookies.userId){
        let payload={
          user_id: cookies.userId,
          id_manga:data.idDoc ,
          type_manga:config?.typeManga,
          name_manga: data?.nameDoc,
          created_date:new Date(),
          image_manga:data?.manga?.image,
          id_detail:data?.idDetail
        }
        const res = await AuthApi('addSubscriptUsers', JSON.stringify(payload));
        if (res && res.code=="00") {
          toast.info("Subscriber Manga "+data?.nameDoc +" done!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
  
        }
        if (res && res.code=="02") {
          toast.warning("Manga "+data?.nameDoc +"  has been Subscriber", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          
        }
        if (res && res.code=="03") {
          toast.error("🦄 Subscribe Error", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
      else{
        toast.error("🦄 This feature requires logging in to your account. Please log in to continue.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
  
     
    };
    const FnFavorite = async () => {
      if(data && data.idDoc && config &&cookies && cookies.userId){
        let payload={
            user_id: cookies.userId,
            id_manga:data.idDoc ,
            type_manga:config?.typeManga,
            name_manga: data?.nameDoc,
            created_date:new Date(),
            image_manga:data?.manga?.image,
            id_detail:data?.idDetail
        }
        const res = await AuthApi('addFavUsers', JSON.stringify(payload));
        if (res && res.code=="00") {
          toast.info("Favorite Manga "+data?.nameDoc +" done!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
  
        }
        if (res && res.code=="02") {
          toast.warning("Manga "+data?.nameDoc +"  has been Favorite", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          
        }
        if (res && res.code=="03") {
          toast.error("🦄 Favorite Error", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
      else{
        toast.error("🦄 This feature requires logging in to your account. Please log in to continue.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
  
    };
    const FnReadLater = async () => {
      if(data && data.idDoc && config &&cookies && cookies.userId){
        let payload={
            user_id: cookies.userId,
            id_manga:data.idDoc ,
            type_manga:config?.typeManga,
            name_manga: data?.nameDoc,
            created_date:new Date(),
            image_manga:data?.manga?.image,
            id_detail:data?.idDetail
        }
        const res = await AuthApi('addReadLastUsers', JSON.stringify(payload));
        if (res && res.code=="00") {
          toast.info("ReadLater Manga "+data?.nameDoc +" done!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
  
        }
        if (res && res.code=="02") {
          toast.warning("Manga "+data?.nameDoc +"  has been ReadLater", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          
        }
        if (res && res.code=="03") {
          toast.error("🦄 ReadLater Error", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
      else{
        toast.error("🦄 This feature requires logging in to your account. Please log in to continue.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
  
    };
    const FnCollection = () => {
      toast("🦄 Collection Functions under development", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    return (
        <>
            <div id="info" className="my-1 mx-2">
                <h1 className="font-semibold text-2xl  text-white/80 first-line:uppercase">
                    {data?.nameDoc}
                    <span className="pl-2 first-line:uppercase text-current before:content-['_↗']">{config?.configSetting?.lbl_text_chapter} <strong>{data.idDetail} </strong></span>
                </h1>
            </div>
            <div id="action-info" className="flex flex-wrap flex-col sm:flex-row">
                <div className="flex flex-1 flex-wrap gap-0  my-1 items-center">
                    <button
                        onClick={()=>setModelSetting(!modelSetting)}
                        type="button"
                        className="px-2 text-sm hover:text-sky-500 dark:hover:text-sky-400 h-9 text-sky-500 dark:text-sky-400 font-semibold relative " >
                       <div><TagIcon className="inline w-4 " />  Watch Later </div>
                        <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                    </button>
                    <button type="button" className="px-2 text-sm hover:text-sky-500 dark:hover:text-sky-400 h-9" onClick={FnSubscribe}>
                        <BookmarkIcon className="inline w-4 hover:animate-bounce" /> Subscribe
                    </button>
                    <button type="button" className="px-2 text-sm hover:text-sky-500 dark:hover:text-sky-400 h-9"  onClick={FnFavorite}>
                        <HeartIcon className="inline w-4 animate-pin hover:animate-spin" /> Favorite
                    </button>
                   <button type="button" className="px-2 text-sm  hover:text-orange-500 dark:hover:text-orange-400 h-9" onClick={FnReportError}>
                        <ExclamationTriangleIcon className="inline w-4" /> Report Error
                    </button> 
                </div>
                <div className="flex flex-wrap font-semibold my-1">
                    <div>
                        {data.idDetailPrev == '' && <a 
                            title={`Next Chapter ${data.idDetailPrev}`}
                            className="line-through text-de px-2 text-sm hover:text-orange-500 dark:hover:text-orange-400 h-9">
                            <ChevronDoubleLeftIcon className="inline w-6" />  {config?.configSetting?.lbl_prev_data} {config?.configSetting?.lbl_start_chapter}
                        </a>}
                        {data.idDetailPrev && <Link 
                            title={`Prev Chapter ${data.idDetailPrev}`}
                            href={`${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${data.idDoc}/${config.configPrefix.startViewmanga}${data.idDetailPrev}${config.configPrefix.endViewmanga}`} 
                            className="cursor-pointer px-2 text-sm hover:text-sky-500 dark:hover:text-sky-400 h-9">
                            <ChevronDoubleLeftIcon className="inline w-6" /> {config?.configSetting?.lbl_prev_data} {config?.configSetting?.lbl_start_chapter}
                        </Link>}

                        {data.idDetailNext && <Link 
                            title={`Next Chapter ${data.idDetailNext}`}
                            href={`${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${data.idDoc}/${config.configPrefix.startViewmanga}${data.idDetailNext}${config.configPrefix.endViewmanga}`} 
                            className="cursor-pointer px-2 text-sm hover:text-sky-500 dark:hover:text-sky-400 h-9">
                            {config?.configSetting?.lbl_next_data} {config?.configSetting?.lbl_start_chapter} <ChevronDoubleRightIcon className="w-6 inline " />
                        </Link>}
                        {data.idDetailNext == '' && <a 
                            title={`Next Chapter ${data.idDetailNext}`}
                            className="line-through text-de px-2 text-sm hover:text-orange-500 dark:hover:text-orange-400 h-9">
                            {config?.configSetting?.lbl_next_data} {config?.configSetting?.lbl_start_chapter} <ChevronDoubleRightIcon className="w-6 inline " />
                        </a>}
                    </div>
                </div>
            </div>
            
        </>
    );
};
export default InfoActionView;
