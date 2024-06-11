import { ConstAdsDetail } from "./ads_constants";

/* import parse from 'html-react-parser'; */
const AdsDetail = ({domain}) => {
  //4b3f85eed5d784d61a7d77b52d31704f
  let _key=ConstAdsDetail[domain];
  if(_key==null || _key==undefined){
    _key=ConstAdsDetail["_"];
  }

  //destop
  return (
    <>
      {/* adsterra.com */}
      <div className="text-center">
        <iframe className="inline" src={`//marathonpleadparachute.com/watchnew?key=${_key}`} height="250" width="300" frameBorder={"0"} scrolling="no"></iframe>
      </div>
    </>
  );

  
}

export default AdsDetail