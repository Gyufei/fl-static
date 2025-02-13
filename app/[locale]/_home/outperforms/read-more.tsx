"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ReadMore() {
  const t = useTranslations("Home");

  function onClick() {}

  return (
    <div
      onClick={onClick}
      className="mt-6 flex h-12 w-[200px] cursor-pointer items-center justify-center space-x-1 rounded-xl bg-yellow text-lg leading-6 hover:w-[200px] hover:bg-yellow sm:mb-10 sm:mt-0 sm:w-fit sm:bg-transparent"
    >
      <div className="flex justify-between space-x-1">
        <div className="text-lg leading-6 text-black">{t("btn-ReadMore")}</div>
        <Image src="/icons/right-arrow.svg" width={24} height={24} alt="go" />
      </div>
    </div>
  );
}
