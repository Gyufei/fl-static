import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/app/navigation";
import { DocLink, OddsLink } from "@/lib/utils/jump-url";

export default function HomeBanner() {
  const t = useTranslations("Home");

  return (
    <>
      <div
        className="flex h-fit flex-col items-center pb-[50px] sm:mb-[60px] sm:h-[700px]"
        style={{
          backgroundImage: "url(/img/home/home-bg-1.png)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex h-14 items-center justify-center bg-[#ffffff10] sm:h-24">
          <Image src="/icons/logo.svg" alt="logo" width={105} height={28} />
        </div>

        <div className="relative mt-6 flex flex-row px-4 sm:mt-[146px] sm:min-w-[1023px] sm:flex-col sm:px-0">
          <div
            className="px-[70px] text-center text-[50px] font-medium leading-[56px] sm:px-0 sm:text-[80px] sm:leading-[100px]"
            style={{
              background: "linear-gradient(180deg, #6E75F9 0%, #989DFF 100%)",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t("cap-CenterTitle")}
          </div>
          <Image
            src="/img/home/home-title-path.png?v=2"
            width={300}
            height={210}
            alt="home title path"
            className="absolute left-[20px] top-[112px] hidden sm:block"
          />
        </div>

        <div className="mt-5 text-center text-base leading-6 text-[#0F132460] sm:mt-[70px] sm:text-xl sm:leading-[30px]">
          {t("cap-BridgingLiquidityBetweenPrimaryAndSecondaryMarkets")}
        </div>

        <div className="mt-4 flex w-full flex-col items-center px-4 sm:mt-20">
          <Link
            href={OddsLink}
            className="flex h-12 w-full cursor-pointer items-center  justify-center rounded-xl bg-primaryColor text-[18px] font-medium leading-6 text-white sm:h-16 sm:w-fit sm:px-[70px] sm:text-[22px]"
          >
            {t("btn-LaunchOdds")}
          </Link>

          <Link
            href={DocLink}
            className="mt-[20px] flex h-12 cursor-pointer items-center space-x-[6px] sm:h-fit"
          >
            <div className="text-lg leading-6 text-[#0F132460]">
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
    </>
  );
}
