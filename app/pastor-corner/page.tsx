

import { Badge } from "@/components/ui/badge";
import { getPastorMessages } from "@/lib/api";
import PastorCornerClient from "@/components/pastor-corner/PastorCornerClient";



export default async function PastorCorner() {
    const pastorMessages = await getPastorMessages();
    //const pastorMessages = getPastorCornerMessages();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white text-center">
                <div className=" px-4 md:px-6">
                    <Badge variant="outline" className="px-4 py-1 text-yellow-400 border-yellow-400 mb-4">
                        Spiritual Nourishment
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl mb-4">
                        Pastor&apos;s Corner
                    </h1>
                    <p className="max-w-[800px] mx-auto text-slate-300 md:text-xl">
                        Insights, sermons, and messages from our spiritual leaders to guide your daily walk.
                    </p>
                </div>
            </section>

            <PastorCornerClient pastorMessages={pastorMessages} />

        </div>
    );
}
