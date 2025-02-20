"use client";

import { useTranslations } from "next-intl";

export default function ReadMore() {
  const t = useTranslations("Home");

  function onClick() {}

  return (
    <div
      onClick={onClick}
      className="mt-6 flex h-12 w-[200px] cursor-pointer items-center justify-center space-x-1 rounded-xl sm:justify-start"
    >
      <div className="flex items-center gap-x-1 text-[18px] leading-6 text-primaryColor">
        <span>{t("btn-ReadMore")}</span>
        <span>&gt;&gt;&gt;</span>
      </div>
    </div>
  );
}
