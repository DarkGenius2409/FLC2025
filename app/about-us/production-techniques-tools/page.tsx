"use client";

import MorphCarousel from "@/components/MorphCarousel";

const sections = [
  {
    title: "Editing & Graphics Tools",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "We used professional tools to ensure the final broadcast maintained high-quality visual and audio standards.",
    list: [
      "Adobe Premiere Pro for editing",
      "Canva for clean, branded graphics",
      "Layered audio and B-roll",
      "Smooth interview cuts",
      "Color adjustments for consistency",
    ],
    bgColor: "#DBEAFE", // lightest blue
  },
  {
    title: "Production Techniques",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "Several editing techniques helped improve pacing, storytelling clarity, and audience engagement.",
    list: [
      "Jump cuts for pacing",
      "Fading background music",
      "Animated text syncing",
      "Reinforcing visuals matched to interviews",
      "Consistent color filters",
    ],
    bgColor: "#93C5FD", // medium blue
  },
  {
    title: "Equipment & Collaboration",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "Our equipment and workflow allowed us to produce the segment efficiently without compromising quality.",
    list: [
      "iPhone 16 for stable 4K footage",
      "RØDE Wireless Micro system",
      "Clear audio in noisy environments",
      "Adobe Creative Cloud sharing",
      "Smooth multi-editor workflow",
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
