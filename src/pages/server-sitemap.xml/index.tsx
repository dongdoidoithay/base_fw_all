import { getServerSideSitemapLegacy } from 'next-sitemap'
///import { GetServerSideProps } from 'next'
import { GetServerSideProps } from 'next';
import { CallApiWithRetry } from '@/constants/FetchApi';
import { configBase } from '@/constants/constants';
const FetchData = async (config: any) => {
  return await CallApiWithRetry(config.apiPath + config.endPointPath.sitemapDoc + 200,9);
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const _domain=ctx.req.headers.host;
    // console.log("_domain",_domain);
     let domain='_';
     let config_base= configBase["_"];
     if(!_domain.includes('localhost')){
       domain=domain+_domain.replace('www.','').replace('-','').replace('.','');
       config_base= configBase[domain];
     }
     //let config = config_base?.SelectMangaTypeByPage("");

    let xmlresult: any = [];
    for (const item of config_base?.ActMangaSource) {
       let config = config_base?.SelectMangaTypeByPage(item.value);
        let _data = await FetchData(config);
        //console.log("server-sitemap", _data);
        if (_data != null && _data.length > 0) {
            let fields = _data.map((item: any) => ({
                loc: `${config.configPrefix.url_host}${config.configPrefix.pageManga}/${config.configPrefix.startManga}${item.idDoc}${config.configPrefix.endManga}`,
                lastmod: new Date().toISOString(),
                changefreq: 'always',
                priority: 1
            }));
            // const fields = [...newsSitemaps];
            //xmlresult=xmlresult.concat(fields);
            xmlresult = [...fields];
        }
    }
    //console.log("server-sitemap", xmlresult.length);
    return getServerSideSitemapLegacy(ctx, xmlresult);
 
}

// Default export to prevent next.js errors
export default () => { }