import LastRelease from "@/components/latestReleases/lastUpdate";
import PopupRelease from "@/components/latestReleases/popupRelease";
import { GlobalNav } from "@/ui/global-nav";
import AdsDetail from "@/ads/ads_detail";
import AdsTop from "@/ads/ads_top_body";
import AdsViews from "@/ads/ads_view";
import { GetServerSideProps } from "next";
import { baseSeo, configBase, configPrefixBase } from "@/constants/constants";
import { CallApiWithRetry } from "@/constants/FetchApi";
import NoDataFound from "@/components/noDataFound";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  try {
    const _domain = context.req.headers.host;
    let domain = '_';
    let config_base = configBase["_"];
    if (!_domain.includes('localhost')) {
      domain = domain + _domain.replace('www.', '').replace('-', '').replace('.', '');
      config_base = configBase[domain];
    }
    const config = config_base?.SelectMangaTypeByPage('');

    let data_lastuppdate;
    let data_popular;
    await Promise.all([
      CallApiWithRetry(config.apiPath + config.endPointPath.homeLastUpdate + 0, 9),
      CallApiWithRetry(config.apiPath + config.endPointPath.homePopular, 9),

    ]).then((result) => {
      data_lastuppdate = result[0];
      data_popular = result[1];
    });

    return {
      props: {
        config: config,
        domain: domain,
        data_lastuppdate: data_lastuppdate ?? null,
        data_popular: data_popular ?? null
      }
    }
  } catch (ex) {

    console.log(`Detail Manga ${context.req.url} :`, ex);
    return {
      props: {
        config: null,
        domain: null,
        data_lastuppdate: null,
        data_popular: "_"
      }
    }
  }
}

const LatestReleasePage = ({ config, domain, data_lastuppdate, data_popular }: any) => {
/*   if (data_lastuppdate == null || domain == "_") {
    return (<NoDataFound domain={domain} />)
  } */
  let config_baseSeo = baseSeo[domain]?.default;
  let config_prefix_baseSeo= configPrefixBase[domain];
  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content={config_baseSeo?.locale} />
        <meta name="sitemap" content={`${config_prefix_baseSeo._hostwww}/${domain}/sitemap-index.xml`}/>
      <meta name="robots" content={`${config_prefix_baseSeo._hostwww}/${domain}/robots.txt`}/>
      </Head>
      <GlobalNav domain={domain} />
      <div className="lg:pl-60 ">
        <main className=" bg-slate-900/60 border border-slate-700">
          <div id="wapper" className="mt-4 px-2">
            <AdsTop domain={domain} />
            <LastRelease typeManga={null} data_lastuppdate={data_lastuppdate} config={config} />
            <AdsDetail domain={domain} />
            <PopupRelease typeManga={null} data_popular={data_popular} config={config} />
            <AdsViews domain={domain} />
          </div>
        </main>
      </div>
    </>
  );
}
export default LatestReleasePage;