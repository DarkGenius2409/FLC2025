"use client"

interface Story {
  id: number
  title: string
  description: string
  image: string
  category: string
  time: string
  author: string
  sources: string[]
}

const featuredStories: Story[] = [
  {
    id: 2,
    title: "Tech Giants Announce New Partnership",
    description: "Leading technology companies collaborate on innovation initiative",
    image: "/technology-conference-partnership.jpg",
    category: "Technology",
    time: "15 minutes ago",
    author: "Keshav Shah",
    sources: ["Company Press Release", "Industry Analysts Report", "Reuters"],
  },
  {
    id: 3,
    title: "Stock Markets Show Strong Growth",
    description: "Global markets rally on positive economic indicators",
    image: "/stock-market-trading-floor.png",
    category: "Business",
    time: "25 minutes ago",
    author: "Kaustubh Varikallu",
    sources: ["Financial Markets Database", "Central Bank Reports", "Bloomberg"],
  },
  {
    id: 4,
    title: "Healthcare Breakthrough Announced",
    description: "Researchers develop new treatment for major disease",
    image: "/medical-laboratory-research.png",
    category: "Health",
    time: "45 minutes ago",
    author: "Aarav Narayan",
    sources: ["Medical Journal Peer Review", "Research Institution", "WHO"],
  },
  {
    id: 5,
    title: "Major Sports Victory Celebrated",
    description: "Championship team secures historic win in thrilling match",
    image: "/sports-stadium-championship.jpg",
    category: "Sports",
    time: "1 hour ago",
    author: "Keshav Shah",
    sources: ["Live Event Coverage", "Official Sports League", "Team Statements"],
  },
]

export function FeaturedStories() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="section-title">Featured Stories</h3>

        <div className="grid md:grid-cols-4 gap-6">
          {featuredStories.map((story) => (
            <article key={story.id} className="news-card group">
              <div className="relative overflow-hidden">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="news-card-image group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="breaking-news-badge text-white">{story.category}</span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-bold text-base mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                  {story.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{story.description}</p>

                <p className="text-xs font-semibold text-foreground mb-2">By {story.author}</p>
                <p className="text-xs text-muted-foreground">{story.time}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
