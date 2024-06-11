import { GlobalNav } from "@/ui/global-nav";
import { useEffect, useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Router from 'next/router';
import { getStorage, setStorage } from "@/utils/localFx";


const NoDataFound = ({ domain }) => {
  let _domain=domain;
   if(domain==null){
    _domain="_";
   }
   const second=10;
   const [timeLeft, setTimeLeft] = useState(second);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);
   const [rpcount, setRpcount] = useState(0);
   useEffect(() => {
  
    let _value = getStorage("RF-"+Router.asPath);
    if(_value!=null && _value!=undefined){
      
      if(parseInt(_value)>3)
      {
        setStorage("RF-"+Router.asPath, "0", 30 * 24 * 60 * 60);
      }
      setRpcount(parseInt(_value));
    }
    
     if (timeLeft > 0) {
       const interval = setInterval(() => {
         setTimeLeft(timeLeft - 1);
         //console.log(timeLeft);
         setMinutes(Math.floor(timeLeft / second));
         setSeconds(timeLeft % second);
         if(timeLeft==1 ){
          if(_value==null || _value==undefined){
            setStorage("RF-"+Router.asPath, "1", 30 * 24 * 60 * 60);
            location.reload();
          }else{
            setStorage("RF-"+Router.asPath, (parseInt(_value)+1).toString(), 30 * 24 * 60 * 60);
            if(parseInt(_value)<=2){
              location.reload();
            }
          }
          
         }
       }, 1000);
       return () => clearInterval(interval);
     }
   }, [timeLeft]);
 
  
   const percentage = Math.floor((minutes * second + seconds) /  second * 100);
  const FunBussy=()=>{
    return (
      <div className="lg:pl-60  bg-slate-900/70 border border-slate-700">
      <main className="px-2 left-1">
        <div className="flex flex-row flex-grow">
          <div className="py-1  text-md text-sky-300 items-center font-semibold first-line:uppercase first-letter:text-2xl first-letter:font-bold flex-1" >
            <h1 className="border-b-4  border-t-transparent text-orange-500 hover:text-sky-500 hover:border-b-sky-500 hover:border-b-4  border-b-orange-500 w-full">
            THERE IS HEAVY LOAD ON THE SERVER CURRENTLY. 
            </h1>
          </div>
        </div>
        <div className="pl-3">
          <h2 className="text-md text-sky-300 items-center font-semibold ">
            The server is currently overloaded. Please wait a few minutes as the system automatically reloads the content. 
            <br/>
            Please send the overload notification email again if you encounter high traffic multiple times, so that we can improve system stability. Thank you for your patience.
            <br/>
            Email: mangavn1@gmail.com 
          </h2>
          <br />
          <div style={{ width: 80, height: 80}} className="mx-auto">
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
          </div>

      </main>
    </div>
    )
  }
  const NotFound=()=>{
    return (
      <div className="lg:pl-60  bg-slate-900/70 border border-slate-700">
        <main className="px-2 left-1">
          <div className="flex flex-row flex-grow">
            <div className="py-1  text-md text-sky-300 items-center font-semibold first-line:uppercase first-letter:text-2xl first-letter:font-bold flex-1" >
              <h1 className="border-b-4  border-t-transparent text-orange-500 hover:text-sky-500 hover:border-b-sky-500 hover:border-b-4  border-b-orange-500 w-full">
                ERROR 404  !OPP You Search name other author ...
              </h1>
            </div>
          </div>
          <div className="pl-3">
            <h2 className="text-md text-sky-300 items-center font-semibold ">
              You are accessing a link that is not declared on the system. Please contact the administrator via Email: mangavn1@gmail.com
            </h2>
            <br />
            <p>
              This indicates that the link you are trying to access is broken or
              does not exist on the website/system you are using.
            </p>
            <h2 className="text-lg text-sky-300 items-center font-semibold ">Some suggestions on how to fix this:</h2>
            <ul className="list-disc">
              <li>
                Double check that the link you are trying to access is correct and
                exists. There may be a typo in the link.
              </li>
              <li>
                Try accessing the main website first, then navigating to the
                specific page you want.
              </li>
              <li>
                The page/link you want may have been removed or changed recently, so
                it can no longer be accessed with the old link.
              </li>
              <li>
                Contact the website administrator or support using the email
                provided in the error message to notify them of the broken link.
                They can verify if the link should be updated or removed from the
                system.
              </li>
              <li>
                Try searching for the content you wanted to access using the website
                search, main menus or sitemap instead of directly using the old
                link.
              </li>
            </ul>
            <p>
              If this is happening on multiple links, the website may be having an
              issue and the administrators need to investigate and fix it. Overall,
              don&apos;t keep trying to access the broken link. Verify the link, contact
              the administrators if needed, or try finding the content through the
              main website instead. Let me know if you have any other questions!
            </p>
          </div>

        </main>
      </div>
    )
  }
  const render=()=>{
    if(rpcount>2 )
      return NotFound();
    else
    return FunBussy();
  }
  return (
    <>
     <GlobalNav domain={_domain} />
    {render()}
    </>
  );
}

export default NoDataFound;