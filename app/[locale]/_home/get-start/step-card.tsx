import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/app/navigation";
import { DocLink } from "@/lib/utils/jump-url";
import { cn } from "@/lib/utils/common";

export function StepCard({
  index,
  title,
  imageSrc,
  isActive = false,
  className,
}: {
  index: number;
  title: string;
  imageSrc: string;
  isActive?: boolean;
  className?: string;
}) {
  const t = useTranslations("Home");

  return (
    <div
      className={cn(
        "relative h-[280px] w-full rounded-[20px] px-[30px] py-6 sm:w-[374px]",
        isActive
          ? "bg-primaryColor"
          : "border border-[#99A0AF30] bg-white bg-cover shadow-[4px_8px_40px_0px_rgba(45,46,51,0.04)]",
        className,
      )}
      style={{
        backgroundImage: isActive
          ? "none"
          : "url(/img/home/home-search-project.png)",
      }}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "text-[36px] font-medium leading-[42px] sm:text-[40px]",
              isActive ? "text-[#F7F9FF]" : "text-[#0F1324]",
            )}
          >
            {`0${index}`}
          </div>
          <Image
            className="absolute right-6 top-6"
            src={imageSrc}
            width={100}
            height={100}
            alt="wallet"
          />
        </div>
        <div>
          <div
            className={cn(
              "text-base leading-6 sm:text-[22px]",
              isActive ? "text-[#F7F9FF80]" : "text-[#6E6F79]",
            )}
          >
            {t("txt-Step")} {index}
          </div>
          <Link
            className={cn(
              "text-xl leading-[30px] text-[#0F1324] sm:text-[24px] sm:leading-9",
              isActive ? "text-[#F7F9FF]" : "text-[#0F1324]",
            )}
            href={`${DocLink}/user-guides/get-started-for-users`}
          >
            {title}
          </Link>
        </div>
      </div>
      {isActive && (
        <div className="absolute bottom-10 right-0 z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border-[3px] border-[#fff] bg-primaryColor sm:right-[-18px]">
          <Image src="/icons/arrow-right.svg" width={40} height={40} alt="go" />
        </div>
      )}
    </div>
  );
}
