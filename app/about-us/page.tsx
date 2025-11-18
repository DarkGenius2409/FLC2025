"use client";
import { LearnMoreSection } from "@/components/learn-more-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col pb-4">
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">

        <div className="my-10 flex">
          <div>
            <h1 className="text-5xl font-black mb-4">About Our Video</h1>
            <p className="list-disc text-lg text-muted-foreground mr-10">
              Explore the behind-the-scenes process of creating a professional news broadcast.
              From scripting and filming to editing and production, our video gives you an inside look
              at how a modern news studio operates efficiently and delivers high-quality content.
            </p>
          </div>
          <img
            className="w-1/3 mr-6 rounded-lg shadow-lg"
            src="/news-broadcast-studio.jpg"
            alt=""
          />
        </div>
      </div>
      <LearnMoreSection />
    </main>
  );
}
