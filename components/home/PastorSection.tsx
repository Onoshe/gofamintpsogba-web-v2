import { MessageCard } from "@/components/pastor-corner/MessageCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { PastorMessage } from "@/lib/types";





export function PastorSection({ pastorMessages }: { pastorMessages: PastorMessage[] }) {
    // Get the 3 most recent messages
    //const latestMessages = [...PASTOR_CORNER_DATA].slice(0, 3);
    const pastorMessagesExtr = pastorMessages.slice(0, 3) || [];

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {/*latestMessages.map((msg, i) => {
                        const headerBg = ["bg-[seagreen]", "bg-[steelblue]", "bg-[tomato]"];
                        return (
                            <div key={msg.id} className="w-full max-w-[400px]">
                                <MessageCard data={msg} headerBg={'bg-slate-400'} />
                            </div>
                        )
                    })*/}

                    {pastorMessagesExtr.map((msg, i) => {
                        return (
                            <div key={msg.slug + i + ''} className="w-full max-w-[400px] flex flex-col h-full">
                                <MessageCard data={msg} headerBg="bg-indigo-500" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
