import Contacts from "@/components/Contacts/Contacts";
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
    namespace: "Contacts",
  });

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://protection.in.ua";

  return {
    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: locale === "uk" ? "/contacts" : `/${locale}/contacts`,
      languages: {
        "uk-UA": "/contacts",
        "en-US": "/en/contacts",
        "ru-RU": "/ru/contacts",
      },
    },

    title: t("title"),
    description: t("description"),

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}${
        locale === "uk" ? "/contacts" : `/${locale}/contacts`
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

export default function ContactsPage() {
  return <Contacts />;
}
