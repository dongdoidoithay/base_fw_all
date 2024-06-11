import React, { useState } from "react";

import StoreLocalView from "./storeLocalView";
import ContenView from "./contenView";
import InfoActionView from "./infoActionView";
import RenderChapterList from "../mangaInfo/renderChapterList_bk";
import ContenViewSkeletion from "./contenViewSkeletion";
import DisqusComments from "../mangaInfo/disquscomment";
import InfoActionViewBt from "./infoActionViewBt";
import AdsDetail from "@/ads/ads_detail";
import { ArticleJsonLd, NextSeo } from "next-seo";


const InfoViewNovels = ({ config, data ,loading,domain}) => {
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
    let url='';
    let imageurl='';
    if (data != null) {

       key_word = config?.configSetting?.keyword_view_name_chapter.replace(/{name}/gi, data.nameDoc).replace(/{nameOther}/g, data.manga?.nameOther).replace(/{auth}/g, name_author).replace(/{domain}/g, config?.configSetting?.lbl_domain_name).replace(/{chapter}/g, data.idDetail);
       title = config?.configSetting?.view_name_chapter_title.replace(/{name}/gi,  data.nameDoc).replace(/{nameOther}/g, data.manga?.nameOther).replace(/{auth}/g, name_author).replace(/{domain}/g, config?.configSetting?.lbl_domain_name).replace(/{chapter}/g, data.idDetail);
       des_meta = config?.configSetting?.desc_view_name_chapter.replace(/{name}/gi,  data.nameDoc).replace(/{nameOther}/g, data.manga?.nameOther).replace(/{auth}/g, name_author).replace(/{domain}/g, config?.configSetting?.lbl_domain_name).replace(/{chapter}/g, data.idDetail);
       url=`${config.configPrefix.pageManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}/${config.configPrefix.startViewmanga}${data.idDetail}${config.configPrefix.endViewmanga}`;
       imageurl=data?.manga?.image;
    } 

    //console.log("data view",{data,listImg});
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
              {data && <ArticleJsonLd
                    title={title}
                    images={[data?.manga?.image]}
                    datePublished={new Date().toISOString()}
                    authorName={config?.configSetting?.lbl_domain_name} 
                    url={url} 
                    description={data?.source}     
                 />  }
           {/*  { loading &&<InfoActionViewSkeletion/>} */}
            {<InfoActionView  
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
            <div  id="read-view" className="mt-2 mx-1 flex flex-col items-center">
            { loading &&<ContenViewSkeletion/>}
            {data && <ContenView data={data} fontSize={fontSize} lineHeight={lineHeight} bgColor={bgColor} colorSelect={colorSelect}  fontFamilySelect={fontFamilySelect} config={config} domain={domain}/>}
            </div>
            {data && <InfoActionViewBt config={config}   data={data} />}
           
            {data && <RenderChapterList id={data.idDoc} config={config} mangaName={data?.nameDoc} idchapter={data.idDetail} isSeo={false} dataManga={null} domain={domain}/>}
            <AdsDetail domain={domain}/>
            {data &&<div id="manga-comments" className="w-full bg-slate-900/70 ">
            <h3 className="font-semibold text-white/80 first-letter:uppercase before:content-['_↗']">
                {config?.configSetting?.lbl_inf_comment}
            </h3>
                <DisqusComments image={data.manga?.image} type={config.typeManga} url={`${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}`} id={data.idDoc} title={data?.manga?.name} domain={domain}/>
            </div>
            } 
        </>
    );
};
export default InfoViewNovels;
