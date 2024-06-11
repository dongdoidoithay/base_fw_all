import AdsTop from "@/ads/ads_top_body";
import { GlobalNav } from "@/ui/global-nav";
import { ArchiveBoxXMarkIcon, ArrowUpTrayIcon, BookmarkIcon, CheckCircleIcon, ChevronRightIcon, ClockIcon, DocumentCheckIcon, ExclamationTriangleIcon, HeartIcon, HomeIcon, NewspaperIcon, QueueListIcon, RectangleGroupIcon, TagIcon, TrashIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { configBase } from "@/constants/constants";
import { toast } from "react-toastify";
import { useCookies } from 'react-cookie';
import { AuthApi } from "@/constants/FetchApi";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import getDate from "@/utils/caldate";
import { useQuery } from "react-query";
import ImageLoading from "@/ui/ImageLoading";
import Popup from "reactjs-popup";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    try {
        const _domain = context.req.headers.host;
        // console.log("_domain",_domain);
        let domain = '_';
        let config_base = configBase[domain];
        if (!_domain.includes("localhost")) {
            domain =
                domain + _domain.replace("www.", "").replace("-", "").replace(".", "");
            config_base = configBase[domain];
        }

        const config = config_base?.SelectMangaTypeByPage("");

        return {
            props: {
                config: config,
                domain: domain
            },
        };
    } catch (ex) {
        console.log("xxxxxxxxxx", ex)

        return {
            props: {
                config: null,
                domain: "_",
            }
        }
    }
};
const FetchDataChaper = async (
    userId: string,
    type: string
) => {
    console.log({ userId, type });
    if (userId && type) {
        const payload = {
            user_id: userId,
            type: type,
        }
        return await AuthApi('getTypeByUser', JSON.stringify(payload));
    }
    else
        return null;
};
const Profile = ({
    config,
    domain,
}: any) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const removeManga = (idmanga) => {
        const payload = {
            user_id: cookies.userId,
            type: typeActive,
            id_manga: idmanga
        }
        AuthApi('deleteTypeByUser', JSON.stringify(payload));

    };
    let _typerArray = ['last', 'reading', 'subscriber', 'fav', 'collec']
    const [cookies, setCookies, removeCookie] = useCookies(['token', 'userName', 'email', 'userId']);
    const [typeActive, setTypeActive] = useState('reading');
    const active = false;
    const {
        isLoading,
        data,
        isFetching,
        refetch
    } = useQuery(
        [
            "GetProfile",
            cookies.userId,
            typeActive,
        ],
        () => FetchDataChaper(cookies.userId, typeActive),
        {
            retry: 10,
            staleTime: 10000,
            cacheTime: 5000,
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        }
    );


    const breadcrumb = () => {
        return (
            <div id="breadcrumb" className="group block xs:hidden font-semibold mb-4">
                <ol
                    className="list-outside list-none flex flex-wrap gap-1"
                    itemScope
                    itemType="http://schema.org/BreadcrumbList"
                >
                    <li
                        className="flex flex-row flex-nowrap  hover:text-sky-500 dark:hover:text-sky-400"
                        itemProp="itemListElement"
                        itemScope
                        itemType="http://schema.org/ListItem"
                    >
                        <HomeIcon className="block w-6 mx-1" />
                        <Link
                            itemProp="item"
                            href={`${config.configPrefix.url_host}`}
                            className="hover:text-sky-500 dark:hover:text-sky-400"
                        >
                            {config?.configSetting?.lbl_domain_home}
                        </Link>
                        <meta itemProp="name" content={`${config?.configSetting?.lbl_domain_home}`} />
                        <meta itemProp="position" content="1" />
                    </li>
                    <li
                        className="flex flex-row"
                        itemProp="itemListElement"
                        itemScope
                        itemType="http://schema.org/ListItem"
                    >
                        <ChevronRightIcon className="block w-4 text-gray-400 mx-1" />{" "}
                        Profile
                        <meta itemProp="name" content={'Profile'} />
                        <meta itemProp="position" content="2" />
                    </li>
                </ol>
            </div>
        );
    };

    //console.log(data);
    return (
        <>
            <GlobalNav domain={domain} />
            <div className="lg:pl-60 ">
                <main className=" bg-slate-900/60 border border-slate-700">
                    <div id="wapper" className="mt-4 px-2">
                        <AdsTop domain={domain} />
                        {breadcrumb()}
                        <div id="info" className="my-2 mr-2">
                            {cookies && cookies.token && <div className="flex flex-wrap flex-col sm:flex-row">
                                <div
                                    id="action-info"
                                    className="flex flex-wrap gap-1 font-semibold my-1 items-center"
                                >
                                    <button
                                        onClick={() => setTypeActive('reading')}
                                        type="button"
                                        className={
                                            clsx('px-2  xs:text-xs sm:text-sm bg-slate-700 hover:bg-slate-800  hover:text-sky-500 dark:hover:text-sky-400 h-9', {
                                                'text-sky-500 bg-slate-800': 'reading' == typeActive
                                            })
                                        }
                                    >
                                        <NewspaperIcon className="inline w-6 xs:w-2" /> Readding
                                    </button>
                                    <button
                                        onClick={() => setTypeActive('subscriber')}
                                        type="button"
                                        className={
                                            clsx('px-2  xs:text-xs sm:text-sm bg-slate-700 hover:bg-slate-800  hover:text-sky-500 dark:hover:text-sky-400 h-9', {
                                                'text-sky-500 bg-slate-800': 'subscriber' == typeActive
                                            })
                                        }
                                    >
                                        <BookmarkIcon className="inline w-6 xs:w-2" /> Subscribe
                                    </button>
                                    <button
                                        onClick={() => setTypeActive('fav')}
                                        type="button"
                                        className={
                                            clsx('px-2  xs:text-xs sm:text-sm bg-slate-700 hover:bg-slate-800  hover:text-sky-500 dark:hover:text-sky-400 h-9', {
                                                'text-sky-500 bg-slate-800': 'fav' == typeActive
                                            })
                                        }
                                    >
                                        <HeartIcon className="inline w-6" /> Favorite
                                    </button>

                                    <button
                                        onClick={() => setTypeActive('last')}
                                        type="button"
                                        className={
                                            clsx('px-2  xs:text-xs sm:text-sm bg-slate-700 hover:bg-slate-800  hover:text-sky-500 dark:hover:text-sky-400 h-9', {
                                                'text-sky-500 bg-slate-800': 'last' == typeActive
                                            })
                                        }
                                    >
                                        <TagIcon className="inline w-6 " /> Read Later
                                    </button>
                                    <button
                                        onClick={() => {
                                            setCookies('token', null);
                                            setCookies('userName', null);
                                            setCookies('email', null);
                                            setCookies('userId', null);
                                        }}
                                        type="button"
                                        className={
                                            clsx('px-2  xs:text-xs sm:text-sm bg-slate-700 hover:bg-slate-800  hover:text-sky-500 dark:hover:text-sky-400 h-9', {
                                                'text-sky-500 bg-slate-800': 'user' == typeActive
                                            })
                                        }
                                    >
                                        <ArrowUpTrayIcon className="inline w-6 " /> Sign out
                                    </button>
                                    {/*  <button
                                        onClick={() => setTypeActive('collec')}
                                        type="button"
                                        className="px-2 sm:text-sm bg-slate-700 hover:bg-slate-800  hover:text-sky-500 dark:hover:text-sky-400 h-9"
                                    >
                                        <QueueListIcon className="inline w-6" /> Collection
                                    </button> */}
                                </div>
                            </div>
                            }
                            <div className="flex flex-wrap flex-row">
                                {
                                    (cookies && !cookies.token) && <div className="w-full flex  ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none  dark:highlight-white/5 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500/50 dark:bg-slate-800 dark:highlight-white/5 font-medium text-orange-600 px-1">
                                        <ExclamationTriangleIcon className="w-6" /> <span className="pl-2">{`Please log in to see your reading list, favorites, and reading-later selection. If you don't have an account yet, please`} <Link href="/auth/login" className="font-medium text-sky-600 hover:underline dark:text-primary-500">sign in</Link>  or <Link href="/auth/signup" className="font-medium text-sky-600 hover:underline dark:text-primary-500">sign up</Link></span>
                                    </div>
                                }
                                {
                                    data && data.listitem.map((item: any, index: number) => {
                                        let config_base_manga = configBase[domain];
                                        let config_manga = config_base_manga?.SelectMangaTypeByPage(item.type_manga);
                                        let _link = `${config_manga.configPrefix.url_host}${config_manga.configPrefix.pageViewManga}/${config_manga.configPrefix.startManga}${item.id_manga}${config_manga.configPrefix.endManga}`
                                        if (item.id_detail) {
                                            _link = `${config_manga.configPrefix.url_host}${config_manga.configPrefix.pageViewManga}/${config_manga.configPrefix.startManga}${item.id_manga}${config_manga.configPrefix.endManga}/${config_manga.configPrefix.startViewmanga}${item.id_detail}${config_manga.configPrefix.endViewmanga}`;
                                        }
                                        //console.log(config_manga);
                                        return (
                                            <>
                                                {/*  {loading && index==itemLoading ? <SkeletonLoadding key={item.idDetail + "-" + index}/>: */}
                                                <div
                                                    className="md:w-1/2 w-full"
                                                    key={item.id}
                                                >
                                                    <div
                                                        className={clsx('rounded border-curent hover:border-dashed hover:border-sky-400 dark:hover:border-sky-400 mr-2 mb-2 hover:text-sky-500 dark:hover:text-sky-400 flex border  p-1', {
                                                            'border-slate-700': !active,
                                                            'border-orange-500': active,
                                                        })}
                                                    >

                                                        <ImageLoading
                                                            url={item.image_manga}
                                                            title={data.name_manga}
                                                            classStyle="inline  w-12 h-12 rounded-full shadow-lg"
                                                        />
                                                        <Link className="flex-0"
                                                            href={_link}
                                                            title={`${item.name_manga} ${config_manga?.configSetting?.lbl_text_chapter} ${item.id_detail}`}

                                                        >
                                                            <p className={clsx('ml-3 font-semibold first-letter:uppercase gap-2 ', {
                                                                ' text-sky-500 dark:text-sky-400': !active,
                                                                ' text-orange-500 dark:text-orange-500': active,
                                                            })}>
                                                                <RectangleGroupIcon className="w-4 inline" /> {item.name_manga}
                                                            </p>
                                                            {item.id_detail && <i className={clsx('ml-3', {
                                                                ' text-orange-500 dark:text-orange-500': active,
                                                            })}>
                                                                <DocumentCheckIcon className="w-4 inline" />  {config_manga?.configSetting?.lbl_text_chapter} {item.id_detail}
                                                            </i>
                                                            }
                                                            {item.created_date && <i className={clsx('ml-3', {
                                                                ' text-orange-500 dark:text-orange-500': active,
                                                            })}>
                                                                <ClockIcon className="w-4 inline" />  {getDate(item.created_date, config_manga)}
                                                            </i>
                                                            }
                                                        </Link>
                                                        <Popup
                                                            trigger={<div className="flex-1 justify-center"> <TrashIcon style={{ "float": "right" }} className="items-end w-6 inline mt-3 text-orange-500 cursor-pointer" title="Remove" /> </div>}
                                                            closeOnDocumentClick
                                                            onClose={closeModal}
                                                            lockScroll
                                                            open={open}
                                                        >
                                                            <div className="rounded border-curent border-solid border-sky-400  mr-2 mb-2 text-sky-500 border  p-1 bg-slate-950 ">
                                                                <div className="font-bold text-orange-600">Are you sure you want to delete?</div>
                                                                <div className="px-4">{item.name_manga}</div>
                                                                <center>
                                                                    <button type="submit" className="w-12 text-white bg-sky-800 rounded-lg text-sm p-2"
                                                                        onClick={() => {
                                                                            removeManga(item.id_manga);
                                                                            refetch();
                                                                        }}
                                                                    > Yes
                                                                    </button>
                                                                </center>
                                                            </div>
                                                        </Popup>
                                                        {/*   <Link className="flex-1 items items-end justify-center" style={{ "textAlign": "end" }} onClick={()=>{}} title="Remove Manga">
                                                            <TrashIcon className="w-6 inline mt-3 text-orange-500 cursor-pointer"  title="Remove"/>
                                                        </Link> */}
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};
export default Profile;