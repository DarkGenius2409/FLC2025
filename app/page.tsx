import { BreakingNews } from "@/components/breaking-news";
import { BroadcastSection } from "@/components/broadcast-section";
import { FeaturedStories } from "@/components/featured-stories";
import { NewsGrid } from "@/components/news-grid";
import { TrendingSidebar } from "@/components/trending-sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">


      <BreakingNews />
      <BroadcastSection />
      <FeaturedStories />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NewsGrid />
          </div>
          <div>
            <TrendingSidebar />
          </div>
        </div>
      </div>

    </main>
  );
}
