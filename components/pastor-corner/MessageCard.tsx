import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, BookOpen, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";


import { PastorMessage } from "@/lib/types";
import { pastorCornerImgsMap } from "@/public/images/pstCorner/pastorCornerImgs";

export function MessageCard({ data, headerBg }: { data: PastorMessage, headerBg?: string }) {
    const { likes = 0, comments = 0 } = data;
    const pastorName = data.pastor || "Pastor";
    const imageUrl = data.image || pastorCornerImgsMap.get("Grace") || "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2574&auto=format&fit=crop";
    const excerpt = data.excerpt;
    const tag = data.tag || "Message";


    return (
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group p-0 gap-0 border-none bg-white shadow-md">
            <div className={`h-8 w-full shrink-0 ${headerBg || "bg-yellow-500"}`} />
            <div className="relative h-48 w-full overflow-hidden shrink-0">
                <Image
                    src={imageUrl}
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay AFTER Image */}
                <div
                    id={`card-overlay-${data.id}`}
                    className="absolute inset-0 bg-slate-600/40 z-10 pointer-events-none"
                ></div>
                <div className="absolute top-2 right-2 z-30">
                    <Badge variant="secondary" className="bg-white/90 text-black backdrop-blur-sm">
                        {tag}
                    </Badge>
                </div>

            </div>

            <CardHeader className="space-y-2 py-6 pb-0">
                <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {pastorName}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {data.date}</span>
                </div>
                <Link href={`/pastor-corner/${data.slug}`}>
                    <h3 className="font-bold text-xl leading-tight hover:text-primary cursor-pointer">
                        {data.title}
                    </h3>
                </Link>
                <div className="w-full flex flex-col border-t border-slate-100">
                    <div className="flex flex-row justify-between items-center h-8">
                        <div className="flex items-center">
                            <BookOpen className={`${data.bibleRef && data.bibleRef.length > 1 ? 'text-yellow-600' : 'text-slate-300'} h-5 w-5 `} />
                        </div>
                        <div className="flex flex-row justify-end items-center text-slate-500">
                            <div className="flex items-center">
                                <Heart size={20} className={`${likes > 0 ? 'text-yellow-600 fill-yellow-600' : 'text-slate-300'}`} />
                                <span className="px-2 pr-5 font-semibold text-sm">{likes}</span>
                            </div>
                            <div className="flex items-center">
                                <MessageCircle size={20} className={`${comments > 0 ? 'text-blue-500 fill-blue-500/10' : 'text-slate-300'}`} />
                                <span className="px-2 font-semibold text-sm">{comments}</span>
                            </div>
                        </div>
                    </div>
                    {data.bibleRef && data.bibleRef.length > 1 && (
                        <div className="flex items-center gap-2 text-sm text-yellow-600 font-medium">
                            <span className="">{data.bibleRef}</span>
                        </div>
                    )}
                </div>
            </CardHeader>

            <CardContent className="pb-6 pt-4 px-6 grow">
                <p className={`text-slate-600 text-sm leading-relaxed`}>
                    {excerpt}
                </p>
            </CardContent>

            <CardFooter className="p-6 pt-0 pb-7 mt-auto">
                <Link href={`/pastor-corner/${data.slug}`} className="w-full cursor-pointer">
                    <Button variant="outline" className="cursor-pointer w-full text-primary border-primary/20 hover:bg-primary/5 transition-colors duration-300">
                        Read Message
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
