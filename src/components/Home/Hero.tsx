import { useTranslations } from "next-intl";
import Image from "next/image";

export const Hero = () => {
  const t = useTranslations("Home");

  return (
    <section className="relative bg-accentBg pc:bg-primary">
      <div className="tab:flex flex-row-reverse">
        <Image
          src="/brown-globe-with-gavel-wood-flip.webp"
          alt={t("heroPicture")}
          width={4096}
          height={2731}
          className=" w-full h-full max-h-[400px] pc:max-h-full tab:w-[50%] pc:w-[86%] tab:h-auto object-cover"
          priority
        />
        <div className="pc:absolute pc:right-[55%] py-10 px-4 ml-auto tab:px-5 tab:py-[45px] pc:py-[88px] pc:px-[38px] tab:my-auto tab:max-w-[450px] pc:max-w-[533px]  pc:max-h-[600px] pc:bg-accentBg">
          <h1 className="font-lora text-accent text-3xl tab:text-4xl pc:text-[56px] pc:leading-[60px] font-semibold mb-3 tab:mb-4 pc:mb-9 text-center tab:text-left">
            {t("lawyer")}
          </h1>
          <h2 className="font-lora text-base pc:text-xl italic font-medium text-center mb-3 pc:mb-5 tab:text-left">
            {t("title")}
          </h2>
          <p className="text-center text-sm pc:text-base leading-[18px] pc:leading-[21px] tab:text-left max-w-[500px] mx-auto">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};
