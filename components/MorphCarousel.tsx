"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSection {
  title: string;
  image: string;
  paragraph: string;
  list: string[];
  bgColor: string;
}

interface MorphCarouselProps {
  title: string;
  description: string;
  sections: CarouselSection[];
  className?: string;
}

export default function MorphCarousel({
  title,
  description,
  sections,
  className = "",
}: MorphCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = sections[index];

  const handleNext = () => setIndex((prev) => (prev + 1) % sections.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + sections.length) % sections.length);

  return (
    <div className="relative w-full flex flex-col items-center px-6 pt-16 min-h-screen bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:16px_16px] h-full"></div>

      {/* Header */}
      <div className="text-center mb-12 z-10">
        <h1 className="text-4xl font-black mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-7xl h-[520px] flex items-center justify-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? 100 : -100,
              scale: 0.95,
            }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className={`bg-white border-muted border-4 absolute inset-0 rounded-2xl overflow-hidden flex flex-col md:flex-row w-full ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            style={{ boxShadow: `0 25px 50px -12px ${current.bgColor}80` }}
          >
            {/* Image */}
            <motion.img
              src={current.image}
              alt={current.title}
              className="w-full md:w-2/5 h-64 md:h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            />

            {/* Text */}
            <div className="p-10 flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
                {current.title}
              </h2>
              <p className="text-muted-foreground mb-6 text-lg md:text-xl">
                {current.paragraph}
              </p>

              <ul className="space-y-3 text-lg md:text-xl text-muted-foreground">
                {current.list.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12 }}
                    className="list-disc list-inside"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex gap-4 my-8 z-10">
        <button
          onClick={handlePrev}
          className="cursor-pointer flex-1 bg-accent/90 text-white px-6 py-2 rounded-lg shadow hover:bg-accent transition flex items-center justify-center gap-2"
        >
          <ChevronLeft />
          Previous
        </button>
        <button
          onClick={handleNext}
          className="cursor-pointer flex-1 bg-accent/90 text-white px-6 py-2 rounded-lg shadow hover:bg-accent transition flex items-center justify-center gap-2"
        >
          Next
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
