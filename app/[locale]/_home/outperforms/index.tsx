import { cn } from "@/lib/utils/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ReadMore from "./read-more";

export default function OutPerforms() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col items-center bg-[rgba(224,255,98,0.1)] px-4 py-10 sm:px-[120px] sm:py-[80px]">
      <div className="text-[24px] font-bold leading-9 text-black sm:text-[40px] sm:leading-10">
        {t("cap-WhyTadleOutperformsOthers")}
      </div>
      <div
        className={cn(
          "mt-6 text-center text-sm leading-6 text-gray sm:text-left sm:text-xl sm:leading-[30px]",
        )}
      >
        {t("cap-WhyTadleOutperformsOthersDesc")}
      </div>
      <div className="mt-[60px] flex flex-col items-stretch">
        <div className="flex flex-1 flex-col items-center justify-between sm:flex-row sm:items-stretch">
          <div className="flex flex-1 items-stretch justify-center">
            <Image
              src="/img/home/rocket.png"
              width={560}
              height={372}
              alt="rocket"
            />
          </div>
          <div className="flex flex-1 flex-col items-center pt-10 sm:items-start sm:justify-between">
            <div>
              <div className="text-center text-base leading-6 text-black sm:text-left sm:text-[30px] sm:leading-[42px]">
                {t("cap-MaximizedCapitalEfficiency")}
              </div>
              <div
                className={cn(
                  "mt-6 text-center text-sm leading-6 text-gray sm:text-left sm:text-xl sm:leading-[30px]",
                )}
              >
                {t("p-MaximizedCapitalEfficiency")}
              </div>
            </div>
            <ReadMore />
          </div>
        </div>

        <div className="mt-10 flex flex-1 flex-col-reverse items-center justify-between sm:mt-0 sm:flex-row sm:items-stretch">
          <div className="flex flex-1 flex-col items-center pt-10 sm:items-start sm:justify-between">
            <div>
              <div className="text-center text-base leading-6 text-black sm:text-left sm:text-[30px] sm:leading-[42px]">
                {t("cap-HighLiquidityForSeamlessTrading")}
              </div>
              <div
                className={cn(
                  "mt-6 text-center text-sm leading-6 text-gray sm:text-left sm:text-xl sm:leading-[30px]",
                )}
              >
                {t("p-HighLiquidityForSeamlessTrading")}
              </div>
            </div>
            <ReadMore />
          </div>
          <div className="flex flex-1 items-stretch justify-center">
            <Image
              src="/img/home/liquidity.png"
              width={560}
              height={372}
              alt="rocket"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-1 flex-col items-center justify-between sm:mt-0 sm:flex-row sm:items-stretch">
          <div className="flex flex-1 items-stretch justify-center">
            <Image
              src="/img/home/fee.png"
              width={560}
              height={372}
              alt="rocket"
            />
          </div>
          <div className="flex flex-1 flex-col items-center pt-10 sm:items-start sm:justify-between">
            <div>
              <div className="text-center text-base leading-6 text-black sm:text-left sm:text-[30px] sm:leading-[42px]">
                {t("cap-LowTradingFee")}
              </div>
              <div
                className={cn(
                  "mt-6 text-center text-sm leading-6 text-gray sm:text-left sm:text-xl sm:leading-[30px]",
                )}
              >
                {t("p-LowTradingFee")}
              </div>
            </div>
            <ReadMore />
          </div>
        </div>

        <div className="mt-10 flex flex-1 flex-col-reverse items-center justify-between sm:mt-[87px] sm:flex-row sm:items-stretch">
          <div className="flex flex-1 flex-col items-center pt-10 sm:items-start sm:justify-between">
            <div>
              <div className="text-center text-base leading-6 text-black sm:text-left sm:text-[30px] sm:leading-[42px]">
                {t("cap-AdvancedTradingInsights")}
              </div>
              <div
                className={cn(
                  "mt-6 text-center text-sm leading-6 text-gray sm:text-left sm:text-xl sm:leading-[30px]",
                )}
              >
                {t("p-AdvancedTradingInsights")}
              </div>
            </div>
            <ReadMore />
          </div>
          <div className="flex flex-1 items-stretch justify-center">
            <Image
              src="/img/home/system.png"
              width={560}
              height={372}
              alt="rocket"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-1 flex-col items-center justify-between sm:mt-[87px] sm:flex-row sm:items-stretch">
          <div className="flex flex-1 items-stretch justify-center">
            <Image
              src="/img/home/security.png"
              width={560}
              height={372}
              alt="rocket"
            />
          </div>
          <div className="flex flex-1 flex-col items-center pt-10 sm:items-start sm:justify-between">
            <div>
              <div className="text-center text-base leading-6 text-black sm:text-left sm:text-[30px] sm:leading-[42px]">
                {t("cap-RobustSecurity")}
              </div>
              <div
                className={cn(
                  "mt-6 text-center text-sm leading-6 text-gray sm:text-left sm:text-xl sm:leading-[30px]",
                )}
              >
                {t("p-RobustSecurity")}
              </div>
            </div>
            <ReadMore />
          </div>
        </div>

        <div className="mt-10 flex flex-1 flex-col-reverse items-center justify-between sm:mt-[87px] sm:flex-row sm:items-stretch">
          <div className="flex flex-1 flex-col items-center pt-10 sm:items-start sm:justify-between">
            <div>
              <div className="text-center text-base leading-6 text-black sm:text-left sm:text-[30px] sm:leading-[42px]">
                {t("cap-InstantRewards")}
              </div>
              <div
                className={cn(
                  "mt-6 text-center text-sm leading-6 text-gray sm:text-left sm:text-xl sm:leading-[30px]",
                )}
              >
                {t("p-InstantRewards")}
              </div>
            </div>
            <ReadMore />
          </div>
          <div className="flex flex-1 items-stretch justify-center">
            <Image
              src="/img/home/settlements.png"
              width={560}
              height={372}
              alt="rocket"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-1 flex-col items-center justify-between sm:mt-[87px] sm:flex-row sm:items-stretch">
          <div className="flex flex-1 items-stretch justify-center">
            <Image
              src="/img/home/instant-rewards.png"
              width={560}
              height={372}
              alt="rocket"
            />
          </div>
          <div className="flex flex-1 flex-col items-center pt-10 sm:items-start sm:justify-between">
            <div>
              <div className="text-center text-base leading-6 text-black sm:text-left sm:text-[30px] sm:leading-[42px]">
                {t("cap-RobustSecurity")}
              </div>
              <div
                className={cn(
                  "mt-6 text-center text-sm leading-6 text-gray sm:text-left sm:text-xl sm:leading-[30px]",
                )}
              >
                {t("p-RobustSecurity")}
              </div>
            </div>
            <ReadMore />
          </div>
        </div>
      </div>
    </div>
  );
}
