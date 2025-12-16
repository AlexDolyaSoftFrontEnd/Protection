import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { ImArrowRight } from "react-icons/im";

const AccessibilitySection = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  return (
    <section
      id="accessibility"
      className="bg-accentBg shadow-inner shadow-accentBgDark py-10 px-4 tab:px-5 tab:py-[60px] pc:px-9 "
    >
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] ml-auto mr-auto">
        {" "}
        <Link
          href={`/${locale}/accessibility`}
          className="flex items-center justify-center gap-4 "
        >
          <h2 className="font-lora text-xl tab:text-2xl italic font-medium text-center tab:text-left">
            {t("accessibility")}
          </h2>
          <ImArrowRight className=" text-accent w-7 h-7" />
        </Link>
      </div>
    </section>
  );
};
export default AccessibilitySection;
