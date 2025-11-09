"use client";

import Link from "next/link";
import React from "react";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { link } from "fs";

export function LearnMoreSection() {
  const topics = [
    {
      id: 1,
      title: "Visual & Editorial Design",
      link: "/more-info/visual-editorial-design",
      description:
        "Competition's top stories including team interviews, coach interviews, and event planner interviews.",
      thumbnail: "/news-broadcast-studio.jpg",
    },
    {
      id: 2,
      title: "Production Techniques & Tools",
      link: "/more-info/production-techniques-tools",
      description:
        "An in-depth investigation into emerging global trends and their implications.",
      thumbnail: "/investigative-journalism-broadcast.jpg",
    },
    {
      id: 3,
      title: "Research, Accuracy & Ethical Reporting",
      link: "/more-info/research-accuracy-ethics",
      description:
        "Global coverage of major news events from around the world.",
      thumbnail: "/world-news-broadcast.jpg",
    },
  ];

  const [expandedId, setExpandedId] = React.useState<number | null>(null);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">LEARN MORE</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link href={topic.link} key={topic.id}>
              <div
                key={topic.id}
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() =>
                  setExpandedId(expandedId === topic.id ? null : topic.id)
                }
              >
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={topic.thumbnail || "/placeholder.svg"}
                    alt={topic.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-8 h-8 text-accent fill-current ml-1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4">
                  <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-gray-300 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {topic.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
