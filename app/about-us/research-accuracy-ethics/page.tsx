import { Header } from "@/components/header";
import { VideoPlayer } from "@/components/video-player";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h1 className="text-5xl font-black mb-2">
            Research, Accuracy, & Ethical Reporting
          </h1>

          <div className="mt-15 mb-20 flex">
            <img
              className="w-1/3 ml-6 mb-4 rounded-lg shadow-lg"
              src="/news-broadcast-studio.jpg"
              alt=""
            />
            <div className="ml-10">
              <h2 className="text-3xl mt-5">Event Verification</h2>
              <ul className="list-disc text-lg text-muted-foreground mt-4 px-10">
                <li>
                  Looked up event on RoboEvents to find it was at East Forsyth
                  High School
                </li>
                <li>
                  Looked at East Forsyth school website to identify event
                  organizer at the school and more details about the event
                </li>
              </ul>
            </div>
          </div>

          <div className="my-20 flex">
            <div className="mr-10">
              <h2 className="text-3xl mt-5">Permissions & Collaboration</h2>
              <ul className="list-disc text-lg text-muted-foreground mt-4 px-10">
                <li>Emailed event organizer to set up time for interview</li>
                <li>
                  Contacted school for permission to record footage at the event
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
              <h2 className="text-3xl mt-5">Interview Process & Accuracy</h2>
              <ul className="list-disc text-lg text-muted-foreground mt-4 px-10">
                <li>
                  Interviewed students and advisors at the event with their
                  permission to gain insights into the event.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
