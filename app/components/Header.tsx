import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-yellow text-charcoal py-4 px-4 md:py-8 md:px-8 border-b-8 border-charcoal shadow-[0px_8px_0px_0px_rgba(19,19,19,1)] flex items-center justify-center md:justify-between gap-8">
      <div className="flex items-center justify-center md:justify-start">
        <Link href="/" className="mr-2 md:mr-3 flex items-center gap-3">
          <Image
            src="/tds_logo.svg"
            alt="Total Dogshit"
            width={100}
            height={100}
            className="w-20 h-20 md:w-28 md:h-28"
          />
          <h1 className="font-anchor font-bold text-4xl md:text-5xl uppercase tracking-tight leading-8">
            Total Dogshit
          </h1>{" "}
        </Link>
      </div>

      <div className="flex items-center justify-center md:justify-end">
        <div>
          <ul className="flex items-center gap-4">
            <li className="inline-block">
              <a
                href="https://www.instagram.com/totaldogshit/"
                rel="noreferrer noopenner"
                target="_blank"
                className="inline-block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </li>

            <li className="inline-block">
              <a
                href="https://www.youtube.com/channel/UCg6OrdxPYQbzI-VKEhAue5g"
                rel="noreferrer noopenner"
                target="_blank"
                className="inline-block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
