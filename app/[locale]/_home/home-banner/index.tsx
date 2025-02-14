import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/app/navigation";
import { DocLink } from "@/lib/utils/jump-url";
import ToAppBtn from "./to-app-btn";

export default function HomeBanner() {
  const t = useTranslations("Home");

  return (
    <div
      className="flex h-fit flex-col items-center pb-12 pt-12 sm:h-[680px] sm:pb-0 sm:pt-[252px]"
      style={{
        backgroundImage: "url(/img/home/home-bg-1.png)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative flex flex-row px-4 text-center text-[36px] font-bold leading-[54px] text-black sm:min-w-[1023px] sm:flex-col sm:px-0 sm:text-[50px] sm:leading-[72px]">
        {t("cap-CenterTitle")}
        <Image
          src="/img/home/home-title-path.png"
          width={220}
          height={160}
          alt="home title path"
          className="absolute -left-[120px] top-[66px] hidden sm:block"
        />
      </div>

      <div className="mt-[10px] text-center text-sm leading-5 text-lightgray sm:mt-10 sm:text-xl sm:leading-[30px]">
        {t("cap-BridgingLiquidityBetweenPrimaryAndSecondaryMarkets")}
      </div>

      <div className="mt-10 flex w-full flex-col items-center space-y-3 px-4 sm:w-fit sm:flex-row sm:space-x-10 sm:space-y-0 sm:px-0">
        <ToAppBtn
          label={t("btn-LaunchPointsMarketplace")}
          href="/market/gems"
        />
        <ToAppBtn label={t("btn-LaunchMissionMarketplace")} href="/missions" />
        <Link
          href={DocLink}
          className="ml-1 mt-[22px] flex cursor-pointer items-center space-x-1 sm:ml-0 sm:mt-0"
        >
          <div className="text-lg leading-6 text-gray">
            {t("btn-ReadTheDocs")}
          </div>
          <Image
            src="/icons/right-arrow.svg"
            className="opacity-80"
            width={24}
            height={24}
            alt="go"
          />
        </Link>
      </div>
    </div>
  );
}
