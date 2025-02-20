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
        <div className="flex flex-1 flex-col items-center justify-between sm:flex-row sm:items-stretch">
          <div className="flex flex-1 items-stretch justify-center">
            <Image
              src="/img/home/rocket.svg"
              width={560}
              height={372}
              alt="rocket"
            />
          </div>
          <div className="flex flex-1 flex-col items-center pt-10 sm:items-start sm:justify-between">
            <div>
              <div className="text-center text-[18px] leading-[26px] text-[#0F1324] sm:text-left sm:text-[30px] sm:leading-[42px]">
                {t("cap-MaximizedCapitalEfficiency")}
              </div>
              <div
                className={cn(
                  "mt-6 text-center text-base leading-6 text-[#6E6F79] sm:text-left sm:text-xl sm:leading-[30px]",
                )}
              >
                {t("p-MaximizedCapitalEfficiency")}
              </div>
            </div>
            <ReadMore />
          </div>
        </div>

        <div className="mt-20 flex flex-1 flex-col-reverse items-center justify-between sm:mt-[170px] sm:flex-row sm:items-stretch">
          <div className="flex flex-1 flex-col items-center pt-10 sm:items-start sm:justify-between">
            <div>
              <div className="text-center text-[18px] leading-[26px] text-[#0F1324] sm:text-left sm:text-[30px] sm:leading-[42px]">
                {t("cap-InstantRewards")}
              </div>
              <div
                className={cn(
                  "mt-6 text-center text-base leading-6 text-[#6E6F79] sm:text-left sm:text-xl sm:leading-[30px]",
                )}
              >
                {t("p-InstantRewards")}
              </div>
            </div>
            <ReadMore />
          </div>
          <div className="flex flex-1 items-stretch justify-center">
            <Image
              src="/img/home/settlements.svg"
              width={560}
              height={372}
              alt="rocket"
            />
          </div>
        </div>

        <div className="mt-20 flex flex-1 flex-col items-center justify-between sm:mt-[170px] sm:flex-row sm:items-stretch">
          <div className="flex flex-1 items-stretch justify-center">
            <Image
              src="/img/home/liquidity.svg"
              width={560}
              height={372}
              alt="rocket"
            />
          </div>
          <div className="flex flex-1 flex-col items-center pt-10 sm:items-start sm:justify-between">
            <div>
              <div className="text-center text-[18px] leading-[26px] text-[#0F1324] sm:text-left sm:text-[30px] sm:leading-[42px]">
                {t("cap-LockInAlphas")}
              </div>
              <div
                className={cn(
                  "mt-6 text-center text-base leading-6 text-[#6E6F79] sm:text-left sm:text-xl sm:leading-[30px]",
                )}
              >
                {t("p-LockInAlphas")}
              </div>
            </div>
            <ReadMore />
          </div>
        </div>

        <div className="mt-20 flex flex-1 flex-col-reverse items-center justify-between sm:mt-[170px] sm:flex-row sm:items-stretch">
          <div className="flex flex-1 flex-col items-center pt-10 sm:items-start sm:justify-between">
            <div>
              <div className="text-center text-[18px] leading-[26px] text-[#0F1324] sm:text-left sm:text-[30px] sm:leading-[42px]">
                {t("cap-AdvancedMarketInsights")}
              </div>
              <div
                className={cn(
                  "mt-6 text-center text-base leading-6 text-[#6E6F79] sm:text-left sm:text-xl sm:leading-[30px]",
                )}
              >
                {t("p-AdvancedMarketInsights")}
              </div>
            </div>
            <ReadMore />
          </div>
          <div className="flex flex-1 items-stretch justify-center">
            <Image
              src="/img/home/system.svg"
              width={560}
              height={372}
              alt="rocket"
            />
          </div>
        </div>

        <div className="mt-20 flex flex-1 flex-col items-center justify-between sm:mt-[170px] sm:flex-row sm:items-stretch">
          <div className="flex flex-1 items-stretch justify-center">
            <Image
              src="/img/home/security.svg"
              width={560}
              height={372}
              alt="rocket"
            />
          </div>
          <div className="flex flex-1 flex-col items-center pt-10 sm:items-start sm:justify-between">
            <div>
              <div className="text-center text-[18px] leading-[26px] text-[#0F1324] sm:text-left sm:text-[30px] sm:leading-[42px]">
                {t("cap-SecureAndTransparent")}
              </div>
              <div
                className={cn(
                  "mt-6 text-center text-base leading-6 text-[#6E6F79] sm:text-left sm:text-xl sm:leading-[30px]",
                )}
              >
                {t("p-SecureAndTransparent")}
              </div>
            </div>
            <ReadMore />
          </div>
        </div>
      </div>
    </div>
  );
}
