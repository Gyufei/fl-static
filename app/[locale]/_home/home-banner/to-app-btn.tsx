"use client";
import { getGoAppUrl } from "@/lib/utils/jump-url";
import { useLocale } from "next-intl";
import { Link } from "@/app/navigation";

export default function ToAppBtn({
  type,
  label,
  href,
}: {
  type: string;
  label: string;
  href: string;
}) {
  const locale = useLocale();

  return (
    <Link
      href={getGoAppUrl(type, href, type === 'missions' ? locale : '' )}
      target="_blank"
      rel="noreferrer"
      className="w-full cursor-pointer sm:w-fit"
    >
      <div className="flex h-12 w-full items-center justify-center rounded-xl bg-yellow px-5 text-lg leading-6 ">
        {label}
      </div>
    </Link>
  );
}
