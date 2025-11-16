import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function BreakingNews() {
  const breakingStory = {
    id: 1,
    title: "Local VEX V5 Robotics Championship",
    description: "Championship broadcast from the regional finals",
    image: "/vex.png",
    category: "Robotics",
    time: "2 minutes ago",
  };

  return (
    <section className="text-accent-foreground py-8 px-4">
      <div className="max-w-7xl mx-auto mt-16 flex justify-between gap-6 items-start">
        <div >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-accent"></div>
            <span className="text-xl font-black tracking-wider text-accent">BREAKING NEWS</span>
            <div className="animate-pulse w-3 h-3 bg-accent rounded-full"></div>
          </div>

          <h2 className="text-4xl font-black mb-4 leading-tight">
            {breakingStory.title}
          </h2>
          <p className="text-lg mb-4 opacity-95">
            {breakingStory.description}
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="font-bold">{breakingStory.category}</span>
            <span>{breakingStory.time}</span>
          </div>
          <Link href="/robotics" className="mt-8 hover:bg-foreground text-white w-[30%]  px-6 flex justify-between py-3 rounded font-semibold bg-accent transition cursor-pointer"><div>Read Story</div> <ChevronRight /></Link>
        </div>

        <img
          src={breakingStory.image || "/placeholder.svg"}
          alt={breakingStory.title}
          className="w-full aspect-video object-cover max-w-lg rounded"
        />
      </div>
    </section>
  );
}
