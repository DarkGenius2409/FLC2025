interface TrendingItem {
  rank: number
  title: string
  trending: number
}

const trendingTopics: TrendingItem[] = [
  { rank: 1, title: "Global Climate Summit", trending: 125000 },
  { rank: 2, title: "Tech Stock Rally", trending: 98000 },
  { rank: 3, title: "Olympic Preparations", trending: 87000 },
  { rank: 4, title: "Healthcare Innovation", trending: 76000 },
  { rank: 5, title: "Market Analysis Report", trending: 64000 },
]

export function TrendingSidebar() {
  return (
    <aside className="bg-card rounded-md p-6 border border-border">
      <h3 className="text-xl font-bold mb-6 pb-3 border-b-2 border-accent">Trending Now</h3>

      <div className="space-y-4">
        {trendingTopics.map((item) => (
          <div key={item.rank} className="pb-4 border-b border-border last:border-0 last:pb-0 cursor-pointer group">
            <div className="flex items-start gap-3">
              <div className="text-2xl font-black text-accent w-8 pt-1">{item.rank}</div>
              <div className="flex-1">
                <h4 className="font-bold text-sm group-hover:text-accent transition-colors">{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{item.trending.toLocaleString()} mentions</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
