import { Header } from "@/components/header";
import { VideoPlayer } from "@/components/video-player";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h1 className="text-5xl font-black mb-2">
            Production Techniques & Tools
          </h1>

          <div className="mt-15 mb-20 flex">
            <img
              className="w-1/3 ml-6 mb-4 rounded-lg shadow-lg"
              src="/news-broadcast-studio.jpg"
              alt=""
            />
            <div className="ml-10">
              <h2 className="text-3xl mt-5">Technology & Software</h2>
              <ul className="list-disc text-lg text-muted-foreground mt-4 px-10">
                <li>Editing: Adobe Premiere Pro</li>
                <li>Graphics: Canva</li>
                <li>Collaboration and accessibility: Adobe Creative Cloud</li>
              </ul>
            </div>
          </div>

          <div className="my-20 flex">
            <div className="mr-10">
              <h2 className="text-3xl mt-5">Techniques & Effects</h2>
              <ul className="list-disc text-lg text-muted-foreground mt-4 px-10">
                <li>Jump cut</li>
                <li>Music based on mood & fades in/out</li>
                <li>B-Roll fades in</li>
                <li>Animated synced text for important moments</li>
                <li>Filters</li>
              </ul>
            </div>
            <img
              className="w-1/3 mr-6 mb-4 rounded-lg shadow-lg"
              src="/news-broadcast-studio.jpg"
              alt=""
            />
          </div>
          <div className="my-20 flex">
            <img
              className="w-1/3 mr-6 mb-4 rounded-lg shadow-lg"
              src="/news-broadcast-studio.jpg"
              alt=""
            />
            <div className="ml-10">
              <h2 className="text-3xl mt-5">Equipment & Visual Style</h2>
              <ul className="list-disc text-lg text-muted-foreground mt-4 px-10">
                <li>Camera: iPhone 16</li>
                <li>
                  Microphone: RØDE Wireless Micro – Compact Wireless Microphone,
                  Two Mics with Charge Case for Smartphone Content Creation –
                  USB-C, Black
                </li>
                <li>
                  Creative choices: consistent colors, filters, readable font
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
