import { AdsMondiadBaner, ConstAdsTopBody } from "./ads_constants";

const AdsTop = ({domain}) => {
  let _keymon=AdsMondiadBaner[domain];
  let _key=ConstAdsTopBody[domain];

  
  if(_keymon==null || _keymon==undefined){
    if(_key==null || _key==undefined){
      _key=ConstAdsTopBody["_"];
    }
  }
console.log('domain_ads',domain);
  return (<>
    <div id="yandex_rtb_R-A-4987242-1"></div>
    <div id="yandex_rtb_R-A-5016164-2"></div>
   {/* adsterra.com */}
    {!domain.includes("_unionmangaorg")&& 
    !domain.includes("_pandamangaxyz")&&
    !domain.includes("_yaoichanxyz")&&
    !domain.includes("_unionmangaorg") &&
    !_keymon &&
      <div className="text-center">
        <iframe className="inline" src={`//marathonpleadparachute.com/watchnew?key=${_key}`} height="250" width="300" frameBorder={"0"} scrolling="no"></iframe>
      </div>
    }
   
   {(domain.includes("www.yaoi-chan.xyz")||domain.includes("yaoi-chan.xyz")||domain.includes("_yaoichanxyz"))&& <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() 
            {
              window.yaContextCb.push(()=>{
                Ya.Context.AdvManager.render({
                  "blockId": "R-A-5016164-2",
                  "renderTo": "yandex_rtb_R-A-5016164-2"
                })
              })
            }); `,
        }}
      />}
    {(domain.includes("www.mangahasu.org")||domain.includes("mangahasu.org")||domain.includes("_mangahasuorg"))&& <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() 
            {
              window.yaContextCb.push(()=>{
                Ya.Context.AdvManager.render({
                  "blockId": "R-A-4987242-1",
                  "renderTo": "yandex_rtb_R-A-4987242-1"
                })
              })
            }); `,
        }}
      />}

{/* Sticky ad */}
{(domain.includes("www.mangahasu.org")||domain.includes("mangahasu.org")||domain.includes("_mangahasuorg"))&& <div id="pf-7281-1"><script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() 
            {
              window.pubfuturetag = window.pubfuturetag || [];window.pubfuturetag.push({unit: "65a78b8db2051a41f9173ff8", id: "pf-7281-1"})
            }); `,
        }}
      /></div>
}

{/* Mangahasu.org - 300×250 - 1 */}
{(domain.includes("www.mangahasu.org")||domain.includes("mangahasu.org")||domain.includes("_mangahasuorg"))&& <div id="pf-7280-1"><script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() 
            {
              window.pubfuturetag = window.pubfuturetag || [];window.pubfuturetag.push({unit: "65a78b79b2051a41f9173fdb", id: "pf-7280-1"})
            }); `,
        }}
      /></div>
}

     <div id="yandex_rtb_R-A-5255345-2"></div>
      {(domain.includes("www.lermanga.net")||domain.includes("lermanga.net")||domain.includes("_lermanganet"))&& <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() 
            {
              window.yaContextCb.push(()=>{
                Ya.Context.AdvManager.render({
                  "blockId": "R-A-5255345-2",
                  "renderTo": "yandex_rtb_R-A-5255345-2"
                })
              })
            }); `,
        }}
      />}
    <div id="yandex_rtb_R-A-5255387-1"></div>
    {domain.includes("_mangaherelol")&& <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() 
            {
              window.yaContextCb.push(()=>{
                Ya.Context.AdvManager.render({
                  "blockId": "R-A-5255387-1",
                  "renderTo": "yandex_rtb_R-A-5255387-1"
                })
              })
            }); `,
        }}
      />}
<div id="yandex_rtb_R-A-5255389-1"></div>
{domain.includes("_mangahostedorg")&& <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() 
            {
              window.yaContextCb.push(()=>{
                Ya.Context.AdvManager.render({
                  "blockId": "R-A-5255389-1",
                  "renderTo": "yandex_rtb_R-A-5255389-1"
                })
              })
            }); `,
        }}
      />}
<div id="yandex_rtb_R-A-5255566-1"></div>
{domain.includes("_unionleitornet")&& <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() 
            {
              window.yaContextCb.push(()=>{
                Ya.Context.AdvManager.render({
                  "blockId": "R-A-5255566-1",
                  "renderTo": "yandex_rtb_R-A-5255566-1"
                })
              })
            }); `,
        }}
      />}
  <div id="yandex_rtb_R-A-5255669-1"></div>
  {domain.includes("_unionmangasbrorg")&& <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() 
            {
              window.yaContextCb.push(()=>{
                Ya.Context.AdvManager.render({
                  "blockId": "R-A-5255669-1",
                  "renderTo": "yandex_rtb_R-A-5255669-1"
                })
              })
            }); `,
        }}
      />}



   {_keymon && <div data-mndbanid={_keymon}></div>}
  </>)

}
export default AdsTop