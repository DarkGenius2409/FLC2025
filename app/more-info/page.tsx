"use client";
import { LearnMoreSection } from "@/components/learn-more-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <h1 className="text-5xl font-black mb-8">About Our Video</h1>

        <div className="my-10 flex">
          <p className="list-disc text-lg text-muted-foreground mr-10 mt-4">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
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
