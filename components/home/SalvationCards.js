'use client'
import React from 'react'
import { useInView } from "framer-motion";
import { ArrowBigRight } from 'lucide-react';



const SalvationCard = ({ photo, topic, transform, transition }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });



    return (
        <div className="flex justify-center mb-5 w-full"
            ref={ref}
            style={{
                transform: isInView ? "translate(0px, 0px)" : transform,
                opacity: isInView ? 1 : 0,
                transition: transition
            }}>

            <div className="rounded-2xl shadow-lg w-full transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl cursor-pointer group">
                <div className='bg-center w-full bg-cover rounded-2xl h-[100px] flex justify-center items-center overflow-hidden'
                    style={{ backgroundImage: `url(${photo})` }}>

                    <div className='relative p-4 bottom-0 w-full h-full flex items-center transition-colors duration-300
                            bg-linear-to-r from-pink-600/85 to-yellow-400/85 group-hover:from-pink-600/95 group-hover:to-yellow-500/95'>

                        <div className='text-[aliceblue] flex font-bold flex-row gap-3 w-full items-center'>
                            <p className='transform transition-transform duration-300 group-hover:translate-x-1'>
                                <ArrowBigRight className='text-[28px] md:text-[32px] drop-shadow-md' color='yellow' />
                            </p>
                            <span className='text-base sm:text-lg md:text-xl drop-shadow-sm leading-tight'>
                                {topic}
                            </span>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}


export default SalvationCard;

