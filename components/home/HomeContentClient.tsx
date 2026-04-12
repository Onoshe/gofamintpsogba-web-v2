'use client'
import React, { useEffect, useState } from "react";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { Anchor } from "@/components/home/Anchor";
import MapEmbed from "@/components/home/MapEmbed";
import { PastorSection } from "@/components/home/PastorSection";
import SalvationSection from "@/components/home/SalvationSection";
import { getAboutPS } from "@/lib/api";


export default function HomeContentClient() {
    const [siteRes, setSiteRes] = useState<Awaited<ReturnType<typeof getAboutPS>> | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Because this runs in the browser, it sends 'Origin' and fetches Live data without tokens!
                const res = await getAboutPS(false);
                setSiteRes(res);
            } catch (err) {
                console.error("Failed to fetch site data dynamically:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const faithDacl = siteRes?.siteData?.anchorAndFaith?.[0]?.textShort2 || "";
    const slidesImg = siteRes?.siteImgs?.home_slides || [];

    //console.log(siteRes);

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen pt-24 text-center">
                <div className="w-full h-[60vh] bg-slate-200 animate-pulse"></div>
                <div className="w-full h-16 bg-slate-300 animate-pulse mt-1"></div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Hero slidesImg={slidesImg} />
            <Anchor text={faithDacl} />
            <AboutSection />
            <SalvationSection />
            <PastorSection />
            <MapEmbed />
        </div>
    );
}
