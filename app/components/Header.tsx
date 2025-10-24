import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-yellow text-charcoal py-4 px-4 md:py-8 md:px-8 border-b-8 border-charcoal shadow-[0px_8px_0px_0px_rgba(19,19,19,1)] flex items-center justify-center md:justify-start">
      <Link href="/" className="mr-2 md:mr-3">
        <Image
          src="/tds_logo.svg"
          alt="Total Dogshit"
          width={100}
          height={100}
          className="w-20 h-20 md:w-28 md:h-28"
        />
      </Link>
      <h1 className="font-anchor font-bold text-4xl md:text-5xl uppercase tracking-tight">
        Total Dogshit
      </h1>
    </header>
  );
}
