import Image from "next/image";
import Link from "next/link";

export async function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link
        className="group flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/learn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/Butterfly.png"
          alt="File icon"
          width={16}
          height={16}
          className="group-hover:animate-ping"
        />
        Learn
      </Link>
      <Link
        className="group flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/pricing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/Butterfly.png"
          alt="Window icon"
          width={16}
          height={16}
          className="group-hover:animate-ping"
        />
        Pricing
      </Link>
      <Link
        className="group flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/Butterfly.png"
          alt="Globe icon"
          width={16}
          height={16}
          className="group-hover:animate-ping"
        />
        Contact
      </Link>
    </footer>
  );
}
