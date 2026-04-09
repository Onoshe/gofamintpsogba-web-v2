'use client'
import React from "react";
import { MessageCard } from "@/components/pastor-corner/MessageCard";
import PastorSearchBar from './PastorSearchBar';
import { PastorMessage } from '@/lib/types';


interface PastorCornerClientProps {
    pastorMessages: PastorMessage[];
}

export default function PastorCornerClient({ pastorMessages }: PastorCornerClientProps) {
    const [pastorMessagesDisplay, setPastorMessagesDisplay] = React.useState([...pastorMessages]);


    return (
        <>
            <div className="container mx-auto py-12 px-4 md:px-6">
                <PastorSearchBar
                    setPastorCornerMsgs={setPastorMessagesDisplay}
                    originalMsgs={pastorMessages}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {pastorMessagesDisplay.map((msg, i) => {
                        return (
                            <div key={`${msg.slug}-${i}`} className="w-full max-w-[400px] flex flex-col h-full">
                                <MessageCard data={msg} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}