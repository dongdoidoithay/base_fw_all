import { FetchApi } from '@/constants/FetchApi';
import { configBase } from '@/constants/constants';
import { promises as fs } from 'fs'
import path from 'path'


const FetchData = async (config: any,skip:number) => {
    return await FetchApi(config.apiPath + config.endPointPath.sitemapAll + skip + '/' + 2000);
}
async function checkAndCreateFolder(path) {
    try {
      await fs.access(path);
    } catch {

      // Folder doesn't exist, create it
      await fs.mkdir(path);
    } 
  }
export default async (req:any, res:any) => 
{   
    const _domain=req.headers.host;
    // console.log("_domain",_domain);
     let domain='_';
     let config_base= configBase["_"];
     if(!_domain.includes('localhost')){
       domain=domain+_domain.replace('www.','').replace('-','').replace('.','');
       config_base= configBase[domain];
     }
     let config = config_base?.SelectMangaTypeByPage("");



    //console.log("root ==>", process.cwd())
    const publicDirectory = path.join(process.cwd(), 'public/'+domain)
    //console.log("pub", publicDirectory)
    await checkAndCreateFolder(publicDirectory);
    const filenames = await fs.readdir(publicDirectory)
    //console.log("filenames =>", filenames.join(";"))

    var targetFiles = filenames.filter(function (file) {
        return path.extname(file).toLowerCase() === ".xml";
    });
    //xoa All file sitemap.xml
    targetFiles.forEach(item => {
         //console.log("delete==>", publicDirectory + "/" + item)
       fs.unlink(publicDirectory + "/" + item)
    });


   
    let index = 1;
    for (const item of config_base?.ActMangaSource) {
        config = config_base?.SelectMangaTypeByPage(item.value);

      let loop = true;
      let skip = 0;
      while (loop) {
        const data = await FetchData(config,skip);
       // console.log(list_manga);
        if (data.length <= 0)
            {loop = false; break;}
        gendocfile(publicDirectory, data, index,config.configPrefix);
        skip = skip + 1;
        index++;
       
    }
}
   
    genIndexSite(config,domain);
    
    
    res.status(200).json({ name: '==>done ' })
}


async function gendocfile(path:any, data:any, index:any,configPrefix:any) {
    const xml = require('xml')
    const _date=new Date().toISOString();
    const xmlObject = {
        urlset: [
            {
                _attr: {
                    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9"
                },
            },
            ...data.map((page:any) => {
                return {
                    url: [
                        { loc: `${configPrefix.url_host}${configPrefix.pageManga}/${configPrefix.startManga}${page.idDoc}${configPrefix.endManga}` },
                        { lastmod: _date },
                        { changefreq: 'hourly' },
                        { priority: 0.9 }
                    ]
                }
            })
        ]
    }
    // Generate the XML markup
    const xmlString = xml(xmlObject)
    // Write the file to disk
    await fs.writeFile(
        path + "/sitemap-index" + index + ".xml",
        `<?xml version="1.0" encoding="UTF-8"?>` + xmlString
    )
}

async function gendetailfile(path:any, data:any, index:any,configPrefix:any) {
    const xml = require('xml')
    const _date=new Date().toISOString();
    const xmlObject = {
        urlset: [
            {
                _attr: {
                    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9"
                },
            },
            ...data.map((page:any) => {
                return {
                    url: [
                        { loc: `${configPrefix.url_host}${configPrefix.pageManga}/${configPrefix.startManga}${page.idDoc}/${configPrefix.startViewmanga}${page.idDetail}${configPrefix.endViewmanga}` },
                        { lastmod: _date },
                        { changefreq: 'hourly' },
                        { priority: 0.8 }
                    ]
                }
            })
        ]
    }
    // Generate the XML markup
    const xmlString = xml(xmlObject)
    // Write the file to disk
    await fs.writeFile(
        path + "/sitemap-index" + index + ".xml",
        `<?xml version="1.0" encoding="UTF-8"?>` + xmlString
    )
}


async function gengenresfile(path:any, data:any, index:any,configPrefix:any) {
    const xml = require('xml')
    const _date=new Date().toISOString();
    const xmlObject = {
        urlset: [
            {
                _attr: {
                    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9"
                },
            },
            ...data.map((page:any) => {
            return {
                url: [
                    { loc: `${configPrefix.url_host}${configPrefix.pageGenre}/${configPrefix.startGenre}${page.id}${configPrefix.endGenre}` },
                    { lastmod:_date },
                    { changefreq: 'hourly' },
                    { priority: 0.8 }
                ]
            }
        })
    ]
}
    // Generate the XML markup
    const xmlString = xml(xmlObject)
    // Write the file to disk
    await fs.writeFile(
        path + "/sitemap-index" + index + ".xml",
        `<?xml version="1.0" encoding="UTF-8"?>` + xmlString
    )
}


async function genauthofile(path:any, data:any, index:any,configPrefix:any) {
    const xml = require('xml')
    const _date=new Date().toISOString();
    const xmlObject =  {
        urlset: [
            {
                _attr: {
                    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9"
                },
            },
            ...data.map((page:any) => {
            return {
                url: [
                    { loc: `${configPrefix.url_host}${configPrefix.pageAuth}/${configPrefix.startAuth}${page.id}${configPrefix.endAuth}` },
                    { lastmod: _date },
                    { changefreq: 'hourly' },
                    { priority: 0.8 }
                ]
            }
        })
    ]
}
    // Generate the XML markup
    const xmlString = xml(xmlObject)
    // Write the file to disk
    await fs.writeFile(
        path + "/sitemap-index" + index + ".xml",
        `<?xml version="1.0" encoding="UTF-8"?>` + xmlString
    )
}
async function genartfile(path:any, data:any, index:any,configPrefix:any) {
    const xml = require('xml')
    const _date=new Date().toISOString();
    const xmlObject =  {
        urlset: [
            {
                _attr: {
                    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9"
                },
            },
            ...data.map((page:any) => {
            return {
                url: [
                    { loc: `${configPrefix.url_host}${configPrefix.pageArt}/${configPrefix.startArt}${page.id}${configPrefix.endArt}` },
                    { lastmod: _date},
                    { changefreq: 'hourly' },
                    { priority: 0.8 }
                ]
            }
        })
    ]
}
    // Generate the XML markup
    const xmlString = xml(xmlObject)
    // Write the file to disk
    await fs.writeFile(
        path + "/sitemap-index" + index + ".xml",
        `<?xml version="1.0" encoding="UTF-8"?>` + xmlString
    )
}
async function genscanfile(path:any, data:any, index:any,configPrefix:any) {
    const xml = require('xml')
    const _date=new Date().toISOString();
    const xmlObject =  {
        urlset: [
            {
                _attr: {
                    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9"
                },
            },
            ...data.map((page:any) => {
            return {
                url: [
                    { loc: `${configPrefix.url_host}${configPrefix.pageScan}/${configPrefix.startScan}${page.id}${configPrefix.endScan}` },
                    { lastmod: _date },
                    { changefreq: 'hourly' },
                    { priority: 0.8 }
                ]
            }
        })
    ]
}
    // Generate the XML markup
    const xmlString = xml(xmlObject)
    // Write the file to disk
    await fs.writeFile(
        path + "/sitemap-index" + index + ".xml",
        `<?xml version="1.0" encoding="UTF-8"?>` + xmlString
    )
}
async function gentypefile(path:any, data:any, index:any,configPrefix:any) {
    const xml = require('xml')
    const _date=new Date().toISOString();
    const xmlObject =  {
        urlset: [
            {
                _attr: {
                    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9"
                },
            },
            ...data.map((page:any) => {
            return {
                url: [
                    { loc: `${configPrefix.url_host}${configPrefix.pageType}/${configPrefix.startType}${page.id}${configPrefix.endType}` },
                    { lastmod: _date },
                    { changefreq: 'hourly' },
                    { priority: 0.8 }
                ]
            }
        })
    ]
}
    // Generate the XML markup
    const xmlString = xml(xmlObject)
    // Write the file to disk
    await fs.writeFile(
        path + "/sitemap-index" + index + ".xml",
        `<?xml version="1.0" encoding="UTF-8"?>` + xmlString
    )
}
async function genyearfile(path:any, data:any, index:any,configPrefix:any) {
    const xml = require('xml')
    const _date=new Date().toISOString();
    const xmlObject =  {
        urlset: [
            {
                _attr: {
                    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9"
                },
            },
            ...data.map((page:any) => {
            return {
                url: [
                    { loc: `${configPrefix.url_host}${configPrefix.pageYear}/${configPrefix.startYear}${page.id}${configPrefix.endYear}` },
                    { lastmod: _date },
                    { changefreq: 'hourly' },
                    { priority: 0.8 }
                ]
            }
        })
    ]
}
    // Generate the XML markup
    const xmlString = xml(xmlObject)
    // Write the file to disk
    await fs.writeFile(
        path + "/sitemap-index" + index + ".xml",
        `<?xml version="1.0" encoding="UTF-8"?>` + xmlString
    )
}

async function genIndexSite(config:any,domain:any) {
    let xmlString='';
    
    const publicDirectory = path.join(process.cwd(), 'public/'+domain)
    const filenames = await fs.readdir(publicDirectory)
   
    var targetFiles = filenames.filter(function (file) {
        return path.extname(file).toLowerCase() === ".xml";
    });

    targetFiles.map((page:any) => {
        xmlString+= `<sitemap><loc>${config.configPrefix.url_host}/${domain}/${page}</loc></sitemap>`
    });


    let data_robot = targetFiles.map((page:any) => {
        return `Sitemap: ${config.configPrefix.url_host}/${domain}/` + page
    });
   
    let str_item = `User-agent: *\nAllow: /\n`;
   
    str_item+=`Sitemap: ${config.configPrefix.url_host}/api/server-sitemap.xml \n`;
    str_item+=`Sitemap: ${config.configPrefix.url_host}/${domain}/sitemap-index.xml \n`;
    try{
    await fs.unlink(publicDirectory + "/robots.txt")
    }catch(e){
        //console.log(e);
    }
    await fs.writeFile(
        publicDirectory + "/robots.txt",
        str_item + data_robot.join('\n')
    )


    //console.log(xmlString);
    // Write the file to disk
    await fs.writeFile(
        publicDirectory + "/sitemap-index.xml",
        `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
        + xmlString +`</sitemapindex>`
    )
}