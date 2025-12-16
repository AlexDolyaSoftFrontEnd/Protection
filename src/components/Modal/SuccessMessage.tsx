import Image from "next/image";
import { useTranslations } from "next-intl";

export const SuccessMessage = () => {
  const t = useTranslations("Interpol");

  return (
    <div className="relative z-[-1] overflow-hidden w-screen h-screen">
      <div className="min-w-[288px] w-[80%] max-w-[436px] pc:max-w-[485px] mx-auto mt-[30vh] tab:mt-[40vh] text-center text-white">
        <h2 className="font-semibold text-xl tab:text-4xl uppercase mb-5">
          {t("successTitle")}
        </h2>
        <p className="text-base pc:text-lg">{t("successDescription")}</p>
      </div>
    </div>
  );
};
