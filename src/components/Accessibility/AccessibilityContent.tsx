import { useTranslations } from "next-intl";
import { SquareSmall } from "../shared/SquareSmall";

export const AccessibilityContent = () => {
  const t = useTranslations("Accessibility");
  return (
    <section className="bg-accentBg text-base tab:text-lg px-4 py-10 tab:px-5 pc:px-[38px] pc:py-[60px]">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] mx-auto">
        <h2 className="font-lora italic text-accent text-center mb-5 pc:mb-4 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium ">
          {t("sectionTitle1")}
        </h2>
        <p className="indent-7 mb-7 ">{t("sectionP1")}</p>
        <h2 className="font-lora italic text-accent text-center mb-5 pc:mb-4 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium ">
          {t("sectionTitle2")}
        </h2>
        <ul className="mb-4 ">
          <li className="flex gap-2 text-start mb-2">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p>{t("sectionLi1")}</p>
          </li>
          <li className="flex gap-2 text-start mb-2">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p>{t("sectionLi2")}</p>
          </li>
          <li className="flex gap-2 text-start mb-2">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p>{t("sectionLi3")}</p>
          </li>
          <li className="flex gap-2 text-start mb-2">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p>{t("sectionLi4")}</p>
          </li>
          <li className="flex gap-2 text-start mb-2">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p>{t("sectionLi5")}</p>
          </li>
          <li className="flex gap-2 text-start mb-2">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p>{t("sectionLi6")}</p>
          </li>
          <li className="flex gap-2 text-start mb-2">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p>{t("sectionLi7")}</p>
          </li>
          <li className="flex gap-2 text-start mb-2">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p>{t("sectionLi8")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
