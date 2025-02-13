"use client";

import { useState } from "react";
import Image from "next/image";
import {
  handleGoDiscord,
  handleGoGithub,
  handleGoTg,
  handleGoTwitter,
} from "@/lib/utils/jump-url";

export default function HoverSocialIcon({
  src,
  hoverSrc,
  width,
  height,
  alt,
  type,
}: {
  src: string;
  hoverSrc: string;
  width: number;
  height: number;
  alt: string;
  type: "discord" | "twitter" | "github" | "tg";
}) {
  const [isHover, setIsHover] = useState(false);

  function onClick() {
    switch (type) {
      case "discord":
        handleGoDiscord();
        break;
      case "twitter":
        handleGoTwitter();
        break;
      case "github":
        handleGoGithub();
        break;
      case "tg":
        handleGoTg();
        break;

      default:
        break;
    }
  }

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border border-gray sm:h-14 sm:w-14"
    >
      <Image
        src={isHover ? hoverSrc : src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
}
