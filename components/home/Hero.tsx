'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import type { RawImageData } from "@/lib/types";




export function Hero({ slidesImg }: { slidesImg?: RawImageData[] }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const defaultBg = 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop';
    const images = slidesImg?.length ? slidesImg.map(img => img.imgPath) : [defaultBg];
    //console.log(slidesImg);

    // ✅ Define which slide indexes should use "advert" (full-image) mode.
    // e.g. new Set([1, 3]) means slide index 1 and 3 are adverts.
    const advertSlots = new Set<number>([]);

    // ✅ Derived directly from state — never stale
    const isAdvert = advertSlots.has(currentSlideIndex);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [images.length]);

    const bgImage = images[currentSlideIndex];

    const opacityInt = isAdvert ? 1 : 0;
    const opacityAnimate = isAdvert ? 1 : 0.4;
    const opacityExit = isAdvert ? 1 : 0;


    return (
        <section className={`relative w-full py-12 md:py-24 lg:py-32 xl:py-48 ${isAdvert ? '' : 'bg-slate-900'} flex items-center justify-center overflow-hidden`}>
            {/* Persistent Background to prevent blank transition */}
            <div
                className={`absolute z-0 bg-cover bg-center ${isAdvert ? 'hidden' : 'inset-0 opacity-20'}`}
                style={{
                    backgroundImage: `url('${defaultBg}')`
                }}
            />

            {/* Sliding Backgrounds */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlideIndex}
                    initial={{ opacity: opacityInt, scale: 1.5 }}
                    animate={{ opacity: opacityAnimate, scale: 1 }}
                    exit={{ opacity: opacityExit }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${bgImage}')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className={`absolute z-0 ${isAdvert ? '' : 'inset-0 bg-linear-to-t from-slate-900 via-slate-900/30 to-transparent'}`} />

            <div className={`container px-4 md:px-6 relative z-10 text-center space-y-6 ${isAdvert ? 'invisible' : ''}`}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white max-w-3xl mx-auto">
                    Welcome to <span className="text-yellow-400">GOFAMINT</span> Pacesetters Assembly
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-200 md:text-xl font-light">
                    {"Experience God's presence, power, and purpose in a family-oriented community."}
                </p>
                <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button size="lg" className="text-lg px-8 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold" asChild>
                        <Link href="/contact-us">
                            Plan Your Visit
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 border-white text-slate-900 hover:bg-white hover:text-blue-900" asChild>
                        <Link href="/pastor-corner">
                            {"Pastor's Corner"}
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
