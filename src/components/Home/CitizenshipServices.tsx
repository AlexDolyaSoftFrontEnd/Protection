import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { SquareSmall } from "../shared/SquareSmall";
import { ButtonDetails } from "../shared/ButtonDetails";

export const CitizenshipServices = () => {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <section
      id="services"
      className="py-10 px-4 tab:px-5 tab:py-[60px] pc:px-9"
    >
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] ml-auto mr-auto">
        <h2 className="font-lora text-accent text-center mb-5 text-[28px] leading-8 tab:text-xl pc:text-[40px] pc:leading-[48px] font-medium">
          {t("whomOtherServicesTitle")}
        </h2>
        <ul className="tab:flex tab:gap-4 pc:gap-9">
          <li className="tab:w-[50%] tab:flex tab:flex-col">
            <div className="tab:flex-grow">
              <div className="max-w-[380px] mb-5 mx-auto h-auto tab:mr-0 tab:min-w-[356px] tab:max-w-full rounded overflow-hidden">
                <Image
                  src="https://drive.google.com/uc?export=view&id=16EMZ2DM4nXKKzhffY1R5ndEgY0Uqmuyz"
                  alt={t("whomBox4picture")}
                  width={2000}
                  height={1350}
                  className=" flex object-cover "
                />
              </div>
              <h3 className="text-base leading-[21px] tab:text-lg font-semibold">
                {t("whomBox4Title2")}
              </h3>
              <div className="h-[2px] w-full bg-accent tab:w-[90%]"></div>
              <p className=" leading-[18px] mt-3 tab:text-base mb-[22px] pc:w-[80%]">
                {t("whomBox4Li3")}
              </p>
            </div>
          </li>
          <li className="tab:w-[50%] ">
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold">
              {t("whomBox4Title1")}
            </h3>
            <div className="h-[2px] w-full bg-accent  tab:w-[80%]"></div>

            <ul className="mt-[23px] mb-6 tab:mb-0 pc:w-[80%]">
              <li className="mb-4">
                <div className="flex gap-2 text-start mb-2">
                  <div className="mt-2">
                    <SquareSmall />
                  </div>
                  <h4 className="text-base font-semibold text-start tab:ml-4">
                    {t("whomBox4Li1")}
                  </h4>
                </div>
                <p className=" leading-[18px] tab:text-base">
                  {t("whomBox4Li1P1")}
                </p>
              </li>
              <li>
                <div className="flex gap-2 text-start mb-2">
                  <div className="mt-2">
                    <SquareSmall />
                  </div>
                  <h4 className="text-base font-semibold text-start tab:ml-4">
                    {t("whomBox4Li2")}
                  </h4>
                </div>
                <p className=" leading-[18px] tab:text-base">
                  {t("whomBox4Li2P1")}
                </p>
              </li>
            </ul>
            <div className="flex justify-center tab:justify-end tab:mt-[50px] pc:mt-[80px]">
              <ButtonDetails
                text={t("detailsButton")}
                url={`/${locale}/services#termination`}
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
