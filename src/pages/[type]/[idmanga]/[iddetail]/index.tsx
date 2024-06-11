import AdsTop from "@/ads/ads_top_body";
import { GlobalNavView } from "@/ui/global-nav-view";
import RenderSwitch from "@/components/renderSwitch";
import { CallApiWithRetry } from "@/constants/FetchApi";
import { GetServerSideProps } from "next";
import { C_Prefix_Type_Indo, C_Prefix_Type_Italy, C_Prefix_Type_Manga_Br, baseSeo, configBase, configPrefixBase } from "@/constants/constants";
import NoDataFound from "@/components/noDataFound";
import Head from "next/head";
import { useEffect, useState } from "react";
import getSource from "@/utils/crawlbase";
const CryptoJS = require("crypto-js");

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  try {
    const _domain = context.req.headers.host;
    // console.log("_domain",_domain);
    let domain ="_";
    let config_base = configBase[domain];
    if (!_domain.includes("localhost")) {
      domain =
        domain + _domain.replace("www.", "").replace("-", "").replace(".", "");
      config_base = configBase[domain];
    }

    const config = config_base?.SelectMangaTypeByPage(context.params.type);
    const nameType = config_base?.SelectMangaTypeName(context.params.type);

    const idmanga = context.params.idmanga;
    const iddetail = context.params.iddetail;
    let _idmanga = "";
    let _iddetail = "";
    if (idmanga != undefined) {
      _idmanga = idmanga
        .toString()
        .replace(config.configPrefix.startManga, "")
        .replace(config.configPrefix.endManga, "");
    }
    if (iddetail != undefined) {
      _iddetail = iddetail
        .toString()
        .replace(config.configPrefix.startViewmanga, "")
        .replace(config.configPrefix.endViewmanga, "");
    }
    let _dataManga;
    await Promise.all([
      CallApiWithRetry(
        config.apiPath +
        config.endPointPath.viewmanga +
        encodeURIComponent(_idmanga) +
        "/" +
        encodeURIComponent(_iddetail),
        9
      ),
    ]).then((result) => {

      _dataManga = result[0];
      //console.log(`_dataManga:`,_dataManga);
      if (_dataManga.err && _dataManga.err == "no data found") {
        _dataManga = null;
      }
    });

if(_dataManga!=null && _dataManga.lang=="br"){
  //console.log("xxx",_dataManga);
  //call get image inserver
  let x= await getSource(_dataManga);
  _dataManga.source=x;
 // console.log("cccc",x); 
}

    let originalData = {
      dataManga: _dataManga,
      type: context.params.type,
      idmanga: _idmanga,
      iddetail: _iddetail,
      config: config,
      domain: domain,
      nameType: nameType,
    };
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(originalData), "ABC@123#245").toString();

    return {
      props: {
        data: ciphertext
      }
    };
  } catch (ex) {

    let originalData = {
      dataManga: null,
      type: null,
      idmanga: null,
      iddetail: null,
      config: null,
      domain: "_",
      nameType: null,
    }
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(originalData), "ABC@123#245").toString();

    return {
      props: {
        data: ciphertext
      }
    };
    //console.log(`Detail Manga ${context.req.url} :`, ex);
    /* return {
      props: {
        dataManga:  null,
        type: null,
        idmanga: null,
        iddetail: null,
        config: null,
        domain: "_",
        nameType: null,
      }
    } */
  }
};

export default function DetaiView({data}: any) {
  //console.log(data);
  const[referrerview,setReferrerview]=useState(false);
  useEffect(()=>{
    if(config?.typeManga==C_Prefix_Type_Indo || config?.typeManga==C_Prefix_Type_Italy || config?.typeManga==C_Prefix_Type_Manga_Br){
      setReferrerview(true);
    }
  },[referrerview])
  let bytes = CryptoJS.AES.decrypt(data, "ABC@123#245");
  let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //console.log('data end',decryptedData);
  const { dataManga,
    type,
    idmanga,
    iddetail,
    config,
    domain,
    nameType } = decryptedData;
  
 if (dataManga == null /* || domain == "_" */) {
    return (<NoDataFound domain={domain} />)
  }
  //console.log("DetaiView domain::",domain);
  let config_baseSeo = baseSeo[domain]?.default;
  let config_prefix_baseSeo= configPrefixBase[domain];

  let _lang=config_baseSeo?.locale;
 // console.log(config_baseSeo)
switch(type) {
    case config_prefix_baseSeo?._Prefix_Root_Scan:
    case config_prefix_baseSeo?._Prefix_Root_Novel:
    case config_prefix_baseSeo?._Prefix_Root_Anime:
    case config_prefix_baseSeo?._Prefix_Root_Raw:
    case config_prefix_baseSeo?._Prefix_Root_Adult:
    case config_prefix_baseSeo?._Prefix_Root_Dc:
      _lang='en-GB';
    case config_prefix_baseSeo?._Prefix_Root_Indo:
      _lang='id-ID';
    case config_prefix_baseSeo?._Prefix_Root_Italy:
      _lang='es-ES';
    case config_prefix_baseSeo?._Prefix_Root_Video_Ru:
    case config_prefix_baseSeo?._Prefix_Root_Manga_Ru:
    case config_prefix_baseSeo?._Prefix_Root_Adult_Ru:
      case config_prefix_baseSeo?._Prefix_Root_Yaoi_Ru:
        _lang='ru-RU';

    case config_prefix_baseSeo?._Prefix_Root_Manga_Br:
    case config_prefix_baseSeo?._Prefix_Root_Adult_Br:
        _lang='pt-BR';
  
  }
  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content={_lang} />
        <meta name="sitemap" content={`${config_prefix_baseSeo._hostwww}/${domain}/sitemap-index.xml`}></meta>
        <meta name="robots" content={`${config_prefix_baseSeo._hostwww}/${domain}/robots.txt`}></meta>
        {referrerview && <meta name="referrer" content="no-referrer" /> }
      </Head>
      <GlobalNavView domain={domain} />
      <main className="px-0 lg:px-2 bg-slate-900/60 border border-slate-700">
        <AdsTop domain={domain} />
        {dataManga && (
          <RenderSwitch
            type={type}
            config={config}
            iddetail={iddetail}
            idmanga={idmanga}
            data={dataManga}
            domain={domain}
            nameType={nameType}
          />
        )}
        <div id="manga suggets"></div>
      </main>
    </>
  );
}
