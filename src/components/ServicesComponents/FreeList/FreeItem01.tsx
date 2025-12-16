import { SquareSmall } from "@/components/shared/SquareSmall";
import { useTranslations } from "next-intl";

export const FreeItem01 = () => {
  const t = useTranslations("Services.freeAnswer01");

  return (
    <div className="tab:border-l tab:border-accent tab:pl-2 pc:pl-4">
      <h3 className="text-sm tab:text-base leading-[21px] pc:text-lg font-semibold mb-3">
        {t("titleList1")}
      </h3>
      <ul className="mb-6 text-sm tab:text-base tab:leading-[21px]">
        <li className="flex gap-2 text-start mb-2">
          <div className="">
            <span className="text-base leading-[21px] tab:text-lg font-semibold mb-3 text-accent">
              1
            </span>
          </div>
          <p>
            {t.rich("item11", {
              bold: (chunk) => <span className="font-semibold">{chunk}</span>,
            })}
          </p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("subItem11")}</p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("subItem12")}</p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("subItem13")}</p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="">
            <span className="text-base leading-[21px] tab:text-lg font-semibold mb-3 text-accent">
              2
            </span>
          </div>
          <p>
            {t.rich("item12", {
              bold: (chunk) => <span className="font-semibold">{chunk}</span>,
            })}
          </p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="">
            <span className="text-base leading-[21px] tab:text-lg font-semibold mb-3 text-accent">
              3
            </span>
          </div>
          <p>
            {t.rich("item13", {
              bold: (chunk) => <span className="font-semibold">{chunk}</span>,
            })}
          </p>
        </li>
      </ul>
      <h3 className="text-sm tab:text-base leading-[21px] pc:text-lg font-semibold mb-3">
        {t("titleList2")}
      </h3>
      <ul className="mb-6 text-sm tab:text-base tab:leading-[21px]">
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("item21")}</p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("item22")}</p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("item23")}</p>
        </li>
      </ul>
      <h3 className="text-sm tab:text-base leading-[21px] pc:text-lg font-semibold mb-3">
        {t("titleList3")}
      </h3>
      <p className="mb-3 text-sm tab:text-base tab:leading-[21px]">
        {t("textList31")}
      </p>
      <ul className="mb-3 text-sm tab:text-base tab:leading-[21px]">
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("item31")}</p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("item32")}</p>
        </li>
      </ul>
      <p className="mb-4 text-sm tab:text-base tab:leading-[21px]">
        {t("textList32")}
      </p>
    </div>
  );
};
