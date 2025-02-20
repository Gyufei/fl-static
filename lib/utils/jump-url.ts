export const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";
export const isProduction = process.env.NODE_ENV === "production" && !isPreview;

export const MarketplaceLink = isProduction
  ? "https://marketplace.tadle.com"
  : "https://preview-marketplace.tadle.com";

export const MissionsAppLink = isProduction
  ? "https://missions.tadle.com"
  : "https://preview-missions.tadle.com";

export const OddsLink = isProduction
  ? "https://odds.tadle.com"
  : "https://preview-odds.tadle.com";

export const TwitterLink = "https://x.com/tadle_com";
export const DiscordLink =
  "https://discord.com/channels/1254632665685164092/1254724478038970409";
export const TgLink = "https://t.me/tadlecom";
export const GithubLink = "https://github.com/tadle-com";
export const DocLink = "https://tadle.gitbook.io/tadle";

export const handleGoTwitter = () => {
  window.open(TwitterLink);
};

export const handleGoDiscord = () => {
  window.open(DiscordLink);
};

export const handleGoToDiscordTickets = () => {
  window.open(DiscordLink);
};

export const handleGoGithub = () => {
  // window.open("https://twitter.com/tadle_com");
};

export const handleGoTg = () => {
  window.open(TgLink);
};

export const handleGoDoc = () => {
  window.open(DocLink);
};
