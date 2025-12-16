import { ServicesPage } from "@/components/ServicesComponents/ServicesPage";
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
    namespace: "Services",
  });

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://protection.in.ua";

  return {
    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: locale === "uk" ? "/services" : `/${locale}/services`,
      languages: {
        "uk-UA": "/services",
        "en-US": "/en/services",
        "ru-RU": "/ru/services",
      },
    },

    title: t("title"),
    description: t("description"),

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}${
        locale === "uk" ? "/services" : `/${locale}/services`
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

export default function Services() {
  return <ServicesPage />;
}
