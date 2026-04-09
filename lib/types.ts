export type SiteSettings = {
  aboutIntro: string;
  anchorFaith: string;
  serviceTimes: string[];
  address: string;
  contactEmail: string;
  contactPhone: string;
  giving: string;
  hq: string;
  internationalHq: string;
};

export type HeroSlide = {
  title: string;
  subtitle: string;
  image: string;
};

export type Program = {
  title: string;
  date: string;
  description: string;
  location: string;
};

export type Resource = {
  title: string;
  description: string;
  url: string;
};

export type PastorCorner = {
  id: string | number;
  title: string;
  slug: string;
  date: string;
  message: string | string[];
  prayer?: string;
  bibleRef?: string;
  messageBy?: string;
  pastor?: string;
  by?: string;
  tags?: string[];
  tag?: string;
  image?: string;
  make?: string;
  htmlMsg?: string;
  prayerRef?: string;
  excerpt?: string;
  fullContent?: string;
  likes?: number;
  comment?: number;
};

export type PastorMessage = {
  id: string;
  title: string;
  excerpt: string;
  fullContent: string;
  bibleRef?: string;
  messageBy: string;
  date: string;
  comments: number;
  likes: number;
  heroImage?: string;
  image: string;
  prayerRef: string;
  prayer: string;
  tag: string;
  pastor: string;
  make: string;
  message: string | string[];
  slug: string;
  html?: string;
};

export type Album = {
  id: string;
  title: string;
  cover: string;
  images: string[];
};

export type HomePayload = {
  slides: HeroSlide[];
  aboutPS: string;
  programs: Program[];
  resources: Resource[];
  pastorMessages: PastorMessage[];
  salvationVideo: string;
};

export type RawPastorMessage = {
  id: string | number;
  slug?: string;
  title?: string;
  message?: string | string[];
  bibleRef?: string;
  by?: string;
  messageBy?: string;
  date?: string;
  make?: string;
  tags?: string[];
  prayer?: string;
  tag?: string;
  likes?: number;
  comments?: number;
  html?: string;
  htmlMsg?: string;
};


export type RawSiteData = {
  slug: string;
  group: string;
  textShort1?: string;
  textMedium2?: string;
  textShort3?: string;
  [key: string]: string | number | boolean | null | undefined;
};

export type ExtractedInfo = {
  aboutData?: RawSiteData;
  contactUsData?: RawSiteData;
  copyWriteData?: RawSiteData;
  anchorAndFaith: RawSiteData[];
  anchorSequence: (string | number)[];
  upcomingProgSettings?: RawSiteData;
  latestAnchorAndFaith: RawSiteData | [];
  mediaLinks?: RawSiteData;
};

export type RawImageData = {
  imgGroup: string;
  imgPath: string;
  videoClipPath?: string;
  [key: string]: string | number | boolean | null | undefined;
};


