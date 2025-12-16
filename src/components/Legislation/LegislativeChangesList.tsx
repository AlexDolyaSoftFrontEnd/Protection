import { legislationChangesData } from "@/mockedData/legislationChangesData";
import { useTranslations } from "next-intl";
import { LawItem } from "./LawItem";
import { LegislativeChangesItem } from "./LegislativeChangesItem";

export const LegislativeChangesList = () => {
  const t = useTranslations("Legislation");

  return (
    <section className="px-4 py-10 tab:px-5 tab:py-[60px] pc:px-10 pc:pt-[100px] tab:text-base">
      <div className="min-w-[288px] max-w-[600px] mx-auto tab:max-w-[700px] pc:max-w-full pc:flex pc:gap-12">
        <div className="pc:w-3/5">
          <div className="tab:flex gap-4 mb-5  justify-center items-center">
            <h3
              id="category"
              className=" text-accent text-base leading-[21px] tab:text-lg pc:text-2xl font-semibold mb-4 tab:mb-0"
            >
              {t("legislativeChangesTitle")}
            </h3>
          </div>
          <ul className="pc:text-justify">
            {legislationChangesData.map((item) => (
              <li
                key={item.data.id}
                className="flex gap-2 text-start mb-2 pc:text-justify"
              >
                <LegislativeChangesItem item={item} />
              </li>
            ))}
          </ul>
        </div>
        <div className=" pc:w-2/5 mt-5 pc:mt-0 border border-accent rounded-lg p-4 pc:p-6 bg-accentBg ">
          <h3 className=" text-accent text-base leading-[21px] tab:text-lg font-semibold mb-4 text-center pc:text-right ">
            {t("infoTitle")}
          </h3>
          <div className="tab:text-base leading-[18px] indent-6  pc:text-justify">
            <p>{t("infoP1")}</p>
            <p>{t("infoP2")}</p>
            <p>{t("infoP3")}</p>
            <p>{t("infoP4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
