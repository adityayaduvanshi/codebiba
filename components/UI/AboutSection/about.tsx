"use client";

import React, { useEffect } from "react";
import { cn } from "@/libs/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  const titleWords = [
    { text: "Why", className: "" },
    { text: "Choose", className: "" },
    { text: "Us", className: "" },
  ];

  // Typewriter Effect Function
  const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
  }: {
    words: {
      text: string;
      className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
  }) => {
    const wordsArray = words.map((word) => {
      return {
        ...word,
        text: word.text.split(""),
      };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
      if (isInView) {
        animate(
          "span",
          {
            display: "inline-block",
            opacity: 1,
            width: "fit-content",
          },
          {
            duration: 0.3,
            delay: stagger(0.1),
            ease: "easeInOut",
          }
        );
      }
    }, [isInView]);

    const renderWords = () => {
      return (
        <motion.div ref={scope} className="inline">
          {wordsArray.map((word, idx) => {
            return (
              <div key={`word-${idx}`} className="inline-block">
                {word.text.map((char, index) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    key={`char-${index}`}
                    className={cn(
                      `dark:text-white text-white opacity-0 hidden text-[4rem]`,
                      word.className
                    )}
                  >
                    {char}
                  </motion.span>
                ))}
                &nbsp;
              </div>
            );
          })}
        </motion.div>
      );
    };

    return (
      <div
        className={cn(
          "text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-center",
          className
        )}
      >
        {renderWords()}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block rounded-sm w-[4px] h-6 md:h-6 lg:h-10 bg-blue-500",
            cursorClassName
          )}
        ></motion.span>
      </div>
    );
  };

  return (
    <section className="flex items-center justify-between py-32 bg-black px-32">
      {/* Placeholder for the image */}
      <div className="w-1/2">
        <Image
          src="/svg/about.svg" 
          alt="About Us"
          width={700}
          height={400}
        />
      </div>

      {/* Text Content */}
      <div className="w-1/2 pl-8">
        <TypewriterEffect
          words={titleWords}
          className="text-2xl font-semibold text-white mb-4 pt-4"
        />
        <p className="text-white mb-6 font-normal pt-5 text-md">
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero
          facilisis hendrerit a at. Nisi sem ut sed faucibus at eu elit. Morbi
          aliquam porttitor mattis consequat neque, tellus blandit.
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero
          facilisis hendrerit a at. Nisi sem ut sed faucibus at eu elit. Morbi
          aliquam porttitor mattis consequat neque, tellus blandit.
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero
          facilisis hendrerit a at. Nisi sem ut sed faucibus at eu elit. Morbi
          aliquam porttitor mattis consequat neque, tellus blandit.
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero
          facilisis hendrerit a at. Nisi sem ut sed faucibus at eu elit. Morbi
          aliquam porttitor mattis consequat neque, tellus blandit.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;