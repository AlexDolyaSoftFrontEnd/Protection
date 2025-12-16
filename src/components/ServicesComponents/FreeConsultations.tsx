import { useTranslations } from "next-intl";
import { SquareBig } from "../shared/SquareBig";
import { SquareSmall } from "../shared/SquareSmall";
import { FreeItem01 } from "./FreeList/FreeItem01";
import { FreeItem02 } from "./FreeList/FreeItem02";
import { FreeItem03 } from "./FreeList/FreeItem03";

export const FreeConsultations = () => {
  const t = useTranslations("Services");
  const freeConsultationsList = [
    { question: t("freeQuestion01"), answer: <FreeItem01 /> },
    { question: t("freeQuestion02"), answer: <FreeItem02 /> },
    { question: t("freeQuestion03"), answer: <FreeItem03 /> },
  ];

  return (
    <section className="text-base tab:text-lg px-4 py-10 tab:px-5 pc:px-[38px] pc:py-[60px]">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] mx-auto">
        <h2 className="font-lora text-accent text-center mb-5 pc:mb-4 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
          {t("freeTitle")}
        </h2>
        <p className="indent-7 mb-5 ">{t("freeText")}</p>
        <ul className="min-w-[288px] max-w-[500px] mx-auto tab:max-w-[900px] pc:max-w-[1800px]">
          {freeConsultationsList.map((item, i) => (
            <li
              key={i}
              className="tab:flex tab:gap-4 pc:gap-[62px] tab:mb-10 pc:mb-[60px] tab:relative"
            >
              <div
                className="max-w-full mx-auto rounded tab:rounded-none overflow-hidden tab:ml-0 
                    tab:min-w-[247px] tab:max-w-[247px] pc:min-w-[391px] pc:max-w-[391px]  mb-2 "
              >
                <h3 className="text-base leading-[21px] tab:text-lg font-semibold mb-3 border-b-[2px] tab:border-b-0 border-accent pb-1">
                  {item.question}
                </h3>
              </div>
              {item.answer}
              <div className="tab:flex tab:flex-col tab:justify-between">
                <div className="flex justify-end tab:absolute tab:right-0 bottom-0 mb-10 tab:m-0">
                  <SquareBig />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
