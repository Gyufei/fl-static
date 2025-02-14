"use client";
import { handleGoApp } from "@/lib/utils/jump-url";
import { useLocale } from "next-intl";

export default function ToAppBtn({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  const locale = useLocale();

  return (
    <div
      onClick={() => handleGoApp(href, locale)}
      className="w-full cursor-pointer sm:w-fit"
    >
      <div className="flex h-12 w-full items-center justify-center rounded-xl bg-yellow px-5 text-lg leading-6 ">
        {label}
      </div>
    </div>
  );
}
