import Image from "next/image";
import { useTranslations } from "next-intl";
import SubscribeInput from "./subscribe-input";
import SocialIcon from "./social-icon";

export default function ContactUs() {
  const t = useTranslations("Home");

  return (
    <div className="bg-[#F9FAF2] px-4 pt-[60px] sm:px-[120px]">
      <div className="flex flex-col items-end justify-between sm:flex-row">
        <div className="flex w-full flex-col items-center sm:w-fit sm:items-start">
          <div className="text-center text-2xl leading-9 text-black sm:text-4xl sm:text-[40px] sm:leading-[54px]">
            {t("cap-UnlockEarlyAccess")}
          </div>
          <SubscribeInput />
        </div>
        <div className="mt-5 flex w-full items-center justify-start space-x-5 sm:mt-0 sm:w-fit">
          <SocialIcon
            type="discord"
            src="/icons/discord-gray.svg"
            hoverSrc="/icons/discord.svg"
            width={32}
            height={32}
            alt="discord"
          />
          <SocialIcon
            type="twitter"
            src="/icons/twitter-gray.svg"
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

      <div className="flex flex-col items-start justify-between px-0 py-[60px] sm:flex-row sm:items-center">
        <Image
          src="/icons/logo.svg"
          width={75}
          height={20}
          alt="logo"
          className="mb-8 sm:mb-0"
        />
        <div className="flex flex-wrap items-center justify-between gap-x-10 sm:flex-nowrap"></div>
      </div>

      <div
        className="flex h-10 items-center justify-between px-0 py-[24px]"
        style={{
          boxShadow: "inset 0px 1px 0px 0px #EEEEEE",
        }}
      >
        <div className="text-sm leading-5 text-lightgray">
          <span className="inline-block">
            Copyright @ Whity Ltd 2024. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
