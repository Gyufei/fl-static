import { cn } from "@/lib/utils/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ReadMore from "./read-more";

export default function OutPerforms() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col items-center bg-white px-4 py-[50px] sm:px-[120px] sm:py-[120px]">
      <div className="text-2xl font-medium leading-9 text-[#0F1324] sm:text-[44px] sm:leading-[60px]">
        {t("cap-WhyTadleOutperformsOthers")}
      </div>
      <div
        className={cn(
          "mt-[10px] text-center text-base leading-6 text-[#6E6F79] sm:mt-10 sm:px-[200px] sm:text-xl sm:leading-[30px]",
        )}
      >
        {t("cap-WhyTadleOutperformsOthersDesc")}
      </div>
      <div className="mt-6 flex flex-col items-stretch sm:mt-[90px]">
        <DisplayCard
          imageSrc="/img/home/rocket.svg"
          title={t("cap-MaximizedCapitalEfficiency")}
          description={t("p-MaximizedCapitalEfficiency")}
        />

        <DisplayCard
          className="mt-20 sm:mt-[170px]"
          isReverse
          imageSrc="/img/home/settlements.svg"
          title={t("cap-InstantRewards")}
          description={t("p-InstantRewards")}
        />

        <DisplayCard
          className="mt-20 sm:mt-[170px]"
          imageSrc="/img/home/liquidity.svg"
          title={t("cap-LockInAlphas")}
          description={t("p-LockInAlphas")}
        />

        <DisplayCard
          isReverse
          className="mt-20 sm:mt-[170px]"
          imageSrc="/img/home/system.svg"
          title={t("cap-AdvancedMarketInsights")}
          description={t("p-AdvancedMarketInsights")}
        />

        <DisplayCard
          className="mt-20 sm:mt-[170px]"
          imageSrc="/img/home/security.svg"
          title={t("cap-SecureAndTransparent")}
          description={t("p-SecureAndTransparent")}
        />
      </div>
    </div>
  );
}

function DisplayCard({
  className,
  imageSrc,
  title,
  description,
  isReverse = false,
}: {
  className?: string;
  imageSrc: string;
  title: string;
  description: string;
  isReverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col items-center justify-between sm:flex-row sm:items-stretch",
        isReverse && "flex-col-reverse",
        className,
      )}
    >
      {isReverse ? (
        <>
          <DescText title={title} description={description} />
          <div className="flex flex-1 items-stretch justify-center">
            <Image src={imageSrc} width={560} height={372} alt="rocket" />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-1 items-stretch justify-center">
            <Image src={imageSrc} width={560} height={372} alt="rocket" />
          </div>
          <DescText title={title} description={description} />
        </>
      )}
    </div>
  );
}

function DescText({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mt-4 flex flex-1 flex-col items-center sm:mt-10 sm:items-start sm:justify-between">
      <div>
        <div className="text-center text-[18px] leading-[26px] text-[#0F1324] sm:text-left sm:text-[30px] sm:leading-[42px]">
          {title}
        </div>
        <div
          className={cn(
            "mt-[10px] text-center text-base leading-6 text-[#6E6F79] sm:mt-6 sm:text-left sm:text-xl sm:leading-[30px]",
          )}
        >
          {description}
        </div>
      </div>
      <ReadMore />
    </div>
  );
}
