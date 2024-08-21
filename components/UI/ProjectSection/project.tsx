"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/libs/utils";
import { projectItems } from "./constants";

const ProjectSection = () => {
  return (
    <section className=" py-36 bg-black">
      <div className="container mx-auto px-2">
      <h2 className="text-4xl font-bold text-white text-center mb-8">What We’ve Built</h2>
        <div className="grid grid-cols-4 md:grid-cols-5 gap-4 md:gap-4 py-14">
          {projectItems.map((item, index) => (
            <WobbleCard 
              key={index} 
              className={cn(
                item.size.replace(/aspect-\[.*?\]|aspect-square/, ''), 
                item.bgColor,
                'h-[350px] md:h-[400px]'  // Fixed height
              )}
            >
              <div className="p-3 md:p-4 flex flex-col h-full">
                <h3 className="text-sm md:text-base font-bold text-white leading-tight mb-1">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-white/80 text-xs leading-snug line-clamp-3">
                    {item.description}
                  </p>
                )}
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const WobbleCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 30;
    const y = (clientY - (rect.top + rect.height / 2)) / 30;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
          : "translate3d(0px, 0px, 0)",
        transition: "transform 0.2s ease-out",
      }}
      className={cn(
        "relative rounded-xl overflow-hidden shadow-md",
        className
      )}
    >
      <Noise />
      {children}
    </motion.div>
  );
};

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: "url(/images/noise.webp)",
        backgroundSize: "150px 150px",
      }}
    ></div>
  );
};

export default ProjectSection;