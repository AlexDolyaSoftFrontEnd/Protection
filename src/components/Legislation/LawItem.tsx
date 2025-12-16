import { useLocale } from "next-intl";
import { LegislationType } from "@/mockedData/legislation";
import { SquareSmall } from "../shared/SquareSmall";
import { LocaleType } from "../../../types/LocaleType";

export const LawItem = ({
  item,
}: {
  item: LegislationType;
}) => {
  const locale = useLocale();

  return (
    <>
      <div className="mt-2">
        <SquareSmall />
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent focus:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        href={item.data.link}
      >
        {item[locale as LocaleType]?.legislationTitle}
      </a>
    </>
  );
};
