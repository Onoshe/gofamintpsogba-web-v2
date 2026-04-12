'use client'
import React, { useEffect, useState, Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import ReadPastorCornerClient from "@/components/pastor-corner/ReadPastorCornerClient";
import { pastorCornerAPI, transformPastorMessage, getRequest } from "@/lib/api";
import getPastorCornerMessages from "@/lib/data/pastorCorner";
import { PastorMessage } from "@/lib/types";

function ReadMessageContent() {
    const searchParams = useSearchParams();
    const messageSlug = searchParams.get("message");
    
    const [message, setMessage] = useState<PastorMessage | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!messageSlug) {
            setError(true);
            setLoading(false);
            return;
        }

        const fetchMessage = async () => {
            try {
                // Fetch directly from the browser connecting to DB API
                const res = await getRequest(pastorCornerAPI);
                const fetchedMsg = getPastorCornerMessages(res.data || res);
                
                const found = Array.isArray(fetchedMsg) 
                    ? fetchedMsg.find(m => m.slug === messageSlug || String(m.id) === messageSlug)
                    : null;
                
                if (found) {
                    setMessage(transformPastorMessage(found));
                } else {
                    // Fallback to local static data
                    const staticData = getPastorCornerMessages();
                    const localFound = Array.isArray(staticData) 
                        ? staticData.find(m => m.slug === messageSlug || String(m.id) === messageSlug)
                        : null;
                        
                    if (localFound) {
                        setMessage(transformPastorMessage(localFound));
                    } else {
                        setError(true);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch pastor messages:", err);
                
                // Fallback to local static data
                const staticData = getPastorCornerMessages();
                const localFound = Array.isArray(staticData) 
                    ? staticData.find(m => m.slug === messageSlug || String(m.id) === messageSlug)
                    : null;
                    
                if (localFound) {
                    setMessage(transformPastorMessage(localFound));
                } else {
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchMessage();
    }, [messageSlug]);

    if (loading) {
        return (
            <div className="container py-12 px-4 md:px-6 max-w-4xl mx-auto text-center space-y-4">
                <div className="animate-pulse flex flex-col items-center justify-center space-y-4 pt-12">
                     <div className="h-8 w-32 bg-slate-200 rounded"></div>
                     <div className="h-64 w-full bg-slate-200 rounded-xl"></div>
                     <div className="h-8 w-3/4 bg-slate-200 rounded"></div>
                     <div className="h-4 w-full bg-slate-200 rounded"></div>
                     <div className="h-4 w-full bg-slate-200 rounded"></div>
                     <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
                </div>
            </div>
        );
    }

    if (error || !message) {
        notFound();
    }

    const { likes = 0, comments = 0 } = message;
    const pastorName = message.pastor || "Pastor";
    const fullContent = message.fullContent || (Array.isArray(message.message) ? message.message.join(' ') : message.message);
    const imageUrl = message.image || "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2574&auto=format&fit=crop";
    const tag = message.tag || "Message";

    return (
        <div className="container py-12 px-4 md:px-6 max-w-4xl mx-auto">
            <div className="mb-8">
                <Link href="/pastor-corner">
                    <Button variant="ghost" className="pl-0 cursor-pointer hover:bg-transparent hover:text-primary gap-2">
                        <ArrowLeft className="h-4 w-4" /> Back to Messages
                    </Button>
                </Link>
            </div>

            <div className="space-y-8">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={imageUrl}
                        alt={message.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute top-4 right-4">
                        <Badge className="text-lg py-1 px-4">{tag}</Badge>
                    </div>
                </div>

                <div className="space-y-4 text-center">
                    <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                        <span className="flex items-center gap-2"><User className="h-4 w-4" /> {pastorName}</span>
                        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {message.date}</span>
                        <span className="flex items-center gap-2">
                            <Heart size={16} className={`${likes > 0 ? 'text-yellow-600 fill-yellow-600' : 'text-slate-300'}`} />
                            {likes}
                        </span>
                        <span className="flex items-center gap-2">
                            <MessageCircle size={16} className={`${comments > 0 ? 'text-blue-500 fill-blue-500/10' : 'text-slate-300'}`} />
                            {comments}
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{message.title}</h1>
                    <div className="flex items-center justify-center gap-2 text-yellow-600 font-bold text-lg">
                        <span>{message.bibleRef}</span>
                    </div>
                </div>
                <ReadPastorCornerClient message={message} id={message.id} fullContent={fullContent} />
            </div>
        </div>
    );
}

export default function MessagePage() {
    return (
        <Suspense fallback={
            <div className="container py-12 px-4 text-center">
                <div className="animate-pulse h-8 w-32 bg-slate-200 mx-auto rounded"></div>
            </div>
        }>
            <ReadMessageContent />
        </Suspense>
    );
}
