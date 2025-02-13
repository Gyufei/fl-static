"use client";
import Image from "next/image";
import { handleGoApp } from "@/lib/utils/jump-url";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLocale, useTranslations } from "next-intl";

export default function NavigationBtns() {
  const t = useTranslations("Home");
  const locale = useLocale();

  function handleClick(href: string) {
    handleGoApp(href, locale);
  }

  return (
    <div className="hidden flex-1 items-center space-x-5 sm:flex">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
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
          </TooltipTrigger>
          <TooltipContent>{t("btn-Marketplace")}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
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
          </TooltipTrigger>
          <TooltipContent>{t("btn-Bounty")}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
