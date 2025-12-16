import AccessibilityPage from "@/components/Accessibility/AccessibilityPage";
import { getTranslations } from "next-intl/server";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Accessibility" });

  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      languages: {
        "en-US": "/en/accessibility",
        "ru-RU": "/ru/accessibility",
        "uk-UA": "/accessibility",
      },
    },
    title: t("sectionTitle1"),
    description: t("description2"),
    openGraph: {
      title: t("sectionTitle1"),
      description: t("description2"),
      type: "website",
    },
  };
}

export default function Accessibility() {
  return <AccessibilityPage />;
}
