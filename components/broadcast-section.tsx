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

export function BroadcastSection() {
  const broadcasts = [
    {
      id: 1,
      title: "Vex V5 October Qualifier Match",
      date: "October 18, 2025",
      duration: "2:57",
      description:
        "Competition's top stories including team interviews, coach interviews, and event planner interviews.",
      thumbnail: "/news-broadcast-studio.jpg",
    },
    {
      id: 2,
      title: "CNN Special Investigation",
      date: "November 2, 2025",
      duration: "1:52",
      description:
        "An in-depth investigation into emerging global trends and their implications.",
      thumbnail: "/investigative-journalism-broadcast.jpg",
    },
    {
      id: 3,
      title: "World News Tonight",
      date: "November 1, 2025",
      duration: "3:45",
      description:
        "Global coverage of major news events from around the world.",
      thumbnail: "/world-news-broadcast.jpg",
    },
  ];

  const [expandedId, setExpandedId] = React.useState<number | null>(null);

  return (
    <section className="bg-accent py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">
            LIVE & ON DEMAND
          </h2>
          <p className="text-primary-200">
            Watch our latest broadcasts and recordings
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {broadcasts.map((broadcast) => (
            <Link href="robotics">
              <div
                key={broadcast.id}
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() =>
                  setExpandedId(
                    expandedId === broadcast.id ? null : broadcast.id
                  )
                }
              >
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={broadcast.thumbnail || "/placeholder.svg"}
                    alt={broadcast.title}
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
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white font-semibold">
                    {broadcast.duration}
                  </div>

                  <div className="absolute top-2 right-2 bg-black/30 hover:bg-black/60 py-1 rounded text-xs text-white font-semibold">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <EllipsisVertical />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Details</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href="/more-info">
                          <DropdownMenuItem>More Info</DropdownMenuItem>
                        </Link>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="bg-white p-4">
                  <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-accent transition-colors">
                    {broadcast.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{broadcast.date}</p>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {broadcast.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-foreground text-white px-8 py-3 rounded font-semibold hover:bg-black transition-colors">
            View All Broadcasts
          </button>
        </div>
      </div>
    </section>
  );
}
