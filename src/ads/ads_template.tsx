import Script from "next/script"
import { AdsGalaksionButton, AdsGalaksionInterstitial, ConstAdsTemplate } from "./ads_constants";

const AdsTemplate=({domain})=>{
  let _keyii=AdsGalaksionInterstitial[domain];

    let _key=ConstAdsTemplate[domain];
    if((_keyii!=null && _keyii!=undefined ))
    {
      _key=_keyii;
     // _key=ConstAdsTemplate["_"];
    }else{
      if(_key==null || _key==undefined){
        _key=ConstAdsTemplate["_"];
      }
    }
    let _keybtt=AdsGalaksionButton[domain];
    if(_keybtt==null || _keybtt==undefined){
      _keybtt=AdsGalaksionButton["_"];
    }
    return(<>
         {/* propellerads Talented tag */}
        <Script strategy="afterInteractive" async data-cfasync="false" src={_key}  />
        <Script strategy="afterInteractive" async data-cfasync="false" src={_keybtt}  />
        </>)
    
    }
    export default AdsTemplate