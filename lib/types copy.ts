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

export type PastorMessage = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  bibleRef?: string;
  messageBy: string;
  date: string;
  comments: number;
  likes: number;
  heroImage?: string;
};

export type Album = {
  id: string;
  title: string;
  cover: string;
  images: string[];
};

export type HomePayload = {
  slides: HeroSlide[];
  programs: Program[];
  resources: Resource[];
  pastorMessages: PastorMessage[];
  salvationVideo: string;
};
