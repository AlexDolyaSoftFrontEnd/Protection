import { Lora, Raleway, Roboto_Slab } from "next/font/google";
import { NextIntlClientProvider, useMessages, hasLocale } from "next-intl";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-raleway",
  display: "swap",
});
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-robotoSlab",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "Site" });

  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      languages: {
        "en-US": "/en",
        "ru-RU": "/ru",
        "uk-UA": "/",
      },
    },
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
    },
  };
}
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      lang={locale}
      className={`${lora.variable} ${raleway.variable} ${robotoSlab.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="image" property="og:image" content="/imageForSharing.jpg" />
        <meta name="twitter:image" content="/imageForSharing.jpg" />
        <meta name="robots" content="index, follow" />
      </head>
      <NextIntlClientProvider>
        <body>
          <div className="flex flex-col min-h-[100%]">
            <Header />

            <main className="flex-[1_0_auto]">
              {children}
              <Analytics />
            </main>
            <Footer />
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
