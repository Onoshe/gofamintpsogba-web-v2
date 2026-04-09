'use client'
import { PastorMessage } from '@/lib/types';
import { MessageShare } from "@/components/pastor-corner/MessageShare";
import { SocialMediaShare } from "@/components/pastor-corner/SocialMediaShare";



interface PastorCornerClientProps {
    message: PastorMessage;
    id: string;
    fullContent: string;
}


export default function ReadPastorCornerClient({ message, fullContent, id }: PastorCornerClientProps) {
    //console.log(message);


    return (
        <>
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">

                {message?.html ?
                    <div className='mb-7 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-primary'
                        dangerouslySetInnerHTML={{ __html: message.html }}>
                    </div>
                    :
                    <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-primary">
                        {fullContent}
                    </p>
                }
            </div>

            {message.prayer && <div className="bg-slate-50 border-l-4 border-l-primary p-6 rounded-r-lg italic text-slate-600">
                <h3 className="font-bold text-lg mb-2 text-primary not-italic">Prayer Point</h3>
                &quot;{message.prayer}&quot;
            </div>}
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Share this message:</p>
            {/*<MessageShare title={message.title} />*/}
            <SocialMediaShare topic={message.title} id={id} />
        </>
    );
}