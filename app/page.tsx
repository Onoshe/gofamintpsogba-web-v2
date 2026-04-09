import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { Anchor } from "@/components/home/Anchor";
import MapEmbed from "@/components/home/MapEmbed";
import { PastorSection } from "@/components/home/PastorSection";
import { getAboutPS, getPastorMessages } from "@/lib/api";
import UpcomingProgram from "@/components/home/UpcomingProgram";
import SalvationSection from "@/components/home/SalvationSection";


export default async function Home() {

  const siteRes = await getAboutPS();
  //const pastorMessages = await getPastorMessages();
  const faithDacl = siteRes?.siteData?.anchorAndFaith[0]?.textShort2 || "";
  const slidesImg = siteRes?.siteImgs?.home_slides;
  const pastorMessages = await getPastorMessages("homeData");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero slidesImg={slidesImg} />
      <Anchor text={faithDacl} />
      <AboutSection />
      <SalvationSection />
      <PastorSection pastorMessages={pastorMessages} />
      <MapEmbed />
    </div>
  );
}
