import { API_BASE } from '@/lib/config';
import type { Album, HomePayload, PastorMessage, SiteSettings, ExtractedInfo, RawSiteData, RawPastorMessage, RawImageData } from '@/lib/types';
import { sortArrayByKey } from './sortArrayByKey';
import getPastorCornerMessages from './data/pastorCorner';


export const pastorCornerAPI = "https://psogbaasset.gofamintpsogba.org.ng/official_site.php?t=official_site_pastorcorner";
export const siteDataUrl = "https://psogbaasset.gofamintpsogba.org.ng/official_site.php?t=official_site_data";
const imgUrl = "https://psogbaasset.gofamintpsogba.org.ng/official_site.php?t=official_site_images";
export const baseUrlAsset = "https://psogbaasset.gofamintpsogba.org.ng";
export const baseUrlPhp = "https://phpserver.gofamintpsogba.org.ng";
const DB_TOKEN = "GOFAMINT_PS_OGBA_WEB";
export const baseUrl = 'https://gofamintpsogba.org.ng';

async function fetchJson<T>(path: string): Promise<T> {
  if (!API_BASE) {
    throw new Error('API_BASE_NOT_SET');
  }
  const res = await fetch(`${API_BASE}${path}`, { cache: 'force-cache' });
  if (!res.ok) {
    throw new Error(`API_${res.status}`);
  }
  return (await res.json()) as T;
}

const mockSettings: SiteSettings = {
  aboutIntro:
    'GOFAMINT Pacesetters Ogba is a vibrant worship community anchored in faith, love, and transformational discipleship.',
  anchorFaith:
    'We are rooted in the Word, empowered by the Spirit, and committed to raising kingdom pacesetters across generations.',
  serviceTimes: ['Sunday Worship 8:00 AM', 'Midweek Service 6:00 PM'],
  address: 'Plot 10, Community Road, Ogba, Lagos',
  contactEmail: 'feedback@gofamintpsogba.org.ng',
  contactPhone: '+234 800 000 0000',
  giving: 'Tithes, offerings, and project giving are accepted via bank transfer and on-site giving.',
  hq: 'Gospel Faith Mission Int\'l HQ, 36 Opebi Road, Ikeja, Lagos',
  internationalHq: 'Gospel Faith Mission Int\'l Intl HQ, Faith Avenue, Maryland, USA'
};

const mockHome: HomePayload = {
  slides: [
    {
      title: 'A people of worship and purpose',
      subtitle: 'Join us this Sunday as we gather in faith and hope.',
      image: '/images/slide-1.svg'
    },
    {
      title: 'Growing together in the Word',
      subtitle: 'Pastor\'s Corner messages are available weekly.',
      image: '/images/slide-2.svg'
    },
    {
      title: 'Community that carries you',
      subtitle: 'Connect with ministry teams and discipleship groups.',
      image: '/images/slide-3.svg'
    }
  ],
  aboutPS: "GOFAMINT Pacesetters Assembly, Ogba, is more than just a church; we are a vibrant community dedicated to preaching the Word of God to the world. Founded on the mandate of Jesus Christ, we strive to transform lives through the power of the Gospel.",
  programs: [
    {
      title: 'Easter Praise Night',
      date: 'April 21, 2026',
      description: 'A night of worship, prayer, and celebration.',
      location: 'Main Sanctuary'
    },
    {
      title: 'Youth Hangout',
      date: 'April 25, 2026',
      description: 'Faith, music, and mentorship for teenagers.',
      location: 'Youth Hall'
    }
  ],
  resources: [
    {
      title: 'Weekly Study Guide',
      description: 'Download the guide for small groups and personal study.',
      url: '#'
    },
    {
      title: 'Prayer Journal',
      description: 'Track prayer requests and testimonies.',
      url: '#'
    }
  ],
  pastorMessages: [
    {
      id: 'faith-for-today',
      slug: 'faith-for-today',
      make: '',
      message: ['Faith is the currency of the kingdom. In this message we explore how to stand firm, keep praying, and trust God\'s timing.'],
      title: 'Faith for Today',
      excerpt: 'Faith is not passive; it is active trust in God\'s promises.',
      fullContent: 'Faith is the currency of the kingdom. In this message we explore how to stand firm, keep praying, and trust God\'s timing.',
      bibleRef: 'Hebrews 11:1',
      messageBy: 'Pst. Tunde A.',
      date: 'March 30, 2026',
      comments: 12,
      likes: 42,
      heroImage: '/images/pastor-1.svg',
      image: '/images/pastor-1.svg',
      prayerRef: 'Psalm 23:1',
      prayer: 'Lord, strengthen my faith today.',
      tag: 'Faith',
      pastor: 'Pst. Tunde A.',
      html: ''
    },
    {
      id: 'anchored-in-love',
      slug: 'anchored-in-love',
      make: '',
      message: ['Anchoring your heart in God\'s love keeps you steady through storms and seasons.'],
      title: 'Anchored in Love',
      excerpt: 'Love is our compass and our witness.',
      fullContent: 'Anchoring your heart in God\'s love keeps you steady through storms and seasons.',
      bibleRef: '1 Corinthians 13',
      messageBy: 'Pst. Folake O.',
      date: 'March 23, 2026',
      comments: 9,
      likes: 31,
      heroImage: '/images/pastor-2.svg',
      image: '/images/pastor-2.svg',
      prayerRef: '1 John 4:8',
      prayer: 'Lord, help me to love like You.',
      tag: 'Love',
      pastor: 'Pst. Folake O.',
      html: ''
    }
  ],
  salvationVideo: 'https://www.youtube.com/embed/5qap5aO4i9A'
};

const mockAlbums: Album[] = [
  {
    id: 'worship-day',
    title: 'Worship Day',
    cover: '/images/gallery-1.svg',
    images: ['/images/gallery-1.svg', '/images/gallery-2.svg', '/images/gallery-3.svg']
  },
  {
    id: 'youth-fellowship',
    title: 'Youth Fellowship',
    cover: '/images/gallery-4.svg',
    images: ['/images/gallery-4.svg', '/images/gallery-5.svg', '/images/gallery-6.svg']
  }
];

export async function getAboutPS(useToken?: boolean) {
  const response = await getRequest(siteDataUrl, useToken);
  const imgs = await getRequest(imgUrl, useToken);
  const siteImgs = groupUrl(imgs?.data);
  if (response?.data) {
    const siteData = getExtractInfo(response?.data);

    return { siteData, siteImgs };
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    return await fetchJson<SiteSettings>('/site');
  } catch {
    return mockSettings;
  }
}

export async function getHomePayload(): Promise<HomePayload> {
  try {
    return await fetchJson<HomePayload>('/home');
  } catch {
    return mockHome;
  }
}

import { pastorCornerImgsMap } from '@/public/images/pstCorner/pastorCornerImgs';

export function transformPastorMessage(item: RawPastorMessage, type?: string): PastorMessage {
  // If the message contains '|', we use the first part as excerpt, otherwise we take a slice
  const isHomeData = type === "homeData";
  let messageCont: string[];
  let fullContent: string;

  if (Array.isArray(item.message)) {
    messageCont = item.message;
    fullContent = item.message.join(' ');
  } else {
    const rawMessage = item.message || '';
    fullContent = rawMessage;
    messageCont = rawMessage.includes('|')
      ? rawMessage.split('|') : [rawMessage];
  }

  const messageStr = messageCont.join(' ');

  const bibleRefClean = item.bibleRef ? item.bibleRef.trim() : '';
  const bibleRefLen = bibleRefClean.length;


  let homeExcerpt = messageStr.substring(0, 180).trim() + '...';
  let bibleRefExcerpt = bibleRefClean;

  let excerptLen = 350;
  if (bibleRefLen > 50) {
    if (bibleRefLen < 100) {
      excerptLen = 200;
    } else if (bibleRefLen < 200) {
      excerptLen = 150;
    } else {
      excerptLen = 100;
    }
  }

  if (bibleRefLen) {
    if (bibleRefLen > 150) {
      bibleRefExcerpt = bibleRefClean.substring(0, 100).trim() + '...';
      homeExcerpt = messageStr.substring(0, 100).trim() + '...';
    } else {
      homeExcerpt = messageStr.substring(0, 150).trim() + '...';
    }
  }

  const excerpt = messageStr.substring(0, excerptLen).trim() + '...'

  const tag = item.tag || (item.tags && item.tags[0]) || 'Grace';
  const displayTag = item.tag || (item.tags && item.tags[0]) || 'Message';
  const imageUrl = pastorCornerImgsMap.get(tag) || pastorCornerImgsMap.get('Grace') || '';

  return {
    id: String(item.slug || item.id),
    make: item.make || "",
    message: messageCont,
    slug: item.slug || "",
    title: item.title || 'Untitled Message',
    excerpt: isHomeData ? homeExcerpt : excerpt,
    fullContent: fullContent,
    bibleRef: isHomeData ? bibleRefExcerpt : item.bibleRef || '',
    messageBy: item.by || item.messageBy || 'Pastor',
    date: item.date || new Date().toISOString().split('T')[0],
    comments: item.comments || 0,
    likes: item.likes || 0,
    image: imageUrl,
    prayerRef: '',
    prayer: item.prayer || '',
    tag: displayTag,
    pastor: item.by || item.messageBy || 'Pastor',
    heroImage: imageUrl,
    html: item.html || ""
  };
}


export async function getPastorMessages(type?: string): Promise<PastorMessage[]> {
  try {
    const res = await getRequest(pastorCornerAPI);
    const data = res?.data || res;
    const pastorMsg = getPastorCornerMessages(data);
    if (Array.isArray(pastorMsg)) {
      return pastorMsg.map((item) => transformPastorMessage(item, type));
    }
    return mockHome.pastorMessages;
  } catch (err) {
    console.error("Failed to fetch pastor messages:", err);
    return mockHome.pastorMessages;
  }
}

export async function getPastorMessage(id: string): Promise<PastorMessage | null> {
  try {
    // Since the API returns a list, find the one with matching slug/id
    const messages = await getPastorMessages();
    return messages.find((item) => item.id === id) ?? null;
  } catch {
    return mockHome.pastorMessages.find((item) => item.id === id) ?? null;
  }
}

export async function getAlbums(): Promise<Album[]> {
  try {
    return await fetchJson<Album[]>('/media');
  } catch {
    return mockAlbums;
  }
}



export function getExtractInfo(data: RawSiteData[] = []): ExtractedInfo {
  const aboutSlug = 'about-gofamint-ps-ogba';
  const contactUsSlug = 'contact-us-details';
  const copyWriteSlug = 'copy-write-year';
  const anchorGroup = 'AnchorAndFaithDeclaration';
  const upcomingProgSlug = 'upcoming-program-settings';
  const mediaLink = 'footer-social-media-link';
  const advertControl = 'home_slides_advert_image_control';
  const aboutData = data?.find((dt) => dt.slug === aboutSlug);
  const contactUsData = data?.find((dt) => dt.slug === contactUsSlug);
  const copyWriteData = data?.find((dt) => dt.slug === copyWriteSlug);
  const upcomingProgSettings = data?.find((dt) => dt.slug === upcomingProgSlug);
  const mediaLinks = data?.find((dt) => dt.slug === mediaLink);
  const advertControlData = data?.find((dt) => dt.slug === advertControl);

  const anchorAndFaith = data?.filter((dt) => dt.group === anchorGroup) || [];
  sortArrayByKey(anchorAndFaith, 'textShort1', 'ASC');

  const anchorSequence: (string | number)[] = [];
  const latestAnchorAndFaith = anchorAndFaith[0] || [];
  const anchorArr = (latestAnchorAndFaith as RawSiteData)?.textMedium2?.split("|") || [];
  const anchorAniTimeArr = (latestAnchorAndFaith as RawSiteData)?.textShort3?.split("|") || [];


  anchorArr.forEach((el, i) => {
    anchorSequence.push(el);
    anchorSequence.push(parseInt(anchorAniTimeArr[i]) || 1000);
  });

  return {
    aboutData, contactUsData, copyWriteData, anchorAndFaith,
    anchorSequence, upcomingProgSettings, latestAnchorAndFaith, mediaLinks, advertControlData
  }
}


export const getRequest = async (url: string, useToken?: boolean) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": useToken ? `Bearer ${process.env.DB_TOKEN}` : DB_TOKEN
      },
      cache: 'no-store' // ✅ better than cache: 'force-cache'
    });
    if (!res.ok) console.log(`API_ERROR_${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    return { ok: false, error: err, data: [] };
  }
};


export const postRequest = async (url: string, body?: Record<string, unknown> | unknown) => {
  try {
    const headers: HeadersInit = {
      "Authorization": DB_TOKEN
    };

    if (body) {
      headers["Content-Type"] = "application/json";
    }

    const res = await fetch(url, {
      method: "POST",
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    //console.log(res);
    if (!res.ok) return ({ ok: false, data: [], error: `API_ERROR_${res}` });
    const data = await res.json();
    return data;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    return { ok: false, message: "post-email failed", error: errorMessage };
  }
};


export function groupUrl(data: RawImageData[] | null | undefined, key: 'imgGroup' | 'folder' = 'imgGroup'): Record<string, RawImageData[]> {
  const result: Record<string, RawImageData[]> = {};
  if (!data || !Array.isArray(data)) return result;

  data.forEach((item) => {
    const groupValue = (item[key] as string) || 'uncategorized';
    if (!result[groupValue]) {
      result[groupValue] = [];
    }
    result[groupValue].push({
      ...item,
      imgPath: item.imgPath ? (item.imgPath.startsWith('http') ? item.imgPath : `${baseUrlAsset}/${item.imgPath}`) : '',
    });
  });
  return result;
}



export function getUrl(data: RawImageData[] | null | undefined, imgGroup: string, type: string): string[] | RawImageData[] {
  let dataFmt: string[] | RawImageData[] = [];
  if (data?.length) {
    dataFmt = type === 'url' ? [] : [];
    const dataFilter = data.filter((dt) => dt.imgGroup === imgGroup);
    for (let index = 0; index < dataFilter.length; index++) {
      const el = dataFilter[index];
      if (type === 'url') {
        (dataFmt as string[]).push(baseUrlAsset + '/' + el.imgPath);
      } else {
        (dataFmt as RawImageData[]).push({ ...el, imgPath: baseUrlAsset + '/' + el.imgPath })
      }
    }
  }
  return dataFmt;
}

export function getVideoUrl(data: RawImageData[] | null | undefined, imgGroup: string): string[] {
  let dataFmt: string[] = [];
  if (data?.length) {
    dataFmt = [];
    const dataFilter = data.filter((dt) => dt.imgGroup === imgGroup);
    for (let index = 0; index < dataFilter.length; index++) {
      const el = dataFilter[index];
      if (el.videoClipPath) {
        dataFmt.push(baseUrlAsset + '/' + el.videoClipPath);
      }
    }
  }
  return dataFmt;
}

export function getUrlMediaPage(data: RawImageData[] | null | undefined): RawImageData[] {
  let dataFmt: RawImageData[] = [];
  if (data?.length) {
    dataFmt = [];
    for (let index = 0; index < data.length; index++) {
      const el = data[index];
      dataFmt.push({ ...el, imgPath: baseUrlAsset + '/' + el.imgPath })
    }
  }

  return dataFmt;
}