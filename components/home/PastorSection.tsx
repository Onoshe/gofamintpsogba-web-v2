'use client'
import { useState, useEffect } from "react";
import { MessageCard } from "@/components/pastor-corner/MessageCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { PastorMessage } from "@/lib/types";
import { getRequest, pastorCornerAPI, transformPastorMessage } from "@/lib/api";
import getPastorCornerMessages from "@/lib/data/pastorCorner";

export function PastorSection() {
    const [messages, setMessages] = useState<PastorMessage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                // Fetch directly from the browser connecting to DB API
                const res = await getRequest(pastorCornerAPI);
                const fetchedMsg = getPastorCornerMessages(res.data || res);
                const formattedMessages = Array.isArray(fetchedMsg)
                    ? fetchedMsg.map((item) => transformPastorMessage(item, "homeData")).slice(0, 3)
                    : [];

                setMessages(formattedMessages);
            } catch (err) {
                console.error("Failed to fetch pastor messages for home:", err);
                // Fallback to local
                const staticData = getPastorCornerMessages();
                const fallback = Array.isArray(staticData)
                    ? staticData.map(item => transformPastorMessage(item, "homeData")).slice(0, 3)
                    : [];
                setMessages(fallback);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    return (
        <section className="w-full py-16 md:py-24 bg-[#e6e3fb]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="max-w-[700px]">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-2">
                            Pastor&apos;s Corner
                        </h2>
                        <h3 className="text-xl font-semibold text-primary mb-4">
                            Latest messages.
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Weekly insights, faith-building reflections, and encouragement from our pastors to help you walk in your divine purpose.
                        </p>
                    </div>
                    <Link href="/pastor-corner" className="cursor-pointer">
                        <Button className="group bg-slate-900 cursor-pointer hover:bg-slate-800 text-white py-6 h-auto text-base rounded-full transition-all duration-300">
                            View all Messages
                            <ChevronRight className=" transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {loading ? (
                        Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="w-[85vw] sm:w-[350px] shrink-0 snap-center md:w-full md:max-w-[400px] flex flex-col h-[400px]">
                                <Skeleton className="h-full w-full rounded-xl" />
                            </div>
                        ))
                    ) : (
                        messages.map((msg, i) => (
                            <div key={msg.slug + i + ''} className="w-[85vw] sm:w-[350px] shrink-0 snap-center md:w-full md:max-w-[400px] flex flex-col h-full">
                                <MessageCard data={msg} headerBg="bg-indigo-500" />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
