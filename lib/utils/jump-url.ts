import { isProduction } from "../api/PathMap";

export const AppLink = isProduction
  ? "https://gems.tadle.com"
  : "https://preview.tadle.com";

export const TwitterLink = "https://twitter.com/tadle_com";
export const DiscordLink =
  "https://discord.com/channels/1254632665685164092/1254724478038970409";
export const TgLink = "https://t.me/tadlecom";
export const GithubLink = "https://github.com/tadle-com";
export const DocLink = "https://tadle.gitbook.io/tadle";

export const handleGoApp = (path: string = "", locale: string = "") => {
  window.open(AppLink + `/${locale}` + path);
};

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
