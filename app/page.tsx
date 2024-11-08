import ActionButtons from "@/components/ui/home/action-buttons";
import { AlertComponent } from "@/components/ui/home/alert";
import Instructions from "@/components/ui/home/instructions";
import LogoHeader from "@/components/ui/home/logo-header";
import Subtitle from "@/components/ui/home/subtitle";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="grid grid-rows-[0px_1fr_20px] items-center justify-items-center max-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-3 row-start-2 items-center sm:items-center">
          <LogoHeader />
          <Subtitle />
          <Instructions />
          <ActionButtons />
          <AlertComponent />
        </main>
      </div>
    </>
  );
}
