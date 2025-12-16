import { useTranslations } from "next-intl";
import { SquareSmall } from "../shared/SquareSmall";

export const AdditionalServices = () => {
  const t = useTranslations("Services");

  return (
    <section className="bg-accentBg text-base tab:text-lg px-4 py-10 tab:px-5 pc:px-[38px] pc:py-[60px]">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] mx-auto">
        <h2
          id="termination"
          className="font-lora text-accent text-center mb-5 pc:mb-4 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase"
        >
          {t("additionalServicesTitle")}
        </h2>
        <p className="indent-7 ">{t("additionalServicesP1")}</p>
        <p className="indent-7 mb-4 ">{t("additionalServicesP2")}</p>
        <p className="indent-7 ">{t("additionalServicesUl1P1")}</p>
        <ul className=" mb-5">
          <li className="flex gap-2 text-start mb-2">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p> {t("additionalServicesUl1Li1")}</p>
          </li>
          <li className="flex gap-2 text-start mb-2">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p> {t("additionalServicesUl1Li2")}</p>
          </li>
          <li className="flex gap-2 text-start mb-2">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p>{t("additionalServicesUl1Li3")}</p>
          </li>
        </ul>
        <p className="indent-7 mb-4 ">{t("additionalServicesTitle2")}</p>
        <ul className="tab:flex tab:gap-4 tab:mb-5 justify-center">
          <li className="mb-4 tab:mb-0 tab:relative tab:w-tabAdditionalServices border border-accent rounded-lg overflow-hidden p-4 pc:p-5 ">
            <h3 className="leading-[21px] text-center font-semibold mb-3">
              {t("additionalServicesList1Title")}
            </h3>
            <div className="h-[2px] w-full bg-accent "></div>
            <ul className="mt-4">
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p> {t("additionalServicesList1Item1")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p> {t("additionalServicesList1Item2")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("additionalServicesList1Item3")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("additionalServicesList1Item4")}</p>
              </li>
            </ul>
          </li>
          <li className="tab:relative tab:w-tabAdditionalServices  border border-accent rounded-lg overflow-hidden p-4 mb-4 tab:mb-0 pc:p-5 ">
            <h3 className="leading-[21px] text-center tab:h-[42px] pc:h-auto font-semibold mb-3">
              {t("additionalServicesList2Title")}
            </h3>
            <div className="h-[2px] w-full bg-accent "></div>
            <ul className="mt-4">
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p> {t("additionalServicesList2Item1")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p> {t("additionalServicesList2Item2")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("additionalServicesList2Item3")}</p>
              </li>
            </ul>
          </li>
        </ul>
        <p className="indent-7 ">{t("additionalServicesP3")}</p>
        <p className="indent-7 ">{t("additionalServicesP4")}</p>

        <p className="indent-7 mb-4 ">{t("additionalServicesP5")}</p>
        <h2 className="font-lora text-center mb-5 pc:mb-4 text-2xl leading-8  pc:text-[40px] pc:leading-[48px] font-medium uppercase">
          {t("additionalServicesTitle3")}
        </h2>
        <p className="indent-7 mb-4 ">{t("additionalServicesP6")}</p>
      </div>
    </section>
  );
};
