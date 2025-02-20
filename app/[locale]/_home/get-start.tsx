import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/app/navigation";
import { DocLink } from "@/lib/utils/jump-url";

export default function GetStart() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col items-center bg-[#F6F7FF] px-4 py-10 sm:px-[120px] sm:py-20">
      <div className="mb-10 flex text-[24px] font-medium leading-9 text-[#0F1324] sm:mb-0 sm:text-[44px] sm:leading-[60px]">
        {t("cap-HowToGetStartedWithTadle")}
      </div>
      <div className="flex flex-col items-center justify-between space-x-0 space-y-6 sm:mt-[68px] sm:flex-row sm:space-x-10 sm:space-y-0">
        <div className="flex flex-col">
          <div className="relative h-[280px] w-[374px] rounded-[20px] bg-primaryColor px-[30px] py-6 ">
            <div className="flex h-full flex-col justify-between">
              <div className="text-[36px] font-medium leading-[42px] text-[#F7F9FF] sm:text-[40px] sm:leading-9">
                01
              </div>
              <div>
                <div className="text-base text-[#F7F9FF80] sm:text-[22px] sm:leading-6">
                  {t("txt-Step")} 1
                </div>
                <Link href={`${DocLink}/user-guides/get-started-for-users`}>
                  <div className="text-xl leading-[30px] text-[#F7F9FF] sm:text-[24px] sm:leading-9">
                    {t("txt-ConnectToYourWallet")}
                  </div>
                </Link>
              </div>
            </div>

            <Image
              className="absolute right-6 top-6"
              src="/icons/home-wallet.svg"
              width={120}
              height={120}
              alt="wallet"
            />
            <div className="absolute bottom-10 right-0 z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border-[3px] border-[#fff] bg-primaryColor sm:right-[-18px]">
              <Image
                src="/icons/arrow-right.svg"
                width={40}
                height={40}
                alt="go"
              />
            </div>
          </div>

          <div
            className="relative mt-10 h-[280px] w-[374px] overflow-hidden rounded-[20px] border border-[rgba(153,160,175,0.3)] bg-white bg-cover px-[30px] py-6"
            style={{
              backgroundImage: "url(/img/home/home-search-project.png)",
            }}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="text-[32px] font-medium leading-9 text-[#0F1324] sm:text-[40px]">
                  02
                </div>
                <Image
                  className="absolute right-6 top-6"
                  src="/icons/search-project.svg"
                  width={100}
                  height={100}
                  alt="wallet"
                />
              </div>
              <div>
                <div className="text-base leading-5 text-[rgba(45,46,51,0.4)]">
                  {t("txt-Step")} 2
                </div>
                <Link href={`${DocLink}/user-guides/get-started-for-users`}>
                  <div className="text-xl leading-[30px] text-[#0F1324] sm:text-lg sm:leading-9">
                    {t("txt-SearchForTheProjects")}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative mt-10 h-[280px] w-[374px] overflow-hidden rounded-[20px] border border-[rgba(153,160,175,0.3)] bg-white bg-cover px-[30px] py-6 shadow-[4px_8px_40px_0px_rgba(45,46,51,0.04)]"
          style={{
            backgroundImage: "url(/img/home/home-search-project.png)",
          }}
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="text-[32px] font-medium leading-9 text-[#0F1324] sm:text-[40px]">
                03
              </div>
              <Image
                className="absolute right-6 top-6"
                src="/icons/buy-sell-order.svg"
                width={100}
                height={100}
                alt="wallet"
              />
            </div>
            <div>
              <div className="text-base leading-5 text-[rgba(45,46,51,0.4)]">
                {t("txt-Step")} 3
              </div>
              <Link href={`${DocLink}/user-guides/get-started-for-users`}>
                <div className="text-xl leading-[30px] text-[#0F1324] sm:text-lg sm:leading-9">
                  {t("txt-PlaceABuyOrSellOrder")}
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="relative mt-10 h-[280px] w-[374px] overflow-hidden rounded-[20px] border border-[rgba(153,160,175,0.3)] bg-white bg-cover px-[30px] py-6 shadow-[4px_8px_40px_0px_rgba(45,46,51,0.04)]"
          style={{
            backgroundImage: "url(/img/home/home-search-project.png)",
          }}
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="text-[32px] font-medium leading-9 text-[#0F1324] sm:text-[40px]">
                04
              </div>
              <Image
                className="absolute right-6 top-6"
                src="/icons/check-dashboard.svg"
                width={100}
                height={100}
                alt="wallet"
              />
            </div>
            <div>
              <div className="text-base leading-5 text-[rgba(45,46,51,0.4)]">
                {t("txt-Step")} 4
              </div>
              <Link href={`${DocLink}/user-guides/get-started-for-users`}>
                <div className="text-xl leading-[30px] text-[#0F1324] sm:text-lg sm:leading-9">
                  {t("txt-CheckMetricsInDashboard")}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
