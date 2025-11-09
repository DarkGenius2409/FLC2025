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
              <h2 className="text-3xl mt-5">Goonana 1</h2>
              <ul className="list-disc text-lg text-muted-foreground mt-4 px-10">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </li>
                <li>
                  Nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </li>
              </ul>
            </div>
          </div>

          <div className="my-20 flex">
            <div className="mr-10">
              <h2 className="text-3xl mt-5">Goonana 2</h2>
              <ul className="list-disc text-lg text-muted-foreground mt-4 px-10">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </li>
                <li>
                  Nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
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
              <h2 className="text-3xl mt-5">Goonana 3</h2>
              <ul className="list-disc text-lg text-muted-foreground mt-4 px-10">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </li>
                <li>
                  Nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
