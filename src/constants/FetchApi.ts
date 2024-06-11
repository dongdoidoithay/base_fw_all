import { configBase } from "@/constants/constants";
import axios from "axios";

var md5=require("md5");


export function CallApiWithRetry(path:string, maxRetryAttempts:number) {
  
  //const test=md5("123");
  //console.log(test);
  //let _path=path.replace('https://api.unionmanga.xyz/api','http://localhost:4002/api');
  let _path=path;
  let config_base= configBase["_"];
  let config = config_base?.SelectMangaTypeByPage('');
  const _slat="8e0550790c94d6abc71d738959a88d209690dc86";
  const _domain=config.configSetting.lbl_domain_Page;
  const _date=new Date().toUTCString();
  const _hashgen=md5(_slat+_domain+_date);
  const _path_sec=_path.replace('https://api.unionmanga.xyz','').replace('http://localhost:4002','');
  const _hashPath=md5(_slat+_domain+_date+_path_sec);
 /*  console.log(_path); */
  if(config==undefined)
    return null;
 /*  console.log("xh",{
    _domain: _domain,
    _date:_date,
    _tranId:_hashPath,
    _hash:_hashgen,
    _path:_path_sec,
    "Access-Control-Allow-Origin": '*',
    'Cache-Control':'public, max-age=600'
  }); */
  let retryAttempts = 0;
  function doApiCall():any {
    return fetch(_path, {
      headers: {
        _domain: _domain,
        _date:_date,
        _tranId:_hashPath,
        _hash:_hashgen,
        _path:_path_sec,
        "Access-Control-Allow-Origin": '*',
        'Cache-Control':'public, max-age=600'
      },
     /*  cache:'no-store', */
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
      
        //console.log(error);
        if(error.toString().includes('Unexpected token')){
          return {
            err:'no data found'
          };
        }
        if (retryAttempts < maxRetryAttempts) {
          retryAttempts++;
          console.log(`Retrying API call to ${_path}... (Attempt ${retryAttempts})`);
          setTimeout(()=>doApiCall(),900);
          //return doApiCall();
        } else {
          return null;
        }
      });
  }

  return doApiCall();
}
export const FetchGroupData = async (config: any, typeApi: string, idFind: string, page: any) => {
  //  console.log("FetchData",{typeApi,idFind,page});
  if(config==undefined)
    return null;

  let _fixid = '';
  if (idFind != '' && idFind != null && idFind != undefined && page != undefined && page != null) {
    switch(typeApi) 
    {
      case "genres":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startGenre, '').replace(config.configPrefix.endGenre, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await CallApiWithRetry(config.apiPath + config.endPointPath.mangaGenres + _fixid + '/' + page,9);
        }
      break;
      case "year":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startYear, '').replace(config.configPrefix.endYear, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await CallApiWithRetry(config.apiPath + config.endPointPath.mangaYear + _fixid + '/' + page,9);
        }
      break;
      case "status":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startStatus, '').replace(config.configPrefix.endStatus, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await CallApiWithRetry(config.apiPath + config.endPointPath.mangaStatus + _fixid + '/' + page,9);
        }
      break;
      case "auth":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startAuth, '').replace(config.configPrefix.endAuth, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await CallApiWithRetry(config.apiPath + config.endPointPath.mangaAuth + _fixid + '/' + page,9);
        }
      break;
      case "art":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startArt, '').replace(config.configPrefix.endArt, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await CallApiWithRetry(config.apiPath + config.endPointPath.mangaArt + _fixid + '/' + page,9);
        }
      break;
      case "type":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startType, '').replace(config.configPrefix.endType, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await CallApiWithRetry(config.apiPath + config.endPointPath.mangaType + _fixid + '/' + page,9);
        }
      break;
      case "alpha":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startAlphaBet, '').replace(config.configPrefix.endAlphaBet, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await CallApiWithRetry(config.apiPath + config.endPointPath.mangaAlpha + _fixid + '/' + page,9);
        }
      break;

      default:
        return null;
    }
  }
  else
    return null;
}
export const FetchGroupDataClient = async (config: any, typeApi: string, idFind: string, page: any) => {
  //  console.log("FetchData",{typeApi,idFind,page});
  if(config==undefined)
    return null;

  let _fixid = '';
  if (idFind != '' && idFind != null && idFind != undefined && page != undefined && page != null) {
    switch(typeApi) 
    {
      case "genres":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startGenre, '').replace(config.configPrefix.endGenre, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await FetchApi(config.apiPath + config.endPointPath.mangaGenres + _fixid + '/' + page);
        }
      break;
      case "year":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startYear, '').replace(config.configPrefix.endYear, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await FetchApi(config.apiPath + config.endPointPath.mangaYear + _fixid + '/' + page);
        }
      break;
      case "status":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startStatus, '').replace(config.configPrefix.endStatus, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await FetchApi(config.apiPath + config.endPointPath.mangaStatus + _fixid + '/' + page);
        }
      break;
      case "auth":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startAuth, '').replace(config.configPrefix.endAuth, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await FetchApi(config.apiPath + config.endPointPath.mangaAuth + _fixid + '/' + page);
        }
      break;
      case "art":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startArt, '').replace(config.configPrefix.endArt, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await FetchApi(config.apiPath + config.endPointPath.mangaArt + _fixid + '/' + page);
        }
      break;
      case "type":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startType, '').replace(config.configPrefix.endType, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await FetchApi(config.apiPath + config.endPointPath.mangaType + _fixid + '/' + page);
        }
      break;
      case "alpha":
        if (idFind != null && idFind.length > 0) {
          _fixid = idFind.replace(config.configPrefix.startAlphaBet, '').replace(config.configPrefix.endAlphaBet, '');
        }
        if (_fixid != '' && _fixid != null) {
          return await FetchApi(config.apiPath + config.endPointPath.mangaAlpha + _fixid + '/' + page);
        }
      break;

      default:
        return null;
    }
  }
  else
    return null;
}
export function FetchApi(path:string) 
{
  let _path=path;

  let config_base= configBase["_"];
  let config = config_base?.SelectMangaTypeByPage('');
  const _slat="8e0550790c94d6abc71d738959a88d209690dc86";
  const _domain=config.configSetting.lbl_domain_Page;
  const _date=new Date().toUTCString();
  const _hashgen=md5(_slat+_domain+_date);
  const _path_sec=_path.replace('https://api.unionmanga.xyz','').replace('http://localhost:4002','');
  const _hashPath=md5(_slat+_domain+_date+_path_sec);

  if(config==undefined)
    return null;

  let retryAttempts = 0;
  function doApiCall(): any {
    return fetch(path, {
      headers: {
        _domain: _domain,
        _date:_date,
        _tranId:_hashPath,
        _hash:_hashgen,
        _path:_path_sec,
        "Access-Control-Allow-Origin": '*',
        'Cache-Control':'public, max-age=600'
      },
     /*  cache:'no-store', */
    })
      .then((response) => {
       /*  if (!response.ok) {
          throw new Error("Request failed.");
        } */
        return response.json();
      })
      .catch((error) => {
        if(error.toString().includes('Unexpected token')){
          return {
            err:'no data found'
          };
        }
        if (retryAttempts < 9) {
          retryAttempts++;
          console.log(`Retrying API call to ${path}... (Attempt ${retryAttempts} : ${error})`);
          setTimeout(()=>doApiCall(),900);
          //return doApiCall();
        } else {
          return null;
          //throw new Error(`API call to ${path} failed after ${9} attempts.`);
        }
      });
  }

  return doApiCall();
}

export async function FetchPostApi(path:string,data:any) 
{
  let _path=path;

  let config_base= configBase["_"];
  let config = config_base?.SelectMangaTypeByPage('');
  const _slat="8e0550790c94d6abc71d738959a88d209690dc86";
  const _domain=config.configSetting.lbl_domain_Page;
  const _date=new Date().toUTCString();
  const _hashgen=md5(_slat+_domain+_date);
  const _path_sec=_path.replace('https://api.unionmanga.xyz','').replace('http://localhost:4002','');
  const _hashPath=md5(_slat+_domain+_date+_path_sec);

 

   /*  console.log("HASH",{_hashgen,_hashPath}) */
    let res = await fetch(path, {
      headers: {
        _domain: _domain,
        _date:_date,
        _tranId:_hashPath,
        _hash:_hashgen,
        _path:_path_sec,
        "Access-Control-Allow-Origin": '*',
        'Content-Type': 'application/json'
      /*  mode: 'no-cors' */
      },
      method: 'POST',
      body: data
    });
    if (res.ok) {
      return  res.json();
    }else{
      console.log("Call ex",res)
    }
    return  res.json();
}
export async function AxiosPostApi(path:string,data:any) 
{
  let _path=path;

  let config_base= configBase["_"];
  let config = config_base?.SelectMangaTypeByPage('');
  const _slat="8e0550790c94d6abc71d738959a88d209690dc86";
  const _domain=config.configSetting.lbl_domain_Page;
  const _date=new Date().toUTCString();
  const _hashgen=md5(_slat+_domain+_date);
  const _path_sec=_path.replace('https://api.unionmanga.xyz','').replace('http://localhost:4002','');
  const _hashPath=md5(_slat+_domain+_date+_path_sec);

 


      //TODO: - check HASH
      await axios.post(path, data,{headers: {
        _domain: _domain,
        _date:_date,
        _tranId:_hashPath,
        _hash:_hashgen,
        _path:_path_sec,
        "Access-Control-Allow-Origin": '*',
      /*  mode: 'no-cors' */
      }})
     .then(response => {
       //console.log("post cmd-->response",response);
       return response;
     }) 
    
    
}

export async function AuthApi(path:string,data:any) 
{
  let _path="https://api.unionmanga.xyz/api/v1/auth/"+path;

  let config_base= configBase["_"];
  let config = config_base?.SelectMangaTypeByPage('');
  const _slat="8e0550790c94d6abc71d738959a88d209690dc86";
  const _domain=config.configSetting.lbl_domain_Page;
  const _date=new Date().toUTCString();
  const _hashgen=md5(_slat+_domain+_date);
  const _path_sec=_path.replace('https://api.unionmanga.xyz','').replace('http://localhost:4002','');
  const _hashPath=md5(_slat+_domain+_date+_path_sec);

 
  //console.log("DataPost",data);
   /*  console.log("HASH",{_hashgen,_hashPath}) */
    let res = await fetch(_path, {
      headers: {
        _domain: _domain,
        _date:_date,
        _tranId:_hashPath,
        _hash:_hashgen,
        _path:_path_sec,
        "Access-Control-Allow-Origin": '*',
        'Content-Type': 'application/json'
      /*  mode: 'no-cors' */
      },
      method: 'POST',
      body: data
    });
    if (res.ok) {
      return  res.json();
    }else{
      console.log("Call ex",res)
    }
    return  res.json();
}