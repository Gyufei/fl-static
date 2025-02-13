import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/app/navigation";
import NewestItemCard from "./newest-item-card";
import { DocLink } from "@/lib/utils/jump-url";
import ToAppBtn from "./to-app-btn";

export default function HomeBanner() {
  const t = useTranslations("Home");

  return (
    <div
      className="flex h-[680px] flex-col items-center pt-[50px] sm:pt-[252px]"
      style={{
        backgroundImage: "url(/img/home/home-bg-1.png)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative hidden min-w-[1023px] text-center text-[50px] leading-[72px] text-black sm:flex sm:flex-col">
        {t("cap-DecentralizedPreMarketInfrastructure")}
        <Image
          src="/img/home/home-title-path.png"
          width={220}
          height={160}
          alt="home title path"
          className="absolute -left-[120px] top-[66px]"
        />
      </div>
      <div className="flex justify-center text-center text-[40px] leading-[60px] text-black sm:hidden">
        {t("cap-TheFirstPreSuperMarket")}
      </div>

      <div className="mt-10 hidden text-center text-xl leading-[30px] text-lightgray sm:flex">
        {t("cap-BridgingLiquidityBetweenPrimaryAndSecondaryMarkets")}
      </div>
      <div className="mt-[10px] block text-center text-sm leading-[20px] text-lightgray sm:hidden">
        {t("cap-BridgingLiquidityBetweenPrimaryAndSecondaryMarkets")}
      </div>

      <div className="mt-10 flex w-full flex-col items-center space-y-3 px-4 sm:w-fit sm:flex-row sm:space-x-10 sm:space-y-0 sm:px-0">
        <ToAppBtn
          label={t("btn-LaunchPointsMarketplace")}
          href="/marketplace"
        />
        <ToAppBtn label={t("btn-LaunchMissionMarketplace")} href="/bounty" />
        <Link
          href={DocLink}
          className="ml-1 mt-[22px] flex cursor-pointer items-center space-x-1 sm:ml-0 sm:mt-0"
        >
          <div className="text-lg leading-6 text-black">
            {t("btn-ReadTheDocs")}
          </div>
          <Image src="/icons/right-arrow.svg" width={24} height={24} alt="go" />
        </Link>
      </div>

      <NewestItemCard />
    </div>
  );
}
