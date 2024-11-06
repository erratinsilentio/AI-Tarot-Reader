import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="row-start-3 pb-2 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="group flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
      </a>
      <a
        className="group flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
        About
      </a>
      <a
        className="group flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
      </a>
    </footer>
  );
};
