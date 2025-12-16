import { SquareSmall } from "@/components/shared/SquareSmall";
import { useTranslations } from "next-intl";

export const FreeItem03 = () => {
  const t = useTranslations("Services.freeAnswer03");
  const list = [t("item1"), t("item2"), t("item3"), t("item4"), t("item5")];

  return (
    <div className="tab:border-l tab:border-accent tab:pl-2 pc:pl-4 text-sm tab:text-base tab:leading-[21px]">
      <h3 className="text-sm tab:text-base leading-[21px] pc:text-lg font-semibold mb-3">
        {t("title")}
      </h3>
      {list.map((item, ind) => (
        <p key={ind} className="mb-4">
          {item}
        </p>
      ))}
    </div>
  );
};
