
import { FetchApi } from "@/constants/FetchApi";
import { configBase } from "@/constants/constants";
//import feed from './feed.json';

const FetchData = async (config: any) => {
  return await FetchApi(config.apiPath + config.endPointPath.sitemapDoc + 20);
};

export default async (req:any, res:any) => {
  try {
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
    //const _date=new Date().toISOString();
    for (const item of config_base?.ActMangaSource) {
      config = config_base?.SelectMangaTypeByPage(item.value);
      let _data = await FetchData(config);
      //console.log("server-sitemap", _data);
      let fields = _data.map((item: any) => {
        const url = `${config?.configPrefix?.url_host}${config?.configPrefix?.pageManga}/${config?.configPrefix?.startManga}${item.idDoc}${config?.configPrefix?.endManga}`;
        return `<url><loc>${url}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>always</changefreq><priority>1</priority></url>`;
      });
      xmlresult = xmlresult.concat(fields);
    }

    // Add urlSet to entire sitemap string

    const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      
      ${xmlresult.join("")}
      
      </urlset>`;

    // set response content header to xml
    res.setHeader("Content-Type", "text/xml; charset=utf-8");
    res.setHeader("Accept-Encoding", "*");
    return res.status(200).send(sitemap);
  } catch (e: unknown) {
    if (!(e instanceof Error)) {
      throw e;
    }

    return res.status(500).json({ error: e.message || "" });
  }
  
}



