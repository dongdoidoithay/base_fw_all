import { AdsMondiadNative, ConstAdsView } from "./ads_constants";

const AdsViews = ({domain}) => {
  let _keymon=AdsMondiadNative[domain];
  let _key=ConstAdsView[domain];

  if(_keymon==null || _keymon==undefined){
    if(_key==null || _key==undefined){
      _key=ConstAdsView["_"];
    }
  }


  
  //destop
  return (
    <>
      {/* adsterra.com */}
     {!_keymon && _key && <div className="text-center">
        <iframe className="inline" src={`//marathonpleadparachute.com/watchnew?key=${_key}`} height="250" width="300" frameBorder={"0"} scrolling="no"></iframe>
      </div>
      }
      {
        _keymon && <div data-mndazid={_keymon}></div>
      }
    </>
  );
}
export default AdsViews