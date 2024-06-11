import { FetchApi } from "@/constants/FetchApi";
import { configBase } from "@/constants/constants";
//import feed from './feed.json';
const FetchData = async (config: any) => {
  return await FetchApi(config.apiPath + config.endPointPath.sitemapDoc + 20);
};

const urllist= async (req:any, res:any) => {
  const _domain=req.headers.host;
  // console.log("_domain",_domain);
   let domain='_';
   let config_base= configBase["_"];
   if(!_domain.includes('localhost')){
     domain=domain+_domain.replace('www.','').replace('-','').replace('.','');
     config_base= configBase[domain];
   }
   let config = config_base?.SelectMangaTypeByPage("");
   let xmlresult:any = [];
   for (const item of config_base?.ActMangaSource) {
    config = config_base?.SelectMangaTypeByPage(item.value);
    let _data = await FetchData(config);
    //console.log("server-sitemap", _data);
    let fields = _data.map((item: any) => {
      const url = `${config.configPrefix.url_host}${config.configPrefix.pageManga}/${config.configPrefix.startManga}${item.idDoc}${config.configPrefix.endManga}`;
      return `${url}\n`;
    });

    xmlresult = xmlresult.concat(fields);
  }
  const sitemap = `${xmlresult.join('')}`;
 res.setHeader("Content-Type", "text/plain");

 return res.status(200).send(sitemap);
}



export default urllist;




