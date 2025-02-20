"use client";
import Image from "next/image";
import { getGoAppUrl } from "@/lib/utils/jump-url";
import { Link } from "@/app/navigation";
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

  return (
    <div className="hidden flex-1 items-center space-x-5 sm:flex">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="relative flex items-center">
              <Link
                href={getGoAppUrl("missions", "/market/gems", locale)}
                target="_blank"
                rel="noreferrer"
                className="z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#D3D4D6] hover:border-transparent hover:bg-yellow data-[active=true]:w-fit"
              >
                <Image
                  src="/icons/Marketplace.svg"
                  width={24}
                  height={24}
                  alt="marketplace"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>{t("btn-Marketplace")}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <div className="relative flex items-center">
              <Link
                href={getGoAppUrl("missions", "/missions", locale)}
                target="_blank"
                rel="noreferrer"
                className="z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#D3D4D6] hover:border-transparent hover:bg-yellow"
              >
                <Image
                  src="/icons/task.svg"
                  width={24}
                  height={24}
                  alt="mission"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>{t("btn-Missions")}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
