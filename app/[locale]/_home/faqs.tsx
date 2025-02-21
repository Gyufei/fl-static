"use client";

import Image from "next/image";
import React, { forwardRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/app/navigation";
import { cn } from "@/lib/utils/common";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { DocLink } from "@/lib/utils/jump-url";

export default function Faqs() {
  const t = useTranslations("Home");
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <div className="flex flex-col bg-white px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:gap-x-[72px] sm:px-[120px] sm:pb-[100px] sm:pt-[120px]">
      <div className="relative flex flex-col sm:w-[400px]">
        <div className="z-10 flex-1 text-center text-2xl font-medium leading-9 text-[#0F1324] sm:text-left sm:text-[44px] sm:leading-[54px]">
          {t("cap-FAQ")}
        </div>
        <div className="z-10 mt-[10px] flex cursor-pointer items-center justify-center space-x-1 sm:mt-10 sm:justify-start ">
          <Link
            className="flex gap-x-2 text-xl leading-[30px] text-primaryColor"
            href={`${DocLink}/faq`}
          >
            <span>{t("btn-LearnMore")}</span>
            <span>&gt;&gt;&gt;</span>
          </Link>
        </div>
        <Image
          src="/icons/FAQ.svg"
          width={132}
          height={384}
          alt="faq"
          className="absolute left-0 top-10 z-0 hidden sm:block"
        />
      </div>

      <div className="mt-4 flex-1">
        <Coll
          openIdx={openIdx}
          setOpenIdx={setOpenIdx}
          idx={0}
          title={t("cap-WhatIsTadle")}
          content={t("p-WhatIsTadle")}
        />
        <Coll
          openIdx={openIdx}
          setOpenIdx={setOpenIdx}
          idx={1}
          title={t("cap-WhatIsTheTadlePointsMarketplace")}
          content={t("p-WhatIsTheTadlePointsMarketplace")}
        />
        <Coll
          openIdx={openIdx}
          setOpenIdx={setOpenIdx}
          idx={2}
          title={t("cap-WhatExactlyArePoints")}
          content={t("p-WhatExactlyArePoints")}
        />
        <Coll
          openIdx={openIdx}
          setOpenIdx={setOpenIdx}
          idx={3}
          title={t("cap-WhatIsTheMissionMarketplace")}
          content={t("p-WhatIsTheMissionMarketplace")}
        />
        <Coll
          openIdx={openIdx}
          setOpenIdx={setOpenIdx}
          idx={4}
          title={t("cap-WhatExactlyAreTadleGems")}
          content={t("p-WhatExactlyAreTadleGems")}
        />
        <Coll
          openIdx={openIdx}
          setOpenIdx={setOpenIdx}
          idx={5}
          title={t("cap-WhatIsTheTadleOddsMarketplace")}
          content={t("p-WhatIsTheTadleOddsMarketplace")}
        />
        <Coll
          openIdx={openIdx}
          setOpenIdx={setOpenIdx}
          idx={6}
          title={t("cap-HowDoesTadleOddsWork")}
          content={t("p-HowDoesTadleOddsWork")}
        />
      </div>
    </div>
  );
}

function Coll({
  openIdx,
  setOpenIdx,
  idx,
  title,
  content,
}: {
  openIdx: number;
  setOpenIdx: (openIdx: number) => void;
  idx: number;
  title: string;
  content: string;
}) {
  return (
    <Collapsible
      open={openIdx === idx}
      onOpenChange={(open) => setOpenIdx(open ? idx : -1)}
      className="border-b border-[#121721] py-6"
    >
      <CollapsibleTrigger asChild>
        <CollTrigger isOpen={openIdx === idx}>{title}</CollTrigger>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <CollContent>{content}</CollContent>
      </CollapsibleContent>
    </Collapsible>
  );
}

const CollTrigger = forwardRef(
  (
    {
      isOpen,
      children,
      ...props
    }: { isOpen: boolean; children: React.ReactNode },
    ref: any,
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className="flex w-full items-center justify-between"
      >
        <div className="flex items-center space-x-5">
          <div className="relative z-10 text-base leading-6 text-[#2D2E33] sm:text-xl sm:leading-[30px]">
            {children}
          </div>
        </div>

        <div>
          {isOpen ? (
            <Image src="/icons/close.svg" width={24} height={24} alt="close" />
          ) : (
            <Image src="/icons/plus.svg" width={24} height={24} alt="close" />
          )}
        </div>
      </button>
    );
  },
);
CollTrigger.displayName = "CollTrigger";

function CollContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "mt-[10px] text-sm leading-5 text-[#6E6F79] sm:text-base sm:leading-6",
      )}
    >
      {children}
    </div>
  );
}
