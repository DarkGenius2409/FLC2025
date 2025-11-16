"use client";

import MorphCarousel from "@/components/MorphCarousel";

const sections = [
  {
    title: "Event Verification",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "Looked up event on RoboEvents and the East Forsyth school website to identify the organizer and verify event details.",
    list: [
      "Verified event location at East Forsyth High School",
      "Identified event organizer and details via school website",
    ],
    bgColor: "#FDE68A",
  },
  {
    title: "Permissions & Collaboration",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "Reached out to event organizers and school staff to get permission for interviews and filming.",
    list: [
      "Emailed event organizer to schedule interview",
      "Requested school permission to record footage at the event",
    ],
    bgColor: "#A7F3D0",
  },
  {
    title: "Interview Process & Accuracy",
    image: "/news-broadcast-studio.jpg",
    paragraph:
      "Conducted interviews with students and advisors, ensuring accurate reporting and consent.",
    list: [
      "Interviewed students and advisors at the event with their permission",
      "Collected insights to accurately reflect the event",
    ],
    bgColor: "#BFDBFE",
  },
];

export default function Page() {
  return (
    <MorphCarousel
      title="Research, Accuracy, & Ethical Reporting"
      description="This section highlights how our team verifies events, collaborates with organizers, and conducts accurate interviews."
      sections={sections}
    />
  );
}