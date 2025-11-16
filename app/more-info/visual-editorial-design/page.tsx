import { Header } from "@/components/header";
import { VideoPlayer } from "@/components/video-player";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h1 className="text-5xl font-black mb-2">
            Visual & Editorial Design
          </h1>

          <div className="mt-15 mb-20 flex">
            <img
              className="w-1/3 ml-6 mb-4 rounded-lg shadow-lg"
              src="/news-broadcast-studio.jpg"
              alt=""
            />
            <div className="ml-10">
              <h2 className="text-3xl mt-5">Branding & Professionalism</h2>
              <ul className="list-disc text-lg text-muted-foreground mt-4 px-10">
                <li>
                  Intro: brand focused, increases professional and credibility
                </li>
                <li>
                  Transitions: maintains consistent branding in between clips,
                  keeping professionalism, fades out at end to signal to
                  audience that the broadcast has ended
                </li>
                <li>
                  Vintage filter on the montage: makes it more authentic and
                  personable
                </li>
                <li>Consistent colors</li>
              </ul>
            </div>
          </div>

          <div className="my-20 flex">
            <div className="mr-10">
              <h2 className="text-3xl mt-5">
                Audience Engagement & Accessibility
              </h2>
              <ul className="list-disc text-lg text-muted-foreground mt-4 px-10">
                <li>
                  Captions: increases accessibility, connecting to a wider
                  audience
                </li>
                <li>
                  Lower third: helps provide context for what the interview is
                  about
                </li>
                <li>
                  Pacing/Flow: paced the video in a way that is understandable
                  by the audience but still introduces multiple perspectives
                  through the various interviews. This allows the video to flow
                  smoothly
                </li>
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
              <h2 className="text-3xl mt-5">Storytelling & Impact</h2>
              <ul className="list-disc text-lg text-muted-foreground mt-4 px-10">
                <li>
                  B-roll: shows how words people are saying in a visual way
                </li>
                <li>
                  One word montage outro: causes audience to reflect on the
                  extent of robotics’ impact on students
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
