import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReadPastorCornerClient from "@/components/pastor-corner/ReadPastorCornerClient";
import { pastorCorner } from "@/lib/data/pastorCorner";
import { pastorCornerImgsMap } from "@/public/images/pstCorner/pastorCornerImgs";

export async function generateStaticParams() {
    return pastorCorner.map((msg: { slug: string }) => ({
        id: msg.slug,
    }));
}

interface RawMsg {
    slug: string;
    id?: string | number;
    title?: string;
    tag?: string;
    tags?: string[];
    message?: string | string[];
    bibleRef?: string;
    by?: string;
    messageBy?: string;
    date?: string;
    comments?: number;
    likes?: number;
    prayer?: string;
    message_html?: string;
}

/** Lightweight local transform — no network calls, safe for static export */
function localTransform(item: RawMsg) {
    let messageCont: string[];
    let fullContent: string;

    if (Array.isArray(item.message)) {
        messageCont = item.message;
        fullContent = item.message.join(' ');
    } else {
        const rawMessage = item.message || '';
        fullContent = rawMessage;
        messageCont = rawMessage.includes('|') ? rawMessage.split('|') : [rawMessage];
    }

    const tag = item.tag || (item.tags && item.tags[0]) || 'Grace';
    const imageUrl = pastorCornerImgsMap.get(tag) || pastorCornerImgsMap.get('Grace') || '';

    return {
        id: String(item.slug || item.id),
        slug: item.slug || '',
        make: '',
        message: messageCont,
        title: item.title || 'Untitled Message',
        excerpt: messageCont.join(' ').substring(0, 300).trim() + '...',
        fullContent,
        bibleRef: item.bibleRef || '',
        messageBy: item.by || item.messageBy || 'Pastor',
        date: item.date || '',
        comments: item.comments || 0,
        likes: item.likes || 0,
        image: imageUrl,
        heroImage: imageUrl,
        prayerRef: '',
        prayer: item.prayer || '',
        tag,
        pastor: item.by || item.messageBy || 'Pastor',
        html: item.message_html || '',
    };
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function MessagePage(props: PageProps) {
    const params = await props.params;
    const { id } = params;

    // 1. Try local static data first (fast, always works)
    const rawMsg = pastorCorner.find((msg: { slug: string }) => msg.slug === id) as RawMsg | undefined;

    let message;

    if (rawMsg) {
        // Found in local data — transform directly
        message = localTransform(rawMsg);
    } else {
        // 2. Not in local data — try the live API (handles new messages)
        try {
            const { getPastorMessages } = await import('@/lib/api');
            const allMessages = await getPastorMessages();
            message = allMessages.find((m) => m.slug === id || m.id === id) ?? null;
        } catch {
            message = null;
        }
    }

    if (!message) notFound();
    const { likes = 0, comments = 0 } = message;
    const pastorName = message.pastor || "Pastor";
    const fullContent = message.fullContent || message.message.join(' ');
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
                <ReadPastorCornerClient message={message} id={id} fullContent={fullContent} />
            </div>
        </div>
    );
}
