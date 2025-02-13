import { handleGoTwitter } from "@/lib/utils/jump-url";
import HoverIcon from "@/components/ui/hover-icon";
import LanguageSetting from "./language-setting";
import { cn } from "@/lib/utils/common";

export default function PageFooter({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-6 pb-4 pt-5",
        className,
      )}
    >
      <div />
      <div className="flex items-center space-x-5">
        <HoverIcon
          onClick={handleGoTwitter}
          src="/icons/twitter-gray.svg"
          hoverSrc="/icons/twitter.svg"
          width={24}
          height={24}
          alt="x"
        />
        <LanguageSetting />
      </div>
    </div>
  );
}
