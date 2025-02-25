import Image from "next/image";
import { useTranslations } from "next-intl";
import { StepCard } from "./step-card";

export default function GetStart() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col items-center bg-[#F6F7FF] px-4 py-10 sm:px-[120px] sm:py-20">
      <div className="mb-10 flex text-[24px] font-medium leading-9 text-[#0F1324] sm:mb-0 sm:text-[44px] sm:leading-[60px]">
        {t("cap-HowToGetStartedWithTadle")}
      </div>
      <div className="flex flex-col items-center justify-between space-x-0 space-y-6 self-stretch sm:mt-[68px] sm:flex-row sm:space-x-10 sm:space-y-0 sm:self-auto">
        <div className="relative flex w-full flex-col sm:w-fit">
          <StepCard
            index={1}
            title={t("txt-ConnectToYourWallet")}
            imageSrc1="/icons/home-wallet.svg"
            imageSrc2="/icons/home-wallet-white.svg"
          />

          <Image
            src="/img/home/start-item-1-bg.png"
            alt="get start"
            width={300}
            height={200}
            className="absolute left-10 top-[100px] z-[-1] blur-[50px]"
          />

          <StepCard
            className="mt-6"
            index={2}
            title={t("txt-SearchForTheProjects")}
            imageSrc1="/icons/search-project.svg"
            imageSrc2="/icons/search-project-white.svg"
          />
        </div>

        <StepCard
          className="mt-6"
          index={3}
          title={t("txt-PlaceABuyOrSellOrder")}
          imageSrc1="/icons/buy-sell-order.svg"
          imageSrc2="/icons/buy-sell-order-white.svg"
        />

        <StepCard
          className="mt-6"
          index={4}
          title={t("txt-CheckMetricsInDashboard")}
          imageSrc1="/icons/check-dashboard.svg"
          imageSrc2="/icons/check-dashboard-white.svg"
        />
      </div>
    </div>
  );
}
