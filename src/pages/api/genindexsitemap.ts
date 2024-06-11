
import { configBase } from '@/constants/constants';
import { promises as fs } from 'fs'
import path from 'path'

export default async (req:any, res:any) => {
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

    const filenames = await fs.readdir(publicDirectory)
    //console.log("filenames =>", filenames.join(";"))

    var targetFiles = filenames.filter(function (file) {
        return path.extname(file).toLowerCase() === ".xml";
    });
   

    var targetFiles = filenames.filter(function (file) {
        return path.extname(file).toLowerCase() === ".xml";
    });

    let data_robot = targetFiles.map((page) => {
        return `Sitemap: ${config.configPrefix.url_host}/${domain}/` + page
    });
    //console.log(data_robot)

    let str_item = `User-agent: *\n
Allow: /\n
Sitemap: ${config.configPrefix.url_host}/api/server-sitemap.xml\n\n`

    await fs.unlink(publicDirectory + "/robots.txt")
    await fs.writeFile(
        publicDirectory + "/robots.txt",
        str_item + data_robot.join('\n')
    )

    genIndexSite(config,domain);
    res.status(200).json({ name: '==>done gensitemap index' })
}



async function genIndexSite(config:any,domain:any) {
    let xmlString='';
    
    const publicDirectory = path.join(process.cwd(), 'public/'+domain)
    const filenames = await fs.readdir(publicDirectory)
   
    var targetFiles = filenames.filter(function (file) {
        return path.extname(file).toLowerCase() === ".xml";
    });

    targetFiles.map((page) => {
        xmlString+= `<sitemap><loc>${config.configPrefix.url_host}/${domain}/${page}</loc></sitemap>`
    });

    //console.log(xmlString);
    // Write the file to disk
    await fs.writeFile(
        publicDirectory + "/sitemap-index.xml",
        `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
        + xmlString +`</sitemapindex>`
    )
}