"use client";

import MorphCarousel from "@/components/MorphCarousel";

const sections = [
  {
    title: "Branding & Consistency",
    image: "/brandih.png",
    paragraph:
      "Our visual design centered on maintaining a clean, cohesive brand that guides viewers through the story without distraction.",
    list: [
      "Consistent color palette",
      "Repeated typography",
      "Matching lower thirds",
      "Unified intro/outro style",
    ],
    bgColor: "#FDE68A",
  },
  {
    title: "B-Roll & Captions",
    image: "/broll.png",
    paragraph:
      "B-roll selection and captions were intentionally designed to support interviews and increase accessibility for all viewers.",
    list: [
      "Robotics matches & behind-the-scenes shots",
      "Reinforces spoken content",
      "Captions for accessibility",
      "More inclusive viewing experience",
      "Smooth transitions for clarity",
    ],
    bgColor: "#A7F3D0",
  },
  {
    title: "Emotional & Editorial Choices",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "We added stylistic elements to elevate viewer engagement and emphasize the human side of robotics.",
    list: [
      "One-word student montage",
      "Vintage filter for authenticity",
      "Documentary-style tone",
      "Balanced pacing of interviews",
      "Highlights student experience",
    ],
    bgColor: "#BFDBFE",
  },
];

export default function Page() {
  return (
    <MorphCarousel
      title="Visual & Editorial Design"
      description="See how our team uses branding, accessibility, and storytelling techniques to create professional, engaging broadcasts."
      sections={sections}
    />
  );
}
