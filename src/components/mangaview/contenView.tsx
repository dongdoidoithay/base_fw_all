import ImageLoading from '@/ui/ImageLoading';
import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import AdsViews from '../../ads/ads_view';
import AdsDetail from '../../ads/ads_detail';
import { ArticleJsonLd } from 'next-seo';

import { useCookies } from 'react-cookie';
import { AuthApi } from "@/constants/FetchApi";
const ContenView = ({ config, viewMode, data, listImg, SetlistImg, CurrentImage, ImageSelect, SetCurrentImage, SetImageSelect, prev_img, next_img ,domain}: any) => {
    const [cookies, setCookies] = useCookies(['token', 'userName', 'email', 'userId']);
   
    const is_full = viewMode;
    let is_next = data.idDetailNext;
    let is_prev = data.idDetailPrev;
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        
        if (data != null && data.source != null && data.source != undefined && !data.source.includes('#')) {
            let imagelist = data.source.split(',').filter((word: any) => word.length > 1 && !word.includes('mm1.png'));
            SetlistImg(imagelist);
            if (imagelist.length > 0) {
                let imageselected = imagelist[0];
                SetImageSelect(imageselected);
            }
            // console.log('listImg', {listImg});
        }
        //truong hơp dau #
        if (data != null && data.source != null && data.source != undefined && data.source.includes('#')) {
            let imagelist = data.source.split('#').filter((word: any) => word.length > 1 && !word.includes('mm1.png'));
            SetlistImg(imagelist);
            if (imagelist.length > 0) {
                let imageselected = imagelist[0];
                SetImageSelect(imageselected);
            }
            // console.log('listImg', {listImg});
        }

        if (data != null && data.image != null && data.image != undefined ) {
            let imagelist = data.image.split('#').filter((word: any) => word.length > 1 && !word.includes('mm1.png'));
            SetlistImg(imagelist);
            if (imagelist.length > 0) {
                let imageselected = imagelist[0];
                SetImageSelect(imageselected);
            }
        }
      /*   if (data != null && data.source != null && data.source != undefined) {
            let imagelist = data.source.split('#').filter((word: any) => word.length > 1 && !word.includes('mm1.png'));
            SetlistImg(imagelist);
            if (imagelist.length > 0) {
                let imageselected = imagelist[0];
                SetImageSelect(imageselected);
            }
            // console.log('listImg', {listImg});
        } */
       
        if(data.idDetail != null && data.idDetail != undefined && cookies && cookies.userId)
        {
            let payload={
            user_id: cookies.userId,
            id_manga:data.idDoc,
            type_manga:config?.typeManga,
            name_manga:  data.nameDoc,
            image_manga: data.manga?.image,
            id_detail:data.idDetail
            };
            AuthApi('addReadingUsers', JSON.stringify(payload));
        }
    

    }, []);



    useEffect(() => {
        // Runs ONCE after initial rendering
        // and after every rendering ONLY IF `prop` or `state` changes
        if (listImg.length > 0 && CurrentImage == 0) {
            if (listImg.length > 0) {
                let imageselected = listImg[0];
                SetImageSelect(imageselected);
                //console.log('imageselected', {imageselected});
            }
        }
    }, [ImageSelect]);
    useEffect(() => {
        // Runs ONCE after initial rendering
        // and after every rendering ONLY IF `prop` or `state` changes
        if (listImg.length > 0 && CurrentImage != 0) {
            let imageselected = listImg[CurrentImage];
            SetImageSelect(imageselected);
        }
        // console.log("change CurrentImage", { CurrentImage })
    }, [CurrentImage]);

    useEffect(() => {
        // every rendering 
        if (listImg.length > 0 && CurrentImage == 0 && ImageSelect == '' && is_full == 'N') {
            let imageselected = listImg[0];
            SetImageSelect(imageselected);
            // console.log('imageselected', {imageselected});
        }
    });


    const next_pic = (e: any) => {
        if (e < listImg.length) {

            //window.location.href = "#" + (parseInt(e) + 1);
            let hash = "#" + (parseInt(e) + 1);
            window.location.hash = hash;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });

        }
        if (e == listImg.length) {
            if (is_next != '') {
                toast.success('🦄 you are reading next chapter:' + is_next, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
                window.location.href = `${config.configPrefix.pageManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}/${config.configPrefix.startViewmanga}${is_next}${config.configPrefix.endViewmanga}`;
            }
            else {

                toast.warn('🦄 you are reading the last chapter. You can read other Manga waiting for the new chapter to update !', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            };
        }
    }
    const next_pic_point = () => {

        const viewportHeight = window.innerHeight;
        // Calculate the position of the next screen
        const nextScreenPosition = Math.ceil((window.scrollY + 1) / viewportHeight) * viewportHeight;

       // console.log("nextScreenPosition", nextScreenPosition)
        // Scroll to the next screen
        window.scroll({
            top: nextScreenPosition,
            behavior: 'smooth' // Add smooth scrolling effect
        });
      
    }

    useEffect(() => {
        const handleKeyPress = (event: any) => {

            if (is_full == "N" && ImageSelect != '') {
                if (event.code.toString() == 'ArrowRight') {
                    //console.log('next_img!');
                    next_img();
                }
                if (event.code == 'ArrowLeft') {
                    //console.log('prev_img!');
                    prev_img();
                }
            }
        }

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const loadOneImage = () => {
        // console.log("loadOneImage",{is_full,ImageSelect})
        if (is_full == "N" && ImageSelect != '') {
            return (
                <>
                    <ImageLoading url={ImageSelect} title={`${data.nameDoc}-${CurrentImage}`} classStyle="w-full h-full object-fill"  style={{"width":"100%","height":"auto"}}/>
                    <AdsViews domain={domain}/>
                    <a title='prev Img' className="absolute w-1/2 h-full left-0  cursor-[url('/pre.cur'),_pointer] z-50" onClick={() => prev_img()} ></a>
                    <a title='next Img' className="absolute w-1/2 h-full right-0 cursor-[url('/next.cur'),_pointer] z-50" onClick={() => next_img()} ></a>
             
                </>
            )
        }
    }
    const loadAllImage = () => {
        if (is_full == "Y" && listImg.length > 0) {
            return (
                <>
                    {
                        listImg.map((image: any, k: number) => {
                            return (
                                <div key={k} className="flex flex-col items-center w-full cursor-[url('/down.png'),_pointer]" onClick={() => { next_pic(k + 1); next_pic_point() }} >
                                    <ImageLoading url={image} title={`${data.nameDoc}-${k}`} classStyle="w-full h-full object-fill" style={{"width":"100%","height":"auto"}}/>
                                    {(k%3==0)&&<AdsViews domain={domain}/>} 
                                    {(k==7)&&<AdsDetail domain={domain}/>}
                                </div>
                            )
                        })
                    }
                </>
            )
        }
    }
    //#endregion


    if (is_full == "N" && ImageSelect != '') {
        return (
            <div ref={sectionRef} className='flex flex-col items-center relative w-full lg:w-3/4'>
           
                <ImageLoading url={ImageSelect} title={`${data.nameDoc}-${CurrentImage}`} classStyle="w-full h-full object-fill"  style={{"width":"100%","height":"auto"}}/>
                <AdsViews domain={domain}/>
                <a title='prev Img' className="absolute w-1/2 h-full left-0  cursor-[url('/pre.cur'),_pointer] z-50" onClick={() => prev_img()} ></a>
                <a title='next Img' className="absolute w-1/2 h-full right-0 cursor-[url('/next.cur'),_pointer] z-50" onClick={() => next_img()} ></a>
         
            </div>
        )
    }else{
        return (
            <div ref={sectionRef} className='flex flex-col items-center relative w-full lg:w-3/4'>
            {
                listImg.map((image: any, k: number) => {
                    return (
                        <div key={k} className="flex flex-col items-center w-full cursor-[url('/down.png'),_pointer]" onClick={() => { next_pic(k + 1); next_pic_point() }} >
                            <ImageLoading url={image} title={`${data.nameDoc}-${k}`} classStyle="w-full h-full object-fill" style={{"width":"100%","height":"auto"}}/>
                            {(k%3==0)&&<AdsViews domain={domain}/>} 
                            {(k==7)&&<AdsDetail domain={domain}/>}
                        </div>
                    )
                })
            }
        </div>
        )
    }
   
}
export default ContenView;
