'use client';

import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function AboutSection() {
    const stars = [
        { title: "Going", img: "/five_star/fiveStar1.png" },
        { title: "Glowing", img: "/five_star/fiveStar2.png" },
        { title: "Growing", img: "/five_star/fiveStar3.png" },
        { title: "Groaning", img: "/five_star/fiveStar4.png" },
        { title: "Giving", img: "/five_star/fiveStar5.png" },
    ];

    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % stars.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [stars.length]);

    return (
        <section className="w-full py-16 bg-linear-to-b flex justify-center items-center from-slate-50 to-[#fbf3f2] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

            <div className="container px-4 md:px-6 relative z-10 max-w-[1500px]">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="pl-4 xl:pl-8 space-y-8">
                        <div>
                            <div className="invisible inline-flex items-center gap-2 rounded-full bg-yellow-100/80 px-4 py-1.5 text-sm text-yellow-800 font-bold mb-4 shadow-sm border border-yellow-200">
                                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                <span>Who We Are</span>
                            </div>
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-[#7e1604] mb-4">
                                A <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-600 to-yellow-500">5-Star</span> Church Built on the <span className="text-[#a51c03]">Solid Rock</span>
                            </h2>
                            <p className="text-slate-600 md:text-lg leading-relaxed text-justify mb-2">
                                GOFAMINT Pacesetters Assembly (PS), Ogba, is a vibrant community dedicated to preaching the Word of God.
                                We are positioned to raise a dynamic body of believers. As a 5-Star Church, our foundation is built on five core pillars:
                            </p>
                        </div>

                        {/* 5-Star Cards */}
                        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                            {stars.map((star, index) => {
                                const rotate = ["-rotate-4", "-rotate-1", "-rotate-4", "rotate-1", "-rotate-4"];
                                return (
                                    <FiveStarCard key={index} title={star.title} img={star.img} rotate={rotate[index]} />
                                )
                            })}
                        </div>

                        <div className="pt-2 text-center sm:text-left">
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center px-8 py-3.5 font-semibold text-white transition-all duration-300 bg-linear-to-r from-[#7e1604] to-[#a51c03] rounded-full shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Read Our Full Story
                            </Link>
                        </div>
                    </div>

                    <div className="relative aspect-4/3 lg:aspect-auto lg:h-[600px] w-full group perspective-1000 mt-8 lg:mt-0">
                        {/* Main Image showcasing the 5 Stars via Slider */}
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(165,28,3,0.2)] border-4 border-white bg-slate-100">

                            {/* Sliding Images Container */}
                            <div
                                className="flex w-full h-full transition-transform duration-1000 ease-in-out"
                                style={{ transform: `translateX(-${currentIdx * 100}%)` }}
                            >
                                {stars.map((star, index) => (
                                    <div key={index} className="relative w-full h-full shrink-0 group">
                                        <Image
                                            src={star.img}
                                            alt={`5-Star Church ${star.title}`}
                                            fill
                                            className="object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Gradient Overlay for elegance */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                            <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 text-white pointer-events-none z-10">
                                <h3 className="text-2xl lg:text-3xl font-bold font-serif mb-2 flex items-center gap-3">
                                    Pacesetters Assembly
                                </h3>
                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-md" />
                                    ))}
                                </div>
                                <p className="text-white/90 text-sm sm:text-base font-medium max-w-sm border-l-2 border-yellow-400 pl-3">
                                    Experiencing God&apos;s love and power in our generation.
                                </p>
                            </div>
                        </div>

                        {/* Decorative Badge */}
                        <div className="absolute -top-6 -right-4 lg:-top-8 lg:-right-8 bg-white p-4 lg:p-5 rounded-3xl shadow-xl flex items-center gap-3 transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
                            <div className="bg-yellow-100/80 rounded-full p-2.5 shadow-inner">
                                <Star className="w-8 h-8 fill-yellow-500 text-yellow-500 drop-shadow-sm" />
                            </div>
                            <div className="pr-2">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Positioned</p>
                                <p className="text-sm lg:text-base font-extrabold text-[#7e1604]">For Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FiveStarCard({ title, img, rotate }: { title: string, img: string, rotate: string }) {
    return (
        <div className="group relative flex flex-col items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-xl hover:border-yellow-400 transition-all duration-500 hover:-translate-y-2 w-[calc(50%-0.5rem)] sm:w-[124px] lg:w-[130px] flex-none">
            <div className="absolute inset-0 bg-linear-to-br from-yellow-50/50 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="size-3 fill-yellow-400 text-yellow-400 drop-shadow-md" />
                ))}
            </div>
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-3 z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-md">
                <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </div>

            <h4 className={`transform ${rotate} group-hover:-rotate-12 font-bold text-slate-700 group-hover:text-[#a51c03] transition-colors duration-300 text-[11px] sm:text-xs tracking-widest uppercase z-10`}>
                {title}
            </h4>
        </div>
    )
}
