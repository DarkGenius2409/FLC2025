import { VideoPlayer } from "@/components/video-player";
import { FaInfoCircle } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h1 className="text-5xl font-black mb-2">
            Local VEX V5 Robotics Championship
          </h1>
          <p className="text-lg text-muted-foreground">
            Championship broadcast from the regional finals
          </p>
          <div className="text-sm text-muted-foreground mt-4">
            Published: November 3, 2025 | Reported by: Aarav Narayan, Kaustabh
            Varikallu, Keshav Shah
          </div>
        </div>

        <VideoPlayer />

        <div className="mt-8 prose prose-invert max-w-none">
          <p className="text-base leading-relaxed">
            Watch the complete broadcast of the local VEX V5 robotics
            championship competition. Teams from across the region compete in
            engineering, strategy, and precision robotics.
          </p>
        </div>
        <a className="mt-8 hover:bg-foreground text-white w-[30%]  px-6 flex items-center justify-between py-3 rounded font-semibold bg-accent transition cursor-pointer" href="/about-us"><div>How did we film this?</div> <FaInfoCircle /></a>
      </div>
    </main>
  );
}
