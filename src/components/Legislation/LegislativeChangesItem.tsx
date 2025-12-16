import { useLocale, useTranslations } from "next-intl";
import { SquareSmall } from "../shared/SquareSmall";
import { LocaleType } from "../../../types/LocaleType";
import { LegislationChangesType } from "@/mockedData/legislationChangesData";
import { LuExternalLink } from "react-icons/lu";

export const LegislativeChangesItem = ({ item }: { item: LegislationChangesType }) => {
  const locale = useLocale();
  const t = useTranslations("Legislation");

  return (
    <>
      <div className="mt-2">
        <SquareSmall />
      </div>
      <div>
        <p className=" whitespace-pre-line">
          {item[locale as LocaleType]?.legislationTitle}
        </p>
        <div className="mt-1">
          {item.data.link.map((link, ind) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-2 font-semibold inline-flex items-center gap-1 hover:text-accent focus:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              href={link}
            >
              {item.data.link.length > 1 ? t("link") + " " + (ind + 1) : t("link")}
              <LuExternalLink />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
