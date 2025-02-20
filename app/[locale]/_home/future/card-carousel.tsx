"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/app/navigation";
import {
  MarketplaceLink,
  MissionsAppLink,
  OddsLink,
} from "@/lib/utils/jump-url";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/common";

export function CardCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  function handlePrev() {
    api?.scrollPrev();
  }

  function handleNext() {
    api?.scrollNext();
  }

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length ?? 0);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        className="mt-[40px] w-[calc(100%-40px)] sm:w-fit"
      >
        <CarouselContent>
          <CarouselItem className="sm:basis-1/3">
            <Card1 />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/3">
            <Card2 />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/3">
            <Card3 />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="mt-9 flex w-full items-center justify-between px-5 sm:hidden">
        <div className="flex items-center gap-x-[10px]">
          <div
            onClick={handlePrev}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border border-white bg-primaryColor"
          >
            <Image
              src="/icons/arrow-left.svg"
              alt="arrow-left"
              width={30}
              height={30}
            />
          </div>

          <div
            onClick={handleNext}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border border-white bg-primaryColor"
          >
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow-right"
              width={30}
              height={30}
            />
          </div>
        </div>

        <StepIndicator currentStep={current} stepCount={count} />
      </div>
    </>
  );
}

function StepIndicator({
  currentStep,
  stepCount,
}: {
  currentStep: number;
  stepCount: number;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      {Array.from({ length: stepCount }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-2 w-3 rounded-full bg-[#ffffff20]",
            currentStep === index && "w-8 bg-white",
          )}
        />
      ))}
    </div>
  );
}

function Card1() {
  const t = useTranslations("Home");

  return (
    <CardDisplay
      title={t("cap-CompletingMissions")}
      description={t("p-CompletingMissions")}
      linkName={t("lb-GetTadleGems")}
      linkUrl={MissionsAppLink}
    />
  );
}

function Card2() {
  const t = useTranslations("Home");

  return (
    <CardDisplay
      title={t("cap-CallItFirst")}
      description={t("p-CallItFirst")}
      linkName={t("lb-PredictMarketOdds")}
      linkUrl={OddsLink}
    />
  );
}

function Card3() {
  const t = useTranslations("Home");

  return (
    <CardDisplay
      title={t("cap-TradingPoints")}
      description={t("p-TradingPoints")}
      linkName={t("lb-TradeProjectPoints")}
      linkUrl={MarketplaceLink}
    />
  );
}

function CardDisplay({
  title,
  description,
  linkName,
  linkUrl,
}: {
  title: string;
  description: string;
  linkName: string;
  linkUrl: string;
}) {
  return (
    <div className="relative h-[350px] w-[358px] overflow-hidden sm:h-[392px] sm:w-[396px]">
      <div className="absolute left-3 top-3 z-0 h-[336px] w-[343px] rounded-[20px] border-[2px] border-[#ffffff60] sm:h-[375px] sm:w-[380px]"></div>
      <div className="flex h-[336px] w-[343px] flex-col items-stretch justify-between rounded-[20px] bg-white p-5 shadow-[10px_10px_40px_0px_#486BD4] sm:h-[375px] sm:w-[380px] sm:p-[30px]">
        <div className="z-10 mt-[5px]">
          <div className="text-[20px] font-medium leading-[30px] text-[#121721] sm:text-[28px] sm:leading-[36px]">
            {title}
          </div>
          <div
            className="mt-[15px] max-h-[200px] text-[16px] leading-[24px] text-[#6E6F79]"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 8,
              overflow: "hidden",
            }}
          >
            {description}
          </div>
        </div>

        <Link
          href={linkUrl}
          className="z-10 flex items-center justify-between border-t border-[#EBEBEB] pt-[18px]"
        >
          <div className="cursor-pointer text-xl font-medium leading-[30px] text-primaryColor">
            {linkName}
          </div>
          <Image
            className="cursor-pointer"
            src="/icons/arrow-right-blue.svg"
            alt="arrow-right"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
}
