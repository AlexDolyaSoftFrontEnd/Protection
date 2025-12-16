import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Lora, Raleway, Roboto_Slab } from "next/font/google";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { routing } from "@/i18n/routing";

import "./globals.css";

/* ============================================================
   Fonts
============================================================ */

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
  variable: "--font-roboto-slab",
  display: "swap",
});

/* ============================================================
   Static params (SSG)
============================================================ */

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ============================================================
   Metadata
============================================================ */

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const t = await getTranslations({
    locale,
    namespace: "Site",
  });

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://protection.in.ua";

  return {
    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: locale === "uk" ? "/" : `/${locale}`,
      languages: {
        "uk-UA": "/",
        "en-US": "/en",
        "ru-RU": "/ru",
      },
    },

    title: t("title"),
    description: t("description"),

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: baseUrl,
      siteName: "Protection",
      type: "website",
      images: [
        {
          url: "/imageForSharing.jpg",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: ["/imageForSharing.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },

    icons: {
      icon: "/favicon.ico",
    },
  };
}

/* ============================================================
   Layout
============================================================ */

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`${lora.variable} ${raleway.variable} ${robotoSlab.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
              {children}
              <Analytics />
            </main>

            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
