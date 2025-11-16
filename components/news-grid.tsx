interface NewsItem {
  id: number
  title: string
  image: string
  category: string
  time: string
}

const newsItems: NewsItem[] = [
  {
    id: 6,
    title: "International Trade Agreement Signed",
    image: "/international-trade-agreement-signing.jpg",
    category: "World",
    time: "2 hours ago",
  },
  {
    id: 7,
    title: "City Launches New Sustainability Initiative",
    image: "/green-energy-sustainability-city.jpg",
    category: "Environment",
    time: "3 hours ago",
  },
  {
    id: 8,
    title: "Education Reform Bill Passes Parliament",
    image: "/parliament-education-legislation.jpg",
    category: "Politics",
    time: "3 hours ago",
  },
  {
    id: 9,
    title: "Entertainment Industry Awards Ceremony",
    image: "/awards-ceremony-red-carpet.jpg",
    category: "Entertainment",
    time: "4 hours ago",
  },
]

export function NewsGrid() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="section-title">Latest Updates</h3>

        <div className="space-y-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="flex gap-6 pb-6 border-b border-border last:border-0 cursor-pointer group"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-48 h-32 object-cover rounded group-hover:opacity-80 transition-opacity"
              />
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="breaking-news-badge text-white">{item.category}</span>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
                <h4 className="text-lg font-bold group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
