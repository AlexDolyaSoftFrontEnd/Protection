import Image from "next/image";
import { useTranslations } from "next-intl";

export const ErrorMessage = () => {
  const t = useTranslations("Interpol");
  return (
    <div className="relative z-[-1] overflow-hidden w-screen h-screen">
      <div className="min-w-[288px] w-[80%] max-w-[436px] pc:max-w-[485px] mx-auto mt-[30vh] tab:mt-[40vh] text-center">
        <h2 className="font-semibold text-xl pc:text-2xl uppercase mb-5 text-white">
          {t("errorTitle")}
        </h2>
        {/* <p className="text-sm13 tab:text-base13 pc:text-lg13">
          {t("errorText")}
        </p> */}
      </div>
    </div>
  );
};
