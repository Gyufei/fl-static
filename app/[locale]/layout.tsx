import "@/app/globals.css";
import { AeonikFont } from "@/app/fonts";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cn } from "@/lib/utils/common";
import { redirect } from "next/navigation";
import { locales } from "../../i18n";

export const metadata = {
  title: {
    template: "%s | Tadle",
    default: "Tadle",
  },
  description:
    "To predict. To trade. To own. Tadle is the first Trading-as-a-Service (TaaS) infra in the world, making your favorite projects yours.",
  metadataBase: new URL(`https://${process.env.VERCEL_DOMAIN}`),
  openGraph: {
    title: "Tadle",
    description:
      "To predict. To trade. To own. Tadle is the first Trading-as-a-Service (TaaS) infra in the world, making your favorite projects yours.",
    url: `https://${process.env.VERCEL_DOMAIN}`,
    siteName: "Tadle",
    images: "/img/YyYzEtYmU5Yy00ODk4LWJjNmE.png",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/img/favs/favicon-32x32.png" },
      { url: "/img/favs/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/img/shortcut-icon.png",
    apple: [
      { url: "/img/favs/apple-touch-icon.png" },
      {
        url: "/img/favs/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/img/favs/apple-touch-icon-precomposed.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Tadle",
    description:
      "To predict. To trade. To own. Tadle is the first Trading-as-a-Service (TaaS) infra in the world, making your favorite projects yours.",
    creator: "@tadle_com",
    images: ["/img/YyYzEtYmU5Yy00ODk4LWJjNmE.png"],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (locale && !locales.includes(locale as any)) {
    redirect("/en/not-found");
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={cn(AeonikFont.variable)}>
        <NextIntlClientProvider messages={messages}>
          <div className="h-screen w-screen overflow-y-auto overflow-x-hidden bg-white">
            <div className="flex w-full flex-col justify-between">
              <div className="relative mx-auto w-full">{children}</div>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
