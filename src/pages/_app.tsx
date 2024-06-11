import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.min.css";

import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import DefaultLayout from "./layout";
import { Suspense, lazy, use, useEffect, useRef, useState } from "react";
import NextNprogress from "nextjs-progressbar";
import ArrowUpCircleIcon from "@heroicons/react/20/solid/ArrowUpCircleIcon";
import { ToastContainer } from "react-toastify";
import { baseSeo, configBase, configPrefixBase, seoConfig } from "@/constants/constants";
import { BreadcrumbJsonLd, DefaultSeo, ImageJsonLd, LogoJsonLd, NextSeo, SiteLinksSearchBoxJsonLd, SocialProfileJsonLd } from "next-seo";
import FotterPage from "@/ui/footer";
import AdsTemplate from "@/ads/ads_template";
import ReportWebVitals from "@/ads/analytics";
import { QueryClient, QueryClientProvider } from "react-query";
import NoDataFound from "@/components/noDataFound";

//Auth
import { CookiesProvider } from 'react-cookie';
import AdsPopCash from "@/ads/ads_popcash";
import { useRouter } from "next/router";
import AdsPickTop from "@/ads/ads_pic_top";
// import your default seo configuration
type AppOwnProps = { domain: string };

const queryClient = new QueryClient();

function Loading(){
  const router=useRouter();
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
    const handleStart=(url)=>(url!==router.asPath)&&setLoading(true);
    const handleComplete=(url)=>(url!==router.asPath)&&setTimeout(()=>{setLoading(false),500});

    router.events.on('routeChangeStart',handleStart);
    router.events.on('routeChangeComplete',handleComplete);
    router.events.on('routeChangeError',handleComplete);
    return()=>{
      router.events.off('routeChangeStart',handleStart);
      router.events.off('routeChangeComplete',handleComplete);
      router.events.off('routeChangeError',handleComplete);
    }
  })
  return loading &&(
    <>
    <p>loading.....</p>
    </>
  )
}

export default function MyApp({
  Component,
  pageProps,
  domain,
}: AppProps & AppOwnProps) {
  const [scroll, setScroll] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (document.getElementsByName("body") != undefined) {
      if (number >= 10) {
        setScroll("fixed");
      } else {
        setScroll("");
      }
    }
  };
  const Scroll = () => {
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };
  const sectionRef = useRef<HTMLDivElement>(null);
 /*  if (domain == "_") {
    return (
      <>
        <NoDataFound domain={domain} />
      </>
    );
  } */
  try {
    let config_baseSeo = baseSeo[domain]?.default;
    let config_base= configBase[domain];
    let config_prefix_baseSeo = configPrefixBase[domain];
    let seo_config = seoConfig[domain];
  
    let ItemBreadcrumb: any = [];
    if(config_base?.MenuLeft)
    {
      ItemBreadcrumb= config_base?.MenuLeft?.map((item: any, indx: number) => {
        let _link = `${config_prefix_baseSeo?._hostwww}/${item.value}`;
        return (
            {
              position: indx + 2,
              name: item.lable,
              item: _link
            }
          )
      }
      );
    }
    return (
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
     
    
      <DefaultLayout domain={domain}>

        <Loading/>
        <ToastContainer />
        <div ref={sectionRef}></div>
        <NextNprogress
          color="#e61a05"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          options={{ easing: "ease", speed: 500 }}
        />

        <NextSeo
          additionalMetaTags={[
            {
              property: "keywords",
              content: config_baseSeo?.keywords,
            },
          ]}
          additionalLinkTags={[
            {
              rel: "alternate",
              href: `/api/rss.xml`,
              type: "application/rss+xml",
            },
            {
              rel: "alternate",
              href: `/api/ror.xml`,
              type: "application/rss+xml",
            },
            {
              rel: "alternate",
              href: `/api/sitemap.html`,
              type: "text/html",
            },
            {
              rel: "alternate",
              href: `/api/urllist.txt`,
              type: "text/plain",
            },
            {
              rel: "alternate",
              href: `/api/server-sitemap.xml`,
              type: "application/rss+xml",
            },
          ]}
        />
         <SocialProfileJsonLd
          type="Organization"
          name={config_baseSeo?.title.replaceAll('{domain}',config_baseSeo?.domainName)}
          url={config_prefix_baseSeo?._hostwww}
          sameAs={[
            'https://www.facebook.com/mun.suny.718',
            'https://www.instagram.com/dproject_manga',
            'https://twitter.com/VnManga'
          ]}
        />
        <BreadcrumbJsonLd
          itemListElements={[
            {
              position: 1,
              name: config_baseSeo?.title.replaceAll('{domain}',config_baseSeo?.domainName),
              item: config_prefix_baseSeo?._hostwww,
            },
            ...ItemBreadcrumb
          ]}
        />
        <DefaultSeo {...seo_config?.default} />
        <LogoJsonLd
          logo={`${config_baseSeo?.Icon}`}
          url={`${config_prefix_baseSeo?._hostwww}`}
        />
        <ImageJsonLd
          images={[
            {
              contentUrl:config_baseSeo?.Icon,
              creator: {
                '@type': 'Person',
                name: `# ${config_baseSeo?.domainName}`,
              },
              creditText: config_baseSeo?.domainName,
              copyrightNotice: `© ${config_baseSeo?.domainName}`,
              license: `${config_prefix_baseSeo?._hostwww}`,
              acquireLicensePage: `${config_prefix_baseSeo?._hostwww}`,
            },
          ]}
        />
      <NextSeo
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
      />
        <SiteLinksSearchBoxJsonLd
          url={config_prefix_baseSeo?._hostwww}
          potentialActions={[
            {
              target: `/search?q`,
              queryInput: "search_term_string",
            },
          ]}
        />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <AdsTemplate domain={domain} />
          <AdsPopCash domain={domain} />
          <FotterPage domain={domain} />
          <AdsPickTop  domain={domain} />
          <a
            onClick={Scroll}
            className={`${scroll} inset bottom-6 z-50 right-6 text-sky-400 hover:text-orange-500 cursor-pointer`}
          >
            <ArrowUpCircleIcon className="w-9" />{" "}
          </a>
        </QueryClientProvider>
        <Suspense fallback={null}>
          <ReportWebVitals domain={domain} />
        </Suspense>
      </DefaultLayout>
      </CookiesProvider>
    );
  } catch (ex) {
    console.log("MyApp EX:", ex);
    return (
      <>
        <NoDataFound domain={domain} />
      </>
    );
  }
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  try {
    let _domain = context.ctx.req.headers.host;
  
   /*  if(context.ctx.req.url!="/icon-gif.gif")
     console.log(`App domain:`, context.router.asPath); */
    let domainValue = "_";
    if (!_domain.includes("localhost")) {
      domainValue =
        domainValue +
        _domain.replaceAll("www.", "").replaceAll("-", "").replaceAll(".", "");
    }

    const ctx = await App.getInitialProps(context);
    if(context.ctx.req.url!="/icon-gif.gif")
      console.log("domain::",_domain +context.router.asPath);
    return { ...ctx, domain: domainValue };
  } catch (ex) {
    const ctx = await App.getInitialProps(context);

    return { ...ctx, domain: "_" };
  }
};
