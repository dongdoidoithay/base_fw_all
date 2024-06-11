import React from "react";

import  InfoActionBlock  from "./InfoBlock";
import RenderChapterList from "./renderChapterList_bk";
import InfoHeaderBlock from "./InfoHeaderBlock";
import InfoOtherBlock from "./InfoOtherBlock";
import AdsDetail from "../../ads/ads_detail";
import { ArticleJsonLd, NextSeo } from "next-seo";



 const InfoManga = ({id,config,dataManga,domain,checkTrend}:any) => {
  //console.log(`InfoManga dataManga: `,dataManga)

  let name_author = "";
  let name_author_org = config?.configSetting?.lbl_domain_name??"no-auth";
  let des_full = "";
  let des_meta = ""; //250 ky tu
  let key_word = "";
  let title = "";
  let url = "";
  let chapter_name_view = dataManga?.idDetailEnd;
  let genres=dataManga?.lsgenres?.map(x => x.name).join(' - ');
  //console.log(genres);
  if (dataManga && dataManga) 
  {
    url = `${config.configPrefix.pageManga}/${config.configPrefix.startManga}${dataManga.idDoc}${config.configPrefix.endManga}`;
    if (dataManga.listAuthors && dataManga.listAuthors.length > 0) {
      name_author = `(by ${dataManga.listAuthors[0].name})`;
      name_author_org = dataManga.listAuthors[0].name;
    }
    if (dataManga.desc != null && dataManga.desc != "") {
      des_full = dataManga.desc
        .replace(/"/gi, "")
        .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
        .replace(/{chapter}/g, config?.configSetting?.lbl_text_chapter+' '+ chapter_name_view)
        .replace(/{genres}/g,genres) +' '+config?.configSetting?.lbl_domain_name
        ;
      des_meta = dataManga.desc.replace(/"/gi, "").substring(0, 250) + "..." +config?.configSetting?.lbl_domain_name;
    } else {
      des_full = config?.configSetting?.desc_info_manga
        .replace(/{name}/gi, dataManga.name)
        .replace(/{nameOther}/g, dataManga.nameOther==''?genres:dataManga.nameOther)
        .replace(/{auth}/g, name_author)
        .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
        .replace(/{chapter}/g, config?.configSetting?.lbl_text_chapter+' '+ chapter_name_view)
        .replace(/{genres}/g,genres);
      des_meta = des_full;
    }

    key_word =
      config?.configSetting?.keyword_info_manga
        .replace(/{name}/gi, dataManga.name)
        .replace(/{nameOther}/g, dataManga.nameOther==''?genres:dataManga.nameOther)
        .replace(/{auth}/g, name_author)
        .replace(/{domain}/g, config?.configSetting?.lbl_domain_name)
        .replace(/{chapter}/g, config?.configSetting?.lbl_text_chapter+' '+ chapter_name_view)
        .replace(/{genres}/g,genres);
    //console.log(config?.configSetting?.info_name_manga_title);
    title = config?.configSetting?.info_name_manga_title
      .replace(/{name}/gi, dataManga.name)
      .replace(/{nameOther}/g, dataManga.nameOther==''?genres:dataManga.nameOther)
      .replace(/{auth}/gi, name_author)
      .replace(/{domain}/gi, config?.configSetting?.lbl_domain_name)
      .replace(/{chapter}/gi,config?.configSetting?.lbl_text_chapter+' '+ chapter_name_view)
      .replace(/{genres}/gi,genres);
  }


  

  return (
    <>
    <NextSeo
      title={title}
      description={des_meta}
      canonical={url}

      openGraph={{
        title: title,
        description: des_full,
        url: url,
        type: 'article',
        article: {
          publishedTime: new Date().toISOString(),
          modifiedTime: new Date().toISOString(),
          expirationTime: new Date().toISOString(),
          section: "News",
          authors: [
             dataManga &&dataManga.listAuthors && dataManga.listAuthors.map((auth: any) => {
              return (
                `${config.configPrefix.pageAuth}/${config.configPrefix.startAuth}${auth.id}${config.configPrefix.endAuth}`
              )
            }
            )
          ],
          tags: [
            key_word
          ],
        },
        images: [
          {
            url: dataManga.image,
            alt: dataManga.name,
          },
        ],
      }
      }

      additionalMetaTags={[{
        property: 'keywords',
        content: key_word
      }]}
      additionalLinkTags={[{
        rel: "alternate",
        href: `/api${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${dataManga.idDoc}${config.configPrefix.endManga}/feed`,
        type: "application/rss+xml"
      },
      {
        rel: "alternate",
        href: `/api${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${dataManga.idDoc}${config.configPrefix.endManga}/rss.xml`,
        type: "application/rss+xml"
      }
      ]}
    />

    <ArticleJsonLd
      url={url}
      title={title}
      images={[dataManga.image,]}
      datePublished={new Date().toISOString()}
      dateModified={new Date().toISOString()}
      authorName={[name_author_org]}
      publisherName={config?.configSetting?.lbl_domain_name}
      publisherLogo={dataManga.image}
      description={des_full}
    />
     
     <InfoHeaderBlock config={config} dataManga={dataManga}/>
     <InfoActionBlock id={id}  des_full={des_full} config={config} dataManga={dataManga} checkTrend={checkTrend}/>
     <RenderChapterList id={id} config={config} mangaName={dataManga.name}  dataManga={dataManga} isSeo={true} domain={domain}/>
     <AdsDetail domain={domain}/>
     <InfoOtherBlock id={id}  key_word={key_word} config={config} dataManga={dataManga}/>
    </>
  );
};
export default InfoManga;
