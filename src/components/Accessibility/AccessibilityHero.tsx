import { useTranslations } from "next-intl";
import Image from "next/image";

export const AccessibilityHero = () => {
  const t = useTranslations("Accessibility");

  return (
    <section
      className="relative bg-accessibilityHero min-h-[100px] tab:min-h-[240px] tab:aspect-[768/240] tab:max-h-[360px] 
    pc:min-h-[400px] pc:aspect-[1280/400] pc:max-h-[500px] w-full flex px-4 py-10 tab:px-5 tab:py-[60px] pc:px-10 pc:pt-[100px]"
    >
      <Image
        src="https://drive.google.com/uc?export=view&id=1PG32LQ07C3wwsQRhJl9igDtzlq0u-vzI"
        alt={t("heroPicture")}
        width={1024}
        height={662}
        priority
        className="absolute w-full top-0 left-0 h-full object-cover z-[-1]"
      />
      <div className="min-w-[288px] w-[500px] mx-auto tab:w-[900px] pc:w-[1800px] my-auto">
        <h1 className="font-lora text-3xl text-light tab:text-4xl pc:text-[56px] pc:leading-[60px] font-semibold mb-3 tab:mb-4 pc:mb-9">
          {t("title1")} <br /> {t("title2")}
        </h1>
        <p className=" text-light text-lg leading-[18px] pc:leading-[21px] text-left">
          {t("description")}
        </p>
      </div>
    </section>
  );
};
