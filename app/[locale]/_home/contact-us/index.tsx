import Image from "next/image";
import { useTranslations } from "next-intl";
import SubscribeInput from "./subscribe-input";
import SocialIcon from "./social-icon";
import { Link } from "@/app/navigation";
import { DocLink } from "@/lib/utils/jump-url";

export default function ContactUs() {
  const t = useTranslations("Home");

  return (
    <div className="bg-primaryColor bg-none bg-no-repeat px-4 pt-10 sm:bg-[url('/img/home/footer-bg.svg')] sm:bg-[bottom_right_170px] sm:px-[120px] sm:pt-[60px]">
      <div className="flex flex-col items-end justify-between sm:flex-row">
        <div className="flex w-full flex-col items-center sm:w-fit sm:items-start">
          <div className="text-center text-2xl font-medium leading-9 text-[#fff] sm:text-4xl sm:text-[40px] sm:leading-[54px]">
            {t("cap-UnlockEarlyAccess")}
          </div>
          <div className="mt-[10px] text-center text-sm leading-5 text-[#ffffff60] sm:text-left sm:text-base sm:leading-6">
            {t("p-UnlockEarlyAccess")}
          </div>
          <SubscribeInput />
        </div>
        <div className="mt-[30px] flex w-full items-center justify-center space-x-5 sm:mt-0 sm:w-fit sm:justify-start">
          <SocialIcon
            type="discord"
            src="/icons/discord.svg"
            hoverSrc="/icons/discord.svg"
            width={32}
            height={32}
            alt="discord"
          />
          <SocialIcon
            type="twitter"
            src="/icons/twitter.svg"
            hoverSrc="/icons/twitter.svg"
            width={32}
            height={32}
            alt="x"
          />
          <SocialIcon
            type="github"
            src="/icons/github.svg"
            hoverSrc="/icons/github.svg"
            width={32}
            height={32}
            alt="discord"
          />
          <SocialIcon
            type="tg"
            src="/icons/telegram.svg"
            hoverSrc="/icons/telegram.svg"
            width={32}
            height={32}
            alt="discord"
          />
        </div>
      </div>

      <div className="my-[30px] flex flex-col items-center justify-center gap-y-[30px] sm:mb-[20px] sm:mt-[60px] sm:flex-row sm:items-center sm:justify-between sm:gap-y-0">
        <div className="flex items-center justify-center">
          <Image
            src="/icons/logo-white.svg"
            width={75}
            height={20}
            alt="logo"
          />
          <div className="mx-5 h-4 w-[1px] bg-white"></div>
          <div className="flex items-center justify-center gap-x-[10px]">
            <span className="text-base leading-6 text-white">
              {t("cap-BuiltOn")}
            </span>
            <Image src="/icons/monad.svg" width={108} height={20} alt="monad" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-[30px] sm:gap-x-14">
          <Link
            href="/tadle-brand-kit.zip"
            className="text-sm leading-5 text-white"
          >
            {t("btn-Brandkit")}
          </Link>
          <Link href={DocLink} className="text-sm leading-5 text-white">
            {t("btn-Learn")}
          </Link>
          <Link href={DocLink} className="text-sm leading-5 text-white">
            {t("btn-Developers")}
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-center gap-y-[10px] border-t border-[#ffffff30] py-5 sm:flex-row sm:justify-between sm:gap-y-0 sm:pb-[26px] sm:pt-6">
        <div className="flex items-center gap-x-[10px]">
          <div className="h-3 w-3 rounded-full bg-[#06D98B]"></div>
          <div className="text-sm leading-5 text-[#ffffff60]">
            {t("p-AllSystemsOperational")}
          </div>
        </div>
        <div className="text-sm leading-5 text-[#ffffff60]">
          <span className="inline-block">
            Copyright @ Whity Ltd 2024. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
