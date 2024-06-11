
import { configBase } from "@/constants/constants";
import { ArrowPathIcon, BoltIcon, ChevronDownIcon, MagnifyingGlassIcon, Squares2X2Icon, UserCircleIcon, UserMinusIcon } from "@heroicons/react/20/solid"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import clsx from "clsx";


function LoadingIcon() {
  return (<>
    <ArrowPathIcon className="w-4 animate-spin  text-orange-500 font-bold" />
  </>
  )
}
export const SubnNav = ({ domain }) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const [cookies, setCookies] = useCookies(['token', 'userName', 'email', 'userId']);

  const segment = usePathname();
  const isActive = segment === "/search";

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };
  let config_base: any;
  let config: any;

  try {
    config_base = configBase[domain];
    config = config_base?.SelectMangaTypeByPage('');
  } catch {
    config_base = configBase["_"];
    config = config_base?.SelectMangaTypeByPage('');
  }
  // console.log("cookies",cookies);
  /*    let config_base= configBase[domain];
     let config = config_base?.SelectMangaTypeByPage(''); */
  return (<>
    <div className="sticky lg:pr-8 top-0 flex flex-row flex-wrap z-30 w-full flex-none transition-colors duration-500 lg:z-30 border-b border-slate-900/10 border-slate-700 supports-backdrop-blur:bg-white/95 bg-slate-900">
      <div className="hidden lg:flex w-56 items-center ">
        <Link href="/" title={config?.configSetting?.lbl_domain_Page} >
          <div dangerouslySetInnerHTML={{ __html: config?.configSetting?.lbl_Name_Page }} className="w-full text-xl font-semibold first-line:uppercase first-letter:text-2xl first-letter:font-bold"></div>
        </Link>
      </div>
      <div className="pl-5 flex-1 max-w-8xl mx-auto hidden lg:block">
        <div className="relative flex items-center ">
          <div className="top-0 pointer-events-none text-xs rounded-full py-1 max-w-screen-lg left-0">
            <div className="bg-current bg-slate-900 pointer-events-auto rounded w-96">
              {!isActive && <Link
                className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 bg-slate-800 highlight-white/5 hover:bg-slate-700"
                href="/search"
                onClick={handleClick}
              >
                {loading ? <div className="flex  text-orange-500 font-bold animate-bounce">
                  <BoltIcon className="block w-6 text-gray-400" />Waiting...
                </div> : <div className="flex ">
                  <MagnifyingGlassIcon className="block w-6 text-gray-400 " /> Quick search...
                </div>}
                <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                  {loading ? LoadingIcon() : 'Enter'}
                </span>
              </Link>
              }
            </div>
          </div>
          <div className="relative hidden lg:flex items-center ml-auto">
            {cookies && cookies.token &&
              (
                <Link href={'/auth/profile'} /* onClick={() => setIsOpen(!isOpen)} */ className="flex" style={{ "cursor": "pointer" }}>
                  <UserCircleIcon className="block w-6 font-semibold text-sky-700" />
                  <span className="pl-2 font-bold">{cookies?.userName ?? cookies?.email}</span>
                  <ChevronDownIcon className="block w-6 font-semibold text-orange-500" />
                </Link>

              )
            }
            {(!cookies || (cookies && !cookies.token)) &&

              <Link href={`/auth/login`} className="flex" style={{ "cursor": "pointer" }}>
                <UserCircleIcon className="block w-6 font-semibold text-orange-500" />
                <span className="pl-2 font-bold"> Sign in</span>
              </Link>
            }
            <Link
                href={'#'}
                className="flex ml-6 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              >
                <Squares2X2Icon className="block w-6 font-semibold text-orange-500" />
                <span className="pl-2 font-bold">App</span>
              </Link>
 {/* <ul style={{ "marginTop": "120px" }}
              className={clsx("", {
                "absolute z-[1000] float-left min-w-max list-none overflow-hidden border-none text-left text-base dark:border-slate-700 supports-backdrop-blur:bg-white/95 dark:bg-slate-900": isOpen,
                hidden: !isOpen,
              })}

            >
              <li>
                <Link
                  href={'#'}
                  style={{ "cursor": "pointer" }}
                  className="flex"
                  onClick={(e) => {
                    e.preventDefault()
                    setCookies('token', null);
                    setCookies('userName', null);
                    setCookies('email', null);
                    setCookies('userId', null);
                    setIsOpen(!isOpen)
                  }}
                >
                  <UserMinusIcon className="block w-4 font-semibold text-orange-500"></UserMinusIcon>
                  <span className="pl-2">Sign out</span>
                </Link>
              </li>
            </ul> */}
          </div>
        </div>

      </div>
    </div>

  </>)
}