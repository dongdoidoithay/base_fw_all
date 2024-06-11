import { baseSeo } from '@/constants/constants';
import Head from 'next/head';
import React from 'react';

//load data
const DefaultLayout = ({ children ,domain}: {

  children: React.ReactNode;
  domain:any
}) => {
    let config_baseSeo = baseSeo[domain]?.default;
    let _iconPath=`/favicon.ico`;
    if(config_baseSeo!=null &&  config_baseSeo!=undefined){
        _iconPath=config_baseSeo.Icon;
    }
    
    return (
        <>
        <Head>
        <link rel="shortcut icon" href={_iconPath} />
        <link rel="icon" href={_iconPath}  sizes="32x32" />
        <link rel="icon" href={_iconPath}  sizes="192x192" />
        <link rel="icon" href={`/icon-gif.gif`} type="image/gif" />
        <link rel="apple-touch-icon-precomposed" href={`/favicon.ico`}  />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1, shrink-to-fit=no, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      
        {/* publisher.mondiad.com */}
        <script async src="https://ss.mndsrv.com/banner.js"></script>
        <script async src="https://ss.mndsrv.com/native.js"></script>


        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="googlebot-news" content="snippet" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        
<script>window.yaContextCb=window.yaContextCb||[]</script>
<script src="https://yandex.ru/ads/system/context.js" async></script>
{/* pubfuture.com */}
<script async data-cfasync="false" src="https://cdn.pubfuture-ad.com/v2/unit/pt.js" type="text/javascript"></script>
        </Head>
       
            {children}
        </>
    )
};


export default DefaultLayout;