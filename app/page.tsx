import Image from "next/image";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-charcoal">
      <Header />
      <main className="flex-1">
        <section
          className="bg-navy text-white py-20 border-b-8 border-charcoal px-4 md:px-8 relative overflow-hidden"
          id="suggest-a-movie"
        >
          <div className="flex items-center justify-center absolute top-[-70px] right-[-55px] md:top-[-130px] md:right-[-100px] z-0 opacity-20 motion-safe:animate-[spin_100s_linear_infinite]">
            <Image
              src="/flower-white.webp"
              alt="Flower"
              width={400}
              height={400}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            />
          </div>
          <h2 className="mb-8 text-center text-5xl font-bold text-white uppercase tracking-tight">
            Suggest a Movie!
          </h2>
          <p className="text-center text-2xl text-white font-medium max-w-2xl mx-auto">
            Got a movie you want to see reviewed? Submit it here to be entered
            into our monthly audience pick!
          </p>

          <div className="flex justify-center mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdQ8MG-Gzs8DwqF5ePp1Vk-6DjVGer9iI0jR6X3w1XVS9OeEQ/viewform?usp=sharing&ouid=116315251942665831953"
              className="group relative inline-flex items-center justify-center bg-yellow text-charcoal px-8 py-4 rounded-xl text-2xl font-anchor font-bold border-4 border-charcoal shadow-[6px_6px_0px_0px_rgba(19,19,19,1)] hover:shadow-[8px_8px_0px_0px_rgba(19,19,19,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[2px_2px_0px_0px_rgba(19,19,19,1)] active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 ease-out focus:outline-none uppercase tracking-wide"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit a Movie
            </a>
          </div>
        </section>

        <section
          className="bg-coral py-20 border-b-8 border-charcoal px-4 md:px-8 relative overflow-hidden"
          id="follow-us-on-spotify"
        >
          <div className="flex items-center justify-center absolute top-[-150px] left-[-125px] z-0 opacity-30 motion-safe:animate-[spin-reverse_100s_linear_infinite]">
            <Image
              src="/flower-white.webp"
              alt="Flower"
              width={500}
              height={500}
            />
          </div>

          <div className="mx-auto px-6 text-center relative z-10">
            <h2 className="mb-12 text-center text-5xl font-bold text-charcoal uppercase tracking-tight">
              Follow us on Spotify!
            </h2>

            <div className="m-auto max-w-2xl">
              <div className="border-8 border-charcoal rounded-xl shadow-[8px_8px_0px_0px_rgba(19,19,19,1)] overflow-hidden bg-white">
                <iframe
                  data-testid="embed-iframe"
                  src="https://open.spotify.com/embed/show/6jqLzT9R5E1r5Tc7Be0H2T/video?utm_source=generator"
                  width="100%"
                  height="351"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
