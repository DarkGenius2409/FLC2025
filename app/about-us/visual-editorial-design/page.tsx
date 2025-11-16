"use client";

import MorphCarousel from "@/components/MorphCarousel";

const sections = [
  {
    title: "Branding & Professionalism",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "Intro and transitions are brand-focused to maintain professionalism and credibility. Vintage filters and consistent colors give the montage a personable, authentic feel.",
    list: [
      "Intro: brand focused, increases professional and credibility",
      "Transitions: maintains consistent branding between clips, fades out at end",
      "Vintage filter on montage: makes it more authentic and personable",
      "Consistent colors",
    ],
    bgColor: "#FDE68A",
  },
  {
    title: "Audience Engagement & Accessibility",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "Captions, lower thirds, and thoughtful pacing help the audience understand the content while engaging a wider audience effectively.",
    list: [
      "Captions: increases accessibility",
      "Lower third: provides context for interviews",
      "Pacing/Flow: understandable and introduces multiple perspectives smoothly",
    ],
    bgColor: "#A7F3D0",
  },
  {
    title: "Storytelling & Impact",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "B-roll visuals and one-word montage outros highlight the storytelling impact and make viewers reflect on robotics’ influence on students.",
    list: [
      "B-roll: visual representation of spoken words",
      "One word montage outro: prompts audience reflection",
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