import { SquareSmall } from "@/components/shared/SquareSmall";
import { useTranslations } from "next-intl";

export const FreeItem02 = () => {
  const t = useTranslations("Services.freeAnswer02");

  return (
    <div className="tab:border-l tab:border-accent tab:pl-2 pc:pl-4 text-sm tab:text-base tab:leading-[21px]">
      <p className="mb-4">
        {t.rich("item11", {
          bold: (chunk) => <span className="font-semibold">{chunk}</span>,
        })}
      </p>
      <p className="mb-3">
        {t.rich("item12", {
          bold: (chunk) => <span className="font-semibold">{chunk}</span>,
        })}
      </p>
      <p className="mb-3">{t("item12p")}</p>
      <ul className="mb-6 text-sm tab:text-base tab:leading-[21px]">
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
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("subItem14")}</p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("subItem15")}</p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("subItem16")}</p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("subItem17")}</p>
        </li>
      </ul>
      <p className="mb-3">
        {t.rich("item13", {
          bold: (chunk) => <span className="font-semibold">{chunk}</span>,
        })}
      </p>
      <ul className="mb-6 text-sm tab:text-base tab:leading-[21px]">
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("subItem31")}</p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("subItem32")}</p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>{t("subItem33")}</p>
        </li>
      </ul>

      <p className="mb-3 text-sm tab:text-base tab:leading-[21px]">
        {t("text31")}
      </p>
      <h3 className="text-sm tab:text-base leading-[21px] pc:text-lg font-semibold mb-3">
        {t("subTitle3")}
      </h3>
      <ul className="mb-3 text-sm tab:text-base tab:leading-[21px]">
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>
            {t.rich("item31", {
              bold: (chunk) => <span className="font-semibold">{chunk}</span>,
            })}
          </p>
        </li>
        <li className="flex gap-2 text-start mb-2">
          <div className="mt-2">
            <SquareSmall />
          </div>
          <p>
            {t.rich("item32", {
              bold: (chunk) => <span className="font-semibold">{chunk}</span>,
            })}
          </p>
        </li>
      </ul>
    </div>
  );
};
