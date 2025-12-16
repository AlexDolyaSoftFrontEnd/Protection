import { Legislation } from "@/components/Legislation/Legislation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

/* ============================================================
   Metadata
============================================================ */

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: "Legislation",
  });

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://protection.in.ua";

  return {
    metadataBase: new URL(baseUrl),

    alternates: {
      canonical:
        locale === "uk" ? "/legislation" : `/${locale}/legislation`,
      languages: {
        "uk-UA": "/legislation",
        "en-US": "/en/legislation",
        "ru-RU": "/ru/legislation",
      },
    },

    title: t("title"),
    description: t("description"),

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}${
        locale === "uk" ? "/legislation" : `/${locale}/legislation`
      }`,
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
  };
}

/* ============================================================
   Page
============================================================ */

export default function LegislationPage() {
  return <Legislation />;
}

