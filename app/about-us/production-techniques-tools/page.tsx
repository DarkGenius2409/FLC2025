"use client";

import MorphCarousel from "@/components/MorphCarousel";

const sections = [
  {
    title: "Technology & Software",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "Our team uses the latest software to make editing fast, collaborative, and professional.",
    list: [
      "Editing: Adobe Premiere Pro",
      "Graphics: Canva",
      "Collaboration: Adobe Creative Cloud",
    ],
    bgColor: "#DBEAFE", // lightest blue
  },
  {
    title: "Techniques & Effects",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "Storytelling relies on dynamic pacing, B-roll, and creative effects to engage viewers.",
    list: [
      "Jump cuts",
      "Mood-based music",
      "B-roll transitions",
      "Synced animated text",
      "Filters",
    ],
    bgColor: "#93C5FD", // medium blue
  },
  {
    title: "Equipment & Visual Style",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "Consistency in color, typography, and camera angles ensures our broadcasts look polished.",
    list: [
      "Camera: iPhone 16",
      "Microphone: RØDE Wireless Micro",
      "Consistent color & typography",
    ],
    bgColor: "#1D4ED8", // darkest blue
  },
];

export default function Page() {
  return (
    <MorphCarousel
      title="Production Techniques & Tools"
      description="Explore our production techniques, tools, and visual style that make Innovation News Network broadcasts stand out."
      sections={sections}
    />
  );
}
