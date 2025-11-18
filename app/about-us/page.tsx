"use client";
import { LearnMoreSection } from "@/components/learn-more-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col pb-4">
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <div className="my-10">
          <div>
            <h1 className="text-5xl font-black mb-4">About Our Video</h1>
            <div className="relative w-full h-[0] pt-[56.2500%] pb-0 [box-shadow:0_2px_8px_0_rgba(63,69,81,0.16)] mt-[1.6em] mb-[0.9em] overflow-hidden rounded-[8px]">
              <iframe
                loading="lazy"
                className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
                src="https://www.canva.com/design/DAG10ldWpow/2GE56vQArCJ4YrSQsagZYA/view?embed"
                allow="fullscreen"
              ></iframe>
            </div>
            <p className="list-disc text-lg text-muted-foreground mr-10">
              Explore the behind-the-scenes process of creating a professional
              news broadcast. From scripting and filming to editing and
              production, our video gives you an inside look at how a modern
              news studio operates efficiently and delivers high-quality
              content.
            </p>
          </div>
        </div>
      </div>
      {/* <LearnMoreSection /> */}
    </main>
  );
}
