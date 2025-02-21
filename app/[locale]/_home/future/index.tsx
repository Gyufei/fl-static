import { useTranslations } from "next-intl";
import { CardCarousel } from "./card-carousel";

export default function Future() {
  const t = useTranslations("Home");

  return (
    <div
      className="flex h-[620px] flex-col items-center px-0 sm:h-[795px] sm:px-[120px]"
      style={{
        backgroundImage: "url(/img/home/home-bg-2.png)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-[50px] text-center text-[24px] font-medium leading-[36px] text-white sm:mt-[100px] sm:text-[44px] sm:leading-[60px]">
        <div>{t("cap-PowerTheFutureOfTrading")}</div>
        <div>{t("cap-RewardsAndPredictions")}</div>
      </div>

      <CardCarousel />
    </div>
  );
}
