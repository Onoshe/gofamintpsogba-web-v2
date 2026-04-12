'use client'
import React, { useEffect, useState } from "react";
import { MessageCard } from "@/components/pastor-corner/MessageCard";
import PastorSearchBar from './PastorSearchBar';
import { PastorMessage } from '@/lib/types';
import { getRequest, pastorCornerAPI } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import getPastorCornerMessages from "@/lib/data/pastorCorner";
import { transformPastorMessage } from "@/lib/api";

export default function PastorCornerClient() {
    const [pastorMessagesDisplay, setPastorMessagesDisplay] = useState<PastorMessage[]>([]);
    const [originalMsgs, setOriginalMsgs] = useState<PastorMessage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                // Fetch directly from the browser (bypassing the cPanel server)
                const res = await getRequest(pastorCornerAPI);
                //console.log("PastorCornerAPI- ", res);
                const fetchedMsg = getPastorCornerMessages(res.data || res);
                const finalMessages = Array.isArray(fetchedMsg) ? fetchedMsg.map((item) => transformPastorMessage(item)) : [];

                setOriginalMsgs(finalMessages);
                setPastorMessagesDisplay(finalMessages);
            } catch (err) {
                console.error("Failed to fetch pastor messages:", err);

                // Fallback to local static data in case of failure
                const staticData = getPastorCornerMessages();
                const transformed = Array.isArray(staticData) ? staticData.map(item => transformPastorMessage(item)) : [];
                setOriginalMsgs(transformed);
                setPastorMessagesDisplay(transformed);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            {!loading && (
                <PastorSearchBar
                    setPastorCornerMsgs={setPastorMessagesDisplay}
                    originalMsgs={originalMsgs}
                />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {loading ? (
                    // Loading skeletons
                    Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="w-full max-w-[400px] flex flex-col h-[500px]">
                            <Skeleton className="h-full w-full rounded-xl" />
                        </div>
                    ))
                ) : (
                    pastorMessagesDisplay.map((msg, i) => (
                        <div key={`${msg.slug}-${i}`} className="w-full max-w-[400px] flex flex-col h-full">
                            <MessageCard data={msg} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}