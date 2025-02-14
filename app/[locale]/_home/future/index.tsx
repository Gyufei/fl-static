import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils/common";
import ModeDesc from "./mode-desc";

export default function Future() {
  const t = useTranslations("Home");
  return (
    <div className="mx-4 mt-0 flex flex-col items-center pb-10 pt-2 sm:mx-[120px] sm:mt-6 sm:pb-[72px] sm:pt-6">
      <div className="text-center text-[24px] font-bold leading-[36px] text-black sm:text-[40px] sm:leading-[60px]">
        {t("cap-TheFutureOfTradingStartsHere")}
      </div>
      <div className="flex flex-1 flex-col items-stretch justify-between space-x-0 sm:flex-row sm:space-x-[80px]">
        <div className="flex-1 pt-2 sm:pt-[60px]">
          <div className="mb-3 text-center text-base leading-6 text-black sm:mb-[30px] sm:text-right sm:text-[30px] sm:leading-[42px]">
            {t("cap-SpecialPointMarket")}
          </div>
          <div
            className={cn("flex flex-col text-[18px] leading-[26px] text-gray")}
          >
            {t("p-SpecialPointMarket")}
          </div>
        </div>
        <ModeDesc />
      </div>
    </div>
  );
}
