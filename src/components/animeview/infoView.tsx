import React, { useEffect, useState } from "react";

import StoreLocalView from "./storeLocalView";
import InfoActionView from "./infoActionView";
import RenderChapterList from "../mangaInfo/renderChapterList_bk";
import InfoActionViewSkeletion from "./infoActionViewSkeletion";
import DisqusComments from "../mangaInfo/disquscomment";
import ContenViewSkeletion from "./contenViewSkeletion";
import AdsDetail from "@/ads/ads_detail";
import { CarouselJsonLd, NextSeo } from "next-seo";
import { C_Prefix_Type_Video_Ru } from "@/constants/constants";

const InfoViewAnime = ({ config, data, loading,domain }) => {
   const[src,setSrc]=useState('');
   //console.log("config",config.typeManga==C_Prefix_Type_Video_Ru);
   //console.log("InfoViewAnime data::",data.source)
   useEffect(()=>{
    if(config.typeManga==C_Prefix_Type_Video_Ru){
       try{
        let _src='';
        var _detail_videos = new RegExp('file:"(.*)",sub');
        var _contenVideo = data.source.match(_detail_videos);
         //console.log(_contenVideo);
         _src=_contenVideo[1];
         //console.log("json_detail:", _src.replace(/[']/g,''));
         setSrc(_src.replace(/[']/g,''));
       }catch{}
      }else{
        setSrc(data?.source);
      }
   },[src]);
   //console.log("src",src);
   //novels
    const [fontSize, setfontSize] = useState(19);
    const [lineHeight, setLineHeight] = useState(1.9);
    const [bgColor, setBgColor] = useState(null);
    const [colorSelect, setColorSelect] = useState(null);
    const [fontFamilySelect, setFontFamilySelect] = useState(null);
    const [showISettingView, setShowSettingView] = useState(false);
    //set hist
    if (data) {
        StoreLocalView(config, data);
    }
    //seo
    let name_author = '';
    let des_meta = '';//250 ky tu
    let key_word = '';
    let title = '';
    let url = '';
    let imageurl = '';
    if (data != null) {

        key_word = config?.configSetting?.keyword_view_name_chapter.replace(/{name}/gi, data.nameDoc).replace(/{nameOther}/g, data.manga?.nameOther).replace(/{auth}/g, name_author).replace(/{domain}/g, config?.configSetting?.lbl_domain_name).replace(/{chapter}/g, data.idDetail);
        title = config?.configSetting?.view_name_chapter_title.replace(/{name}/gi, data.nameDoc).replace(/{nameOther}/g, data.manga?.nameOther).replace(/{auth}/g, name_author).replace(/{domain}/g, config?.configSetting?.lbl_domain_name).replace(/{chapter}/g, data.idDetail);
        des_meta = config?.configSetting?.desc_view_name_chapter.replace(/{name}/gi, data.nameDoc).replace(/{nameOther}/g, data.manga?.nameOther).replace(/{auth}/g, name_author).replace(/{domain}/g, config?.configSetting?.lbl_domain_name).replace(/{chapter}/g, data.idDetail);
        url = `${config.configPrefix.pageManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}/${config.configPrefix.startViewmanga}${data.idDetail}${config.configPrefix.endViewmanga}`;
        imageurl = data?.manga?.image;
    }

    return (
        <>
{data &&  <NextSeo
            title={title}
            additionalMetaTags={[{
                property: 'keywords',
                content: key_word
            }]}
            description={des_meta}
            openGraph={{
                title: title,
                description: des_meta,
                url: url,
                type: 'article',
                article: {
                    publishedTime: new Date().toISOString(),
                    modifiedTime: new Date().toISOString(),
                    expirationTime: new Date().toISOString(),
                    section: "News",
                    tags: [key_word],
                },
                images: [
                    {
                        url: data?.manga?.image,
                        alt: title,
                    },
                ],
            }
            }
            additionalLinkTags={[{
                rel: "alternate",
                href: `/api${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}/${config.configPrefix.startViewmanga}${data.idDetail}${config.configPrefix.endViewmanga}/feed`,
                type: "application/rss+xml"
            },
            {
                rel: "alternate",
                href: `/api${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}/${config.configPrefix.startViewmanga}${data.idDetail}${config.configPrefix.endViewmanga}/rss.xml`,
                type: "application/rss+xml"
            }
            ]}
        />}
              {data && <CarouselJsonLd
                        ofType="movie"
                        data={[
                            {
                            name: title,
                            url: url,
                            image:data?.manga?.image,
                            director: {
                                name: 'MangaVn1',
                            },
                            review: {
                                author: { type: 'Person', name: 'MangaVn1' },
                                reviewBody:
                                'Best Movie',
                                reviewRating: { ratingValue: '5' },
                            },
                            }
                        ]}
                        /> }
            {loading && <InfoActionViewSkeletion />}
            {data && <InfoActionView
                config={config}
                data={data}
                show={showISettingView}
                fontSize={fontSize}
                setfontSize={setfontSize}
                lineHieght={lineHeight}
                setLineHieght={setLineHeight}
                bgColor={bgColor}
                setBgColor={setBgColor}
                colorSelect={colorSelect}
                setColorSelect={setColorSelect}
                fontFamilySelect={fontFamilySelect}
                setFontFamilySelect={setFontFamilySelect}
            />}
            <div id="read-view" className="mt-2 mx-1 flex flex-col items-center">
                { loading &&<ContenViewSkeletion/>}
                {config.typeManga!=C_Prefix_Type_Video_Ru && data && <iframe className="inline" src={data.source} height="500" width="100%" frameBorder={"0"} scrolling="no" allowFullScreen={true}></iframe>}
                {(config.typeManga==C_Prefix_Type_Video_Ru) && src && <video height="500" width="100%" controls><source src={src} type="video/mp4"/></video>
                }
            
            </div>
            {/*  {data && <InfoActionViewBt config={config}   data={data} />} */}
            {data && <RenderChapterList id={data.idDoc} config={config} mangaName={data?.nameDoc} idchapter={data.idDetail} isSeo={false} dataManga={null}  domain={domain}/>}
            <AdsDetail domain={domain}/>
            {data && <div id="manga-comments" className="w-full bg-slate-900/70 ">
                <h3 className="font-semibold text-white/80 first-letter:uppercase before:content-['_↗']">
                    {config?.configSetting?.lbl_inf_comment}
                </h3>
                <DisqusComments image={data?.manga?.image} type={config.typeManga} url={`${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}`} id={data.idDoc} title={data?.manga?.name} />
            </div>
            }
        </>
    );
};
export default InfoViewAnime;
