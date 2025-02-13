"use client";
import Image from "next/image";
import { handleGoApp } from "@/lib/utils/jump-url";

export default function NavigationBtns() {
  function handleClick(href: string) {
    handleGoApp(href);
  }

  return (
    <div className="hidden flex-1 items-center space-x-5 sm:flex">
      <div className="relative flex items-center">
        <div
          onClick={() => handleClick(`/marketplace`)}
          className="z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#D3D4D6] hover:border-transparent hover:bg-yellow data-[active=true]:w-fit"
        >
          <Image
            src="/icons/Marketplace.svg"
            width={24}
            height={24}
            alt="marketplace"
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="relative flex items-center">
        <div
          onClick={() => handleClick(`/bounty`)}
          className="z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#D3D4D6] hover:border-transparent hover:bg-yellow"
        >
          <Image
            src="/icons/task.svg"
            width={24}
            height={24}
            alt="bounty"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
