'use client'
import React from "react";
import { motion, Variants } from "framer-motion";

interface AnchorProps {
  text?: string | null | number | boolean;
}

export function Anchor({ text }: AnchorProps) {
  const defaultText = "The Lord will Perfect all that concerns me, thy Mercy O Lord endures forever, Do not forsake the works of your hands";

  const marqueeVariants: Variants = {
    animate: {
      x: ["100%", "-100%"],
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

  return (
    <div className="text-indigo-500 py-2 border-y overflow-hidden w-full min-w-0 max-w-full">
      <motion.h1
        className='inline-block w-max text-lg font-bold italic whitespace-nowrap px-4'
        variants={marqueeVariants}
        animate="animate"
      >
        {text || defaultText}
      </motion.h1>
    </div>
  );
}
