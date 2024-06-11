import {
  AdultBrPrefix,
  AdultPrefix,
  AdultRuPrefix,
  AnimePrefix,
  ConfigPrefix,
  DcPrefix,
  MangaBrPrefix,
  MangaIndoPrefix,
  MangaItalyPrefix,
  MangaRuPrefix,
  NewsDcPrefix,
  NovelPrefix,
  RawPrefix,
  ScanPrefix,
  VideoRuPrefix,
  YaoiRuPrefix,
  _Prefix_Root_Adult,
  _Prefix_Root_Adult_Br,
  _Prefix_Root_Adult_Ru,
  _Prefix_Root_Anime,
  _Prefix_Root_Dc,
  _Prefix_Root_Indo,
  _Prefix_Root_Italy,
  _Prefix_Root_Manga_Br,
  _Prefix_Root_Manga_Ru,
  _Prefix_Root_NewsDc,
  _Prefix_Root_Novel,
  _Prefix_Root_Raw,
  _Prefix_Root_Scan,
  _Prefix_Root_Video_Ru,
  _Prefix_Root_Yaoi_Ru,
  _Prefix_Type_Adult,
  _Prefix_Type_Adult_Br,
  _Prefix_Type_Adult_Ru,
  _Prefix_Type_Anime,
  _Prefix_Type_Dc,
  _Prefix_Type_Indo,
  _Prefix_Type_Italy,
  _Prefix_Type_Manga_Br,
  _Prefix_Type_Manga_Ru,
  _Prefix_Type_NewsDc,
  _Prefix_Type_Novel,
  _Prefix_Type_Raw,
  _Prefix_Type_Scan,
  _Prefix_Type_Video_Ru,
  _Prefix_Type_Yaoi_Ru,
  _hostwww,
} from "./configPrefixBase";
import {
  AdultBrSetting,
  AdultRuSetting,
  AdultSetting,
  AnimeSetting,
  ConfigSetting,
  DcSetting,
  MangaBrSetting,
  MangaIndoSetting,
  MangaItalySetting,
  MangaRuSetting,
  NewsDcSetting,
  NovelSetting,
  RawSetting,
  ScanSetting,
  VideoRuSetting,
  YaoiRuSetting,
} from "./configSettingBase";
import {
  EndpointSetting,
  EndpointType,
  LocalKey,
  LocalKeyType,
} from "../../constants/Endpoint";

export type MangaSource = {
  lable: string;
  value: string;
  url?: string;
  icon?: string;
};
export const MenuLeft: MangaSource[] = [
  {
    lable: "Home",
    value: '',
    icon: "home",
  },
  {
    lable: "Popular Manga",
    value: 'popular',
    icon: "popular",
  },
  {
    lable: "Latest Releases",
    value: 'latest-releases',
    icon: "latestrelease",
  },
  {
    lable: "Manga List",
    value: 'manga-list',
    icon: "mangalist",
  },

  {
    lable: "Advanced Search",
    value: 'search',
    icon: "advanced-search",
  },
  {
    lable: "Collections",
    value: '/auth/profile',
    icon: "user",
  },
  {
    lable: "Bookmarks",
    value: 'bookmark',
    icon: "bookmark",
  },
  //bookmark
 
  {
    lable: "Manga Scan",
    value: _Prefix_Root_Scan,
    icon: "cate"
  },
  {
    lable: "Manga Raw",
    value: _Prefix_Root_Raw,
    icon: "cate"
  },
  {
    lable: "Manga Comic",
    value: _Prefix_Root_Dc,
    icon: "cate"
  },
  {
    lable: "Manga Adult",
    value: _Prefix_Root_Adult,
    icon: "cate"
  },
  {
    lable: "Novel Light",
    value: _Prefix_Root_Novel,
    icon: "cate"
  },
  
  {
    lable: "Manga Indo",
    value: _Prefix_Root_Indo,
    icon: "cate"
  },
  {
    lable: "Watch Anime",
    value: _Prefix_Root_Anime,
    icon: "cate"
  },
  
  {
    lable: "Mangás-Br",
    value: _Prefix_Root_Manga_Br,
    icon: "cate"
  },
  {
    lable: "Manga Italy",
    value: _Prefix_Root_Italy,
    icon: "cate"
  },
 
  {
    lable: "Mанга",
    value: _Prefix_Root_Manga_Ru,
    icon: "cate"
  },
  {
    lable: "Манги взрослый",
    value: _Prefix_Root_Adult_Ru,
    icon: "cate"
  },
  {
    lable: "яой манга",
    value: _Prefix_Root_Yaoi_Ru,
    icon: "cate"
  },
 /*  {
    lable: "Кино",
    value: _Prefix_Root_Video_Ru,
    icon: "cate"
  }, */
  {
    lable: "Discord",
    value: "https://discord.gg/DtbX5EfwQc",
    icon: "community"
  },

];
export const ActMangaSource: MangaSource[] = [

  {
    lable: "Manga Scan",
    value: _Prefix_Root_Scan,
  },
  {
    lable: "Manga Raw",
    value: _Prefix_Root_Raw,
  },
  {
    lable: "Manga Comic",
    value: _Prefix_Root_Dc,
  },
  {
    lable: "Manga Adult",
    value: _Prefix_Root_Adult,
  },
  {
    lable: "Novel Light",
    value: _Prefix_Root_Novel,
  },
  {
    lable: "Português",
    value: _Prefix_Root_Manga_Br,
  },
  {
    lable: "Manga Italy",
    value: _Prefix_Root_Italy,
  },
  {
    lable: "Anime",
    value: _Prefix_Root_Anime,
  },
  {
    lable: "Manga Indo",
    value: _Prefix_Root_Indo,
  },
  {
    lable: "Mанга",
    value: _Prefix_Root_Manga_Ru,
  },
  {
    lable: "Манги взрослый",
    value: _Prefix_Root_Adult_Ru,
  },
  {
    lable: "яой манга",
    value: _Prefix_Root_Yaoi_Ru,
  },
  {
    lable: "Кино",
    value: _Prefix_Root_Video_Ru,
  },
];

export const ActSourceList: MangaSource[] = [
 
  {
    lable: "Manga Scan",
    value: _Prefix_Root_Scan,
  },
  {
    lable: "Manga Raw",
    value: _Prefix_Root_Raw,
  },
  {
    lable: "Comic DC/MARVEL ",
    value: _Prefix_Root_Dc,
  },
  {
    lable: "Manga Adult",
    value: _Prefix_Root_Adult,
  },
  {
    lable: "Novel Light",
    value: _Prefix_Root_Novel,
  },
  {
    lable: "Anime",
    value: _Prefix_Root_Anime,
  },
  {
    lable: "Manga Indo",
    value: _Prefix_Root_Indo,
  },
  {
    lable: "Mangás BR",
    value: _Prefix_Root_Manga_Br,
  },
  {
    lable: "Manga Italy",
    value: _Prefix_Root_Italy,
  },
  
  {
    lable: "Mанга",
    value: _Prefix_Root_Manga_Ru,
  },
  {
    lable: "Манги взрослый",
    value: _Prefix_Root_Adult_Ru,
  },
  {
    lable: "яой манга",
    value: _Prefix_Root_Yaoi_Ru,
  },
  {
    lable: "Кино",
    value: _Prefix_Root_Video_Ru,
  },
];
export const FontSource: MangaSource[] = [
  {
    lable: "Lucida Sans",
    value: `"Lucida Sans","Lucida Sans Regular", "Lucida Grande","Lucida Sans Unicode", Geneva, Verdana, "sans-serif", roboto','dancing script,cursive`,
  },
  {
    lable: "Dancing Script",
    value: `dancing script,cursive`,
  },
  {
    lable: "Merriweather",
    value: `merriweather`,
  },
  {
    lable: "Roboto",
    value: `roboto`,
  },
  {
    lable: "literata",
    value: `literata,serif`,
  },
];

export const apiConfigPath = "https://api.unionmanga.xyz/api/v1/config";
/* const apiRootPath="https://api.truyendich.xyz/api"; */
export const apiRootPath="https://api.unionmanga.xyz/api";;
export type MangaLang = {
  typeName: string;
  typeManga: string;
  apiPath: string;
  //home path
  endPointPath: EndpointType;
  configPrefix: ConfigPrefix;
  configSetting: ConfigSetting;
  activeSource: MangaSource[];
  listSource: MangaSource[];
  localKey: LocalKeyType;
};

const MangaAdultBr: MangaLang = {
  typeName: _Prefix_Root_Adult_Br,
  typeManga: _Prefix_Type_Adult_Br,
  apiPath: apiRootPath + "/v3/br-hwa",
  // apiPath:"http://localhost:5111/api/v3/br-hwa",
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: AdultBrPrefix,
  activeSource: ActMangaSource,
  configSetting: AdultBrSetting,
  listSource: ActSourceList
};

const MangaBr: MangaLang = {
  typeName: _Prefix_Root_Manga_Br,
  typeManga: _Prefix_Type_Manga_Br,
  apiPath: apiRootPath + "/v3/po",
  //apiPath:"http://localhost:5111/api/v3/po",
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: MangaBrPrefix,
  activeSource: ActMangaSource,
  configSetting: MangaBrSetting,
  listSource: ActSourceList
};


const MangaScan: MangaLang = {
  typeName: _Prefix_Root_Scan,
  typeManga: _Prefix_Type_Scan,
  apiPath: apiRootPath + "/kumascans",
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: ScanPrefix,
  activeSource: ActMangaSource,
  configSetting: ScanSetting,
  listSource: ActSourceList
};
const MangaRaw: MangaLang = {
  typeName: _Prefix_Root_Raw,
  typeManga: _Prefix_Type_Raw,
  apiPath: apiRootPath + "/kumaraw",
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: RawPrefix,
  activeSource: ActMangaSource,
  configSetting: RawSetting,
  listSource: ActSourceList
};
const MangaAdult: MangaLang = {
  typeName: _Prefix_Root_Adult,
  typeManga: _Prefix_Type_Adult,
  apiPath: apiRootPath + "/v3/en-hwa",
  /* apiPath: "http://localhost:5111/api/v3/en-hwa", */
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: AdultPrefix,
  activeSource: ActMangaSource,
  configSetting: AdultSetting,
  listSource: ActSourceList
};

const Novel: MangaLang = {
  typeName: _Prefix_Root_Novel,
  typeManga: _Prefix_Type_Novel,
  apiPath: apiRootPath + "/novels",
  /*  apiPath:"https://api.truyendich.xyz/api/novels", */
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: NovelPrefix,
  activeSource: ActMangaSource,
  configSetting: NovelSetting,
  listSource: ActSourceList
};

const MangaDc: MangaLang = {
  typeName: _Prefix_Root_Dc,
  typeManga: _Prefix_Type_Dc,
  apiPath: apiRootPath + "/v3/en-dc",
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: DcPrefix,
  activeSource: ActMangaSource,
  configSetting: DcSetting,
  listSource: ActSourceList
};

const NewsDc: MangaLang = {
  typeName: _Prefix_Root_NewsDc,
  typeManga: _Prefix_Type_NewsDc,
  apiPath: apiRootPath + "/v1/news",
  //apiPath: "https://api.truyendich.xyz/api/v1/news",
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: NewsDcPrefix,
  activeSource: ActMangaSource,
  configSetting: NewsDcSetting,
  listSource: ActSourceList
};

const MangaItaly: MangaLang = {
  typeName: _Prefix_Root_Italy,
  typeManga: _Prefix_Type_Italy,
  apiPath: apiRootPath + "/italy",
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: MangaItalyPrefix,
  activeSource: ActMangaSource,
  configSetting: MangaItalySetting,
  listSource: ActSourceList
};
const MangaIndo: MangaLang = {
  typeName: _Prefix_Root_Indo,
  typeManga: _Prefix_Type_Indo,
  apiPath: apiRootPath + "/indonesia",
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: MangaIndoPrefix,
  activeSource: ActMangaSource,
  configSetting: MangaIndoSetting,
  listSource: ActSourceList
};
const MangaRu: MangaLang = {
  typeName: _Prefix_Root_Manga_Ru,
  typeManga: _Prefix_Type_Manga_Ru,
  apiPath: apiRootPath + "/ru-manga",

  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: MangaRuPrefix,
  activeSource: ActMangaSource,
  configSetting: MangaRuSetting,
  listSource: ActSourceList
};
const AdultRu: MangaLang = {
  typeName: _Prefix_Root_Adult_Ru,
  typeManga: _Prefix_Type_Adult_Ru,
  apiPath: apiRootPath + "/ru-hentai",
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: AdultRuPrefix,
  activeSource: ActMangaSource,
  configSetting: AdultRuSetting,
  listSource: ActSourceList
};
const VideoRu: MangaLang = {
  typeName: _Prefix_Root_Video_Ru,
  typeManga: _Prefix_Type_Video_Ru,
  apiPath: apiRootPath + "/ru-hentai-video",
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: VideoRuPrefix,
  activeSource: ActMangaSource,
  configSetting: VideoRuSetting,
  listSource: ActSourceList
};
const YaoiRu: MangaLang = {
  typeName: _Prefix_Root_Yaoi_Ru,
  typeManga: _Prefix_Type_Yaoi_Ru,
  apiPath: apiRootPath + "/ru",
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: YaoiRuPrefix,
  activeSource: ActMangaSource,
  configSetting: YaoiRuSetting,
  listSource: ActSourceList
};
const Anime: MangaLang = {
  typeName: _Prefix_Root_Anime,
  typeManga: _Prefix_Type_Anime,
  apiPath: apiRootPath + "/en/anime",
  endPointPath: EndpointSetting,
  localKey: LocalKey,

  configPrefix: AnimePrefix,
  activeSource: ActMangaSource,
  configSetting: AnimeSetting,
  listSource: ActSourceList
};
/*http://localhost:5110/manga/my-body-is-a-sword  --> type =manga*/
export const SelectMangaTypeByPage = (type: string): MangaLang => {
  let selectType:any = null;
  switch (type) {
    case _Prefix_Root_Manga_Br:
      selectType = MangaBr;
      break;
    case _Prefix_Root_Adult_Br:
      selectType = MangaAdultBr;
      break;
    case _Prefix_Root_Scan:
      selectType = MangaScan;
      break;
    case _Prefix_Root_Raw:
      selectType = MangaRaw;
      break;
    case _Prefix_Root_Adult:
      selectType = MangaAdult;
      break;
    case _Prefix_Root_Dc:
      selectType = MangaDc;
      break;
    case _Prefix_Root_Novel:
      selectType = Novel;
      break;
    case _Prefix_Root_Indo:
      selectType = MangaIndo;
      break;
    case _Prefix_Root_Italy:
      selectType = MangaItaly;
      break;
    case _Prefix_Root_Manga_Ru:
      selectType = MangaRu;
      break;
    case _Prefix_Root_Adult_Ru:
      selectType = AdultRu;
      break;
    case _Prefix_Root_Video_Ru:
      selectType = VideoRu;
      break;
    case _Prefix_Root_Yaoi_Ru:
      selectType = YaoiRu;
      break;
  case _Prefix_Root_Anime:
        selectType = Anime;
        break;
  
    default:
      selectType = MangaScan;
      break;
  }
  return selectType;
};
export const SelectMangaTypeName = (typeroot: string): string | null | undefined => {
  let selectType:any = null;
  if (typeroot != undefined) {
    selectType = ActMangaSource.find(x => x.value == typeroot)?.lable;
  }
  return selectType;
};
export default MangaScan;
