import AdsFooter from "@/ads/ads_footer";
import { FetchApi } from "@/constants/FetchApi";
import { configBase } from "@/constants/constants";

import { getStorage, setStorage } from "@/utils/localFx";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { useEffect, useState } from "react";


const FotterPage = ({domain}) => {
  let config_base= configBase[domain];
  let config = config_base?.SelectMangaTypeByPage('');
  //console.log(config);
  const[dataDomain,SetDataDomain]=useState(null);
  const[sid,SetSid]=useState(null);
  useEffect(() => {
    //console.log("FOOTER CALL");
    const _keydomain=domain + "-domain";
    let _domainData =getStorage(_keydomain);
    if (_domainData != "" &&  _domainData != null && _domainData != undefined) 
    {
      let _data=JSON.parse(_domainData);
      SetDataDomain(_data);

      const _keydomain_sid=domain + "-domain-sid";
      const _SID = getStorage(_keydomain_sid) as string;
      SetSid(_SID);

    }
    else
    {     
     
      fetchData();
    }
    async function fetchData() {
      FetchApi(config_base?.apiConfigPath + config.endPointPath.configGetAllDomain).then((_data)=>{
        if(_data.length>0)
        {
          const _infodomain=_data.filter((x:any)=>x.domain==config?.configSetting?.lbl_domain_Page);
          if(_infodomain && _infodomain.length>0){
              const _SID=_infodomain[0].histats_id;
              const _keydomain_sid=domain + "-domain-sid";
              setStorage( _keydomain_sid,_SID,7 * 24 * 60 * 60);
          }
          //map
          let  nyArr:any =[];
          if(_data.length>30)
          {
            var randomIndices = [];
            while (randomIndices.length <= 20) {
              randomIndices.push(Math.floor(Math.random() * _data.length));
            }
            nyArr =randomIndices.map(function(i) {
              return _data[i];
            });
            //setDataDomain(nyArr)
            //dataDomain=dataDomain.concat(nyArr);
            const _keydomain=domain + "-domain";
            const _dataDomain=JSON.stringify(nyArr);
            setStorage( _keydomain,_dataDomain,7 * 24 * 60 * 60);
            // window.location.reload();
          }
        }

      });    
    }
  }, []);
  //console.log("FOOTER CALL RENDER");
   return (
    <>
      <div className="w-full h-80 pl-0  lg:pl-56 mt-14 bottom-0 ">
        <div id="heder" className="h-7 rounded bg-slate-700/70 align-middle justify-center ">
          <ul className="flex flex-row gap-3 align-middle justify-center items-center">
            <li ><Link title="Site map " href={`/api/server-sitemap.xml`}>SiteMap</Link></li>
            <li ><Link title="Site map " href={`/api/sitemap.html`}>Google SiteMap</Link></li>
            <li ><Link title="Site map " href={`/api/urllist.txt`}>Bing SiteMap</Link></li>
          </ul>
        </div>
        <div id="box-inf" className="flex flex-col gap-3  bg-slate-900/70 border border-slate-700">
          <AdsFooter domain={domain}/>
          <div className="flex flex-row">
            <div id="box-left" className="w-1/5 flex flex-col gap-2 flex-1 items-center">
              <Link href="/" title={config?.configSetting?.lbl_Name_Page}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: config?.configSetting?.lbl_Name_Page,
                  }}
                  className="text-xl font-semibold first-line:uppercase first-letter:text-2xl first-letter:font-bold"
                ></div>
              </Link>
        
                 {sid&& sid!=''&& <Link href={`https://www.histats.com/viewstats/?SID=${sid}&f=2`} target="_blank" >
                        <div id="histatsC"><img  src={`https://s4is.histats.com/stats/i/${sid}.gif?${sid}&103`} alt={config?.configSetting?.lbl_Name_Page}/></div>
                    </Link>}
               
                 <Link href="https://www.dmca.com/Protection/Status.aspx?ID=e4da793f-4aab-437a-85bc-033cbafb0b7c" title="DMCA.com Protection Status" className="dmca-badge">
                    <img src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=e4da793f-4aab-437a-85bc-033cbafb0b7c" alt="DMCA.com Protection Status" />
                </Link> 
                <Script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js" async/> 
            </div>
            <div id="box-right" className="w-4/5">
                <div className="block py-1 text-sm justify-center">
                    <p className="text-center">Copyrights and trademarks for the manga, and other promotional materials are held by their respective owners and their use is allowed under the fair use clause of the Copyright Law. © 2019 {config?.configSetting?.lbl_domain_Page}</p>
                    <i className="text-xs text-center">If you have any problems with the image on our website, you can contact us via Gmail or Facebook, When requested, we will review and remove it immediately. Thanks for reading.My Gmail: mangavn1@gmail.com</i>
                </div>
                <div className="text-xs">
                    {dataDomain && dataDomain.map((item:any,index:number)=>{
                        return(
                            <Link className="hover:text-sky-500 dark:hover:text-sky-400 before:content-['↗_'] after:content-[',_']" key={item.domain+'-'+index} title={item.domain_name} href={`https://${item.domain}`}>{item.domain_name}</Link>
                        )
                    })}
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
 
};
export default  React.memo(FotterPage);