import Script from "next/script"
import { AdsGalaksionButton, AdsWiPopCash, ConstAdsTemplate } from "./ads_constants";
import { useEffect, useState } from "react";

const AdsPopCash=({domain})=>{
  const[key,setkey]=useState(null);

  useEffect(() => {
    

    let _key=AdsWiPopCash[domain];
    if((_key!=null && _key!=undefined ))
    {
      setkey(_key);
      let popTag = document.createElement('script');
      popTag.src='//cdn.popcash.net/show.js';
      document.body.appendChild(popTag);

      popTag.onerror = function() {
       popTag = document.createElement('script');
       popTag.src='//cdn2.popcash.net/show.js';
       document.body.appendChild(popTag)
    };
    }
   console.log("poop:",key);

  }, [domain]); // Chỉ chạy 1 lần khi component mount
  console.log("pick poop:",key);
    return(<>
   {key && <Script id="show-popcash">
      {`
        var uid = '198238'
        var wid = '${key}';
        var pop_fback = 'up';
      `}
    </Script>
    }
    </>);
    
    }
    export default AdsPopCash