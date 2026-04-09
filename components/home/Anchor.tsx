'use client'
import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, Variants } from "framer-motion";
import useWindowDimensions from "@/lib/hooks/useWindowDimension";

interface AnchorProps {
  text?: string | null | number | boolean;
}

export function Anchor({ text }: AnchorProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { width } = useWindowDimensions();
  const [elWidth, setElWidth] = useState(0);


  const defaultText = "The Lord will Perfect all that concerns me, thy Mercy O Lord endures forever, Do not forsake the works of your hands";

  const marqueeVariants: Variants = {
    animate: {
      x: [width ?? 0, -(elWidth) || -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  useLayoutEffect(() => {
    if (ref.current) {
      setElWidth(ref.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      className="text-indigo-500 py-2 border-y overflow-hidden"
      variants={marqueeVariants}
      animate="animate"
    >
      <h1 ref={ref} className='w-fit text-lg font-bold italic whitespace-nowrap px-4'>
        {text || defaultText}
      </h1>
    </motion.div>
  );
}

