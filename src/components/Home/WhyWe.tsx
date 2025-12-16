import Image from "next/image";
import { useTranslations } from "next-intl";
import { SquareBig } from "../shared/SquareBig";

export const WhyWe = () => {
  const t = useTranslations("Home");

  return (
    <section className="px-4 tab:px-5 py-10 tab:py-[60px] pc:px-9 pc:py-[100px]">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] mx-auto pc:flex pc:gap-[67px]">
        <div className="tab:flex tab:justify-between pc:flex-col pc:w-[50%]">
          <div className="max-w-[384px] tab:max-w-[57%] pc:max-w-[95%] mx-auto tab:mx-0">
            <h2 className="font-lora text-2xl tab:text-3xl font-medium text-accent text-center tab:text-left mb-4 uppercase pc:text-4xl">
              {t("whyTitle")}
            </h2>
            <h3 className="font-lora italic text-lg leading-[26px] pc:text-[20px] pc:leading-7 mb-4 uppercase">
              {t("whyP4")}
            </h3>
          </div>
          <div className="max-w-[380px] mx-auto tab:mx-0 tab:min-w-[270px] tab:max-w-[34%] rounded overflow-hidden mb-4 pc:ml-auto">
            <Image
              src="https://drive.google.com/uc?export=view&id=1GmIOtH5AhdDSIgpi71_tFZOQXOEO72wE"
              alt={t("whyPicture")}
              width={1280}
              height={854}
              className="aspect-[288/193] tab:aspect-[263/176] pc:aspect-[234/156] flex object-cover "
            />
          </div>
        </div>
        <div className="tab:flex tab:justify-between pc:block pc:w-[50%]">
          <div className="tab:text-base leading-[18px] tab:min-w-[502px] tab:w-[75%] pc:min-w-[476px] pc:w-[80%]">
            <p className="indent-6">{t("whyP1")}</p>
            <p className="indent-6">{t("whyP2")}</p>
            <p className="indent-6">{t("whyP3")}</p>
          </div>
          <div className="flex justify-end tab:items-end ">
            <SquareBig />
          </div>
        </div>
      </div>
    </section>
  );
};
