import { InterpolPage } from "@/components/Interpol/InterpolPage";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Interpol" });

  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      languages: {
        "en-US": "/en/interpol",
        "ru-RU": "/ru/interpol",
        "uk-UA": "/interpol",
      },
    },
    title: t("title"),
    description: t("descriptionSite"),
    openGraph: {
      title: t("title"),
      description: t("descriptionSite"),
      type: "website",
    },
  };
}

export default function Home() {
  return <InterpolPage />;
}
