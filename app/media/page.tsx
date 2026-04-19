import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { PlayCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Media | GOFAMINT Ogba",
    description:
        "Watch sermons and explore church media from The Gospel Faith Mission International (GOFAMINT) Pacesetters Assembly, Ogba, Ikeja, Lagos.",
    alternates: {
        canonical: "/media/",
    },
};

export default function MediaPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section 
                className="w-full py-12 text-white text-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/bgroundHome.jpg')" }}
            >
                <div className="container px-4 md:px-6">
                    <Badge variant="outline" className="px-4 py-1 text-yellow-400 border-yellow-400 mb-4">
                        Media Library
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl mb-4">
                        Sermons & Gallery
                    </h1>
                    <p className="max-w-[800px] mx-auto text-slate-300 md:text-xl">
                        Experience the power of God through our recorded services and photo memories.
                    </p>
                </div>
            </section>

            <div className="container px-4 md:px-6 py-12">
                {/* Placeholder for Video/Sermon Section */}
                <h2 className="text-2xl font-bold mb-6">Latest Sermons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Photo Gallery Grid */}
                <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Generating 8 placeholders */}
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="aspect-square bg-slate-200 rounded-md animate-pulse" />
                    ))}
                </div>
            </div>
        </div>
    );
}
