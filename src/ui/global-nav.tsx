import Link from "next/link";
import {
  ArrowPathIcon,
  Bars4Icon,
  BoltIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  FireIcon,
  GlobeAmericasIcon,
  HomeIcon,
  ListBulletIcon,
  MagnifyingGlassCircleIcon,
  RectangleGroupIcon,
  ShieldExclamationIcon,
  SquaresPlusIcon,
  TagIcon,
  UserCircleIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import { SubnNav } from "./sub-nav";
import Byline from "./byline";

export function GlobalNav({domain}) {
  const [cookies, setCookies] = useCookies(['token', 'userName', 'email', 'userId']);
  
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
  };
  let config_base:any;
  let config:any ;

try{
   config_base= configBase[domain];
   config = config_base?.SelectMangaTypeByPage('');

   //console.log("config",config_base.MenuLeft);
}catch{
  config_base= configBase["_"];
  config = config_base?.SelectMangaTypeByPage('');
}

  return (
    <>
      <SubnNav domain={domain}/>
      <div className="sticky lg:fixed top-0 z-40 flex w-full bg-slate-950 flex-col border-b border-gray-800 lg:bottom-0 lg:z-auto lg:w-60 lg:border-b-0 lg:border-r lg:border-gray-800 ">

        <div className="flex h-14 items-center py-4 px-4 lg:h-auto z-50 ">
          <Link className="group flex w-full items-center gap-x-2.5 " onClick={close} href={'#'}>
            <div className="h-7 w-7 ">
            </div>
            <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50 text-xl first-line:uppercase first-letter:text-2xl first-letter:font-bold lg:hidden">
            {cookies.token && <span className="pl-2 font-bold">{cookies?.userName ?? cookies?.email}</span>}
            {!cookies.token  &&  <div dangerouslySetInnerHTML={{ __html: config?.configSetting?.lbl_Name_Page }}></div>}
            </h3>
          </Link>
          <button
            type="button"
            className="group absolute left-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden mr-7"
            onClick={() => setIsOpen(!isOpen)} >
            {isOpen ? (
              <XMarkIcon className="block w-6 font-semibold text-orange-500" />
            ) : (
              <Bars4Icon className="block w-6 font-semibold text-orange-500" />
            )}
          </button>
         
          {/*  {cookies && cookies.token &&
              (
                <Link href={'/auth/profile'}  className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden mr-2" style={{ "cursor": "pointer" }}>
                  <UserCircleIcon className="block w-6 font-semibold text-sky-700" />
                  <span className="pl-2 font-bold">{cookies?.userName ?? cookies?.email}</span>
                  <ChevronDownIcon className="block w-6 font-semibold text-orange-500" />
                </Link>

              )
            }
            {(!cookies || (cookies && !cookies.token)) &&

              <Link href={`/auth/login`} className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden mr-2" style={{ "cursor": "pointer" }}>
                <UserCircleIcon className="block w-6 font-semibold text-orange-500" />
                <span className="pl-2 font-bold"> Sign in</span>
              </Link>
            } */}
            <Link className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden mr-2"
              href="/search"
              onClick={handleClick}>
              {loading ? <BoltIcon className="block w-7  text-orange-500" /> :<MagnifyingGlassCircleIcon className="block w-9 text-sky-500" />
              }              
           </Link> 
        </div>


        <div
          className={clsx("overflow-y-auto lg:static lg:block ", {
            "fixed inset-0 bottom-0 top-14 mt-px  bg-black z-50": isOpen,
            hidden: !isOpen,
          })}
        >
          <nav className="lg:text-sm lg:leading-6 relative">
            {/*  <div className="font-semibold items-center pb-3">MENU</div> */}
            <ul>
              { config_base?.MenuLeft?.map((navItem, idx) => {
                return <NavItem item={navItem} idx={idx} key={idx} domain={domain} />;
              })}
              <Byline className="" />
            </ul>

          </nav>
        </div>
      </div>

    </>
  );
          
};


function LoadingIcon() {
  return (<>
    <ArrowPathIcon className="w-4 animate-spin font-semibold" /> ...
  </>
  )
}
import { useRouter } from 'next/router'
import { configBase, configPrefixBase } from "@/constants/constants";
import { useCookies } from "react-cookie";
function NavItem({
  item,
  idx,
  domain
}: {
  item: any,
  idx: number,
  domain:any
}) {
/*   const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  }; */
  const router = useRouter()
  const segment = router.asPath;
  let isActive = false;
  if(segment.length>1 && item.value.length>1)
     isActive = segment.includes(item.value);
  if(segment.length==1||segment.length==0)
    isActive = segment.includes(item.value);

  let _link = `/${item.value}`;
  let config_prefix_base= configPrefixBase[domain];

  let _target: any = '_self';
  let Icon: any = null;
  const renderText=()=>{
    switch(item.value){
      case config_prefix_base._Prefix_Root_Anime:
      case config_prefix_base._Prefix_Root_Video_Ru:
       return <span className={clsx('font-semibold',{'text-purple-500':!isActive,'text-sky-500':isActive})}>{item.lable}</span>
      case config_prefix_base._Prefix_Root_Adult:
      case config_prefix_base._Prefix_Root_Adult_Br:
      case config_prefix_base._Prefix_Root_Adult_Ru:
        return <span className={clsx('font-semibold',{'text-orange-500':!isActive,'text-sky-500':isActive})}>{item.lable}</span>
      case config_prefix_base._Prefix_Root_Novel:
        return <span className={clsx('font-semibold',{'text-orange-200':!isActive,'text-sky-500':isActive})}>{item.lable}</span>
      default:
        return <span>{item.lable}</span>
    }
  }
  if (item.icon == "home") {
    Icon = <HomeIcon className="w-6 text-sky-500" />
  }
  if (item.icon == "cate") {
    //console.log("x",config_prefix_base._Prefix_Root_Novel);
    //console.log("Item",item.value);
    switch(item.value){
      case config_prefix_base._Prefix_Root_Anime:
      case config_prefix_base._Prefix_Root_Video_Ru:
        Icon = <VideoCameraIcon className="w-6 text-purple-500" />
      break;
      case config_prefix_base._Prefix_Root_Adult:
      case config_prefix_base._Prefix_Root_Adult_Br:
      case config_prefix_base._Prefix_Root_Adult_Ru:
        Icon = <ShieldExclamationIcon className="w-6 text-orange-500" />
      break;
      case config_prefix_base._Prefix_Root_Novel:
        Icon = <BookOpenIcon className="w-6 text-orange-200" />
      break;
      case config_prefix_base._Prefix_Root_Manga_Br:
        Icon = <TagIcon className="w-6 text-purple-300" />
      break;
      case config_prefix_base._Prefix_Root_Scan:
      case config_prefix_base._Prefix_Root_Manga_Ru:
        Icon = <TagIcon className="w-6 text-sky-300" />
      break;
      case config_prefix_base._Prefix_Root_Raw:
        Icon = <TagIcon className="w-6 text-red-300" />
      break;
      case config_prefix_base._Prefix_Root_Dc:
      case config_prefix_base._Prefix_Root_Yaoi_Ru:
        Icon = <TagIcon className="w-6 text-lime-300" />
      break;
      default:
      Icon = <TagIcon className="w-6 text-white" />
      break;
    }
    
  }
  if (item.icon == "popular") {
    Icon = <FireIcon className="w-6 text-red-500" />
  }
  if (item.icon == "latestrelease") {
    Icon = <ListBulletIcon className="w-6 text-rose-500" />
  }
  if (item.icon == "advanced-search") {
    Icon = <MagnifyingGlassCircleIcon className="w-6 text-white" />
  }
  if (item.icon == "collections") {
    Icon = <SquaresPlusIcon className="w-6 text-white" />
  }
  if (item.icon == "community") {
    _target = "_blank";
    _link = item.value;
    Icon = <ChatBubbleLeftRightIcon className="w-6 text-green-500" />
  }
  if (item.icon == "mangalist") {
    Icon = <RectangleGroupIcon className="w-6 text-sky-500" />
  }
  if (item.icon == "bookmark") {
    Icon = <SquaresPlusIcon className="w-6 text-blue-500" />
  }
  if (item.icon == "user") {
    _link = item.value;
    Icon = <GlobeAmericasIcon className="w-6 text-orange-600" />
  }
  
  return (
    <Link
      target={_target}
      href={_link}
      key={idx}
     /*  onClick={handleClick} */

     className={clsx(
      'group flex items-center lg:text-sm lg:leading-6 mb-1  py-1',
      {
        'font-semibold hover:text-sky-300 text-slate-400 pl-5 ': !isActive,
        'font-semibold text-sky-500 border-r border-double border-sky-500  bg-slate-500/10 pl-2': isActive,
      },
    )}
    >
       <div className={clsx(
        'mr-2 p-1 rounded-md ring-1 ring-slate-900/5 group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 shadow-none  highlight-white/5',
        {
          'group-hover:shadow-indigo-200 group-hover:bg-indigo-500/50 bg-slate-800 highlight-white/5': !isActive,
          'shadow-indigo-200 border border-indigo-500 rounded-md bg-sky-500/20': isActive,
        }
      )}>
        {Icon}
      </div>
      {renderText()}
     {/*  {loading ? LoadingIcon() : ''} */}
    </Link>
  );
}