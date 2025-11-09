import Link from "next/link";

export function BreakingNews() {
  const breakingStory = {
    id: 1,
    title: "Local VEX V5 Robotics Championship",
    description: "Championship broadcast from the regional finals",
    image: "/news-conference-world-leaders.jpg",
    category: "Robotics",
    time: "2 minutes ago",
  };

  return (
    <section className="bg-accent text-accent-foreground py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-8 bg-accent-foreground"></div>
          <span className="text-xl font-black tracking-wider">BREAKING</span>
          <div className="animate-pulse w-3 h-3 bg-accent-foreground rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
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
          </div>
          <img
            src={breakingStory.image || "/placeholder.svg"}
            alt={breakingStory.title}
            className="w-full aspect-video object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}
