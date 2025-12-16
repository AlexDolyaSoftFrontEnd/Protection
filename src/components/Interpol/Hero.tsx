import { useTranslations } from "next-intl";
import Image from "next/image";

export const Hero = () => {
  const t = useTranslations("Interpol");

  return (
    <section className="relative bg-accentBg pc:bg-primary ">
      <div className="tab:flex flex-row-reverse ">
        <Image
          src="/interpol.jpeg"
          alt={t("heroPicture")}
          width={4000}
          height={2250}
          className=" w-full h-full tab:w-[50%] pc:w-[86%] max-h-[300px] pc:max-h-[500px] tab:h-auto object-cover"
          priority
        />
        <div className="pc:absolute pc:right-[55%] pc:top-[10%] py-10 px-4 ml-auto tab:px-5 tab:py-6 pc:py-[60px] pc:px-[38px] tab:my-auto tab:max-w-[450px] pc:max-w-[533px] pc:min-w-[533px] pc:max-h-[600px] pc:bg-accentBg">
          <h1 className="font-lora text-accent text-3xl tab:text-4xl pc:text-[56px] pc:leading-[60px] font-semibold mb-3 tab:mb-4 pc:mb-9 text-center tab:text-left">
            {t("title")}
          </h1>
          <p className="text-center text-sm pc:text-base leading-[18px] pc:leading-[21px] tab:text-left max-w-[500px] mx-auto">
            {t.rich("description", {
              br: () => <br />,
            })}
          </p>
        </div>
      </div>
    </section>
  );
};
