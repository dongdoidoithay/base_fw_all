import { configSettingBase } from "@/constants/constants";
import Script from "next/script";
import React from "react";

function ReportWebVitals({ domain }) {
  const settingbase = configSettingBase[domain];
 /*  let beacon = "";
  if (settingbase?.cloudflare_token) {
    const beaconConfig = {
      token: settingbase?.cloudflare_token,
    };
    beacon = JSON.stringify(beaconConfig);
  } */
  ////console.log(settingbase);
  //console.log(`_analytic ${settingbase.analytics_key}`);
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${settingbase?.analytics_key}`}
      ></Script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() 
            {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${settingbase?.analytics_key}');
            }); `,
        }}
      />
    {/*   {settingbase?.cloudflare_token && 
        <script defer  src={`https://static.cloudflareinsights.com/beacon.min.js?token=${settingbase?.cloudflare_token}&spa=false`}></script>
      } */}
    </>
  );
}

export default React.memo(ReportWebVitals);
