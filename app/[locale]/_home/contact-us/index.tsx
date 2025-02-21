import Image from "next/image";
import { useTranslations } from "next-intl";
import SubscribeInput from "./subscribe-input";
import SocialIcon from "./social-icon";

export default function ContactUs() {
  const t = useTranslations("Home");

  return (
    <div className="bg-primaryColor px-4 pt-10 sm:px-[120px] sm:pt-[60px]">
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

      <div className="flex items-center justify-center px-0 pb-5 pt-8 sm:flex-row sm:items-center sm:justify-start sm:pb-[60px] sm:pt-[60px]">
        <Image src="/icons/logo-white.svg" width={75} height={20} alt="logo" />
      </div>

      <div className="flex h-[60px] items-center justify-center border-t border-[#ffffff30] sm:justify-start">
        <div className="text-sm leading-5 text-[#ffffff60]">
          <span className="inline-block">
            Copyright @ Whity Ltd 2024. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
