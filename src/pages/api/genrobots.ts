/* eslint-disable import/no-anonymous-default-export */

import { configBase } from '@/constants/constants';
import { promises as fs } from 'fs'
import path from 'path'

export default async (req:any, res:any) => {

    //console.log("root ==>", process.cwd())
    const publicDirectory = path.join(process.cwd(), 'public/')
    const dir = path.join(process.cwd(), 'src/asset/')
    //console.log("pub", publicDirectory)
    const folders = await fs.readdir(dir, {withFileTypes: true});
    let str_item = `User-agent: *\nAllow: /\nDisallow: /_next/\nDisallow: /.next/\n`
    for (let folder of folders) {
      if (folder.isDirectory()) {
        if(folder.name.includes(".")){
            str_item+=`Sitemap: https://${folder.name}/_${folder.name.replace("-",'').replace(".",'').replace("_",'')}/sitemap-index.xml\nSitemap: https://${folder.name}/api/server-sitemap.xml\n`
        }
       
      }
    }

    //console.log(data_robot)

    await fs.unlink(publicDirectory + "/robots.txt")
    await fs.writeFile(
        publicDirectory + "/robots.txt",
        str_item
    )

    res.status(200).json({ name: '==>done robots index' })
}





