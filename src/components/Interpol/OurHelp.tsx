import { useTranslations } from "next-intl";
import { SquareSmall } from "../shared/SquareSmall";
import Image from "next/image";
import Typewriter from "../shared/Typewriter";

export const OurHelp = () => {
  const t = useTranslations("Interpol");
  const helpList = [
    t("helpItem1"),
    t("helpItem2"),
    t("helpItem3"),
    t("helpItem4"),
    t("helpItem5"),
  ];
  const whyList = [
    { src: "/vec1.png", text: "whyItem1" },
    { src: "/vec2.png", text: "whyItem2" },
    { src: "/vec3.png", text: "whyItem3" },
    { src: "/vec4.png", text: "whyItem4" },
    { src: "/vec5.png", text: "whyItem5" },
  ];

  return (
    <section className="bg-accentBg shadow-inner shadow-accentBgDark text-base tab:text-lg py-10 px-4 tab:px-5 tab:py-[60px] pc:px-9 text-justify">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] ml-auto mr-auto">
        <h3 className="text-lg tab:text-2xl desk:text-3xl font-semibold mb-1 text-accent">
          {t("helpTitle")}
        </h3>

        <div className="tab:flex tab:items-start tab:justify-between tab:gap-4 pc:gap-9 mb-6">
          <ul className="tab:w-[50%] pc:w-[45%] text-base pc:text-lg desk:text-xl ">
            <li className="mb-4">{t("helpText")}</li>
            {helpList.map((item) => (
              <li key={item} className="flex gap-2  mb-2 text-justify ">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p className="">{item}</p>
              </li>
            ))}
          </ul>
          <div className="pc:flex tab:justify-between pc:flex-col tab:w-[40%] ">
            <div className=" mx-auto tab:mx-0 tab:min-w-[270px] rounded overflow-hidden mb-4 mt-6 tab:-mt-8 pc:-mt-7 pc:ml-auto">
              <Image
                src="/office.jpg"
                alt={t("whyTitle")}
                width={1190}
                height={790}
                className="aspect-[288/193] tab:aspect-[263/176] pc:aspect-[234/156] flex object-cover "
              />
            </div>
          </div>
        </div>

        <h2 className=" mx-auto font-lora text-2xl tab:text-3xl font-medium text-accent text-center mb-4 uppercase pc:text-4xl mt-10 pc:mb-8">
          {t("whyTitle")}
        </h2>
        <div className="mb-6 pc:mb-10">
          <ul className="text-base pc:text-lg flex flex-wrap gap-3 tab:justify-center tab:gap-5 pc:gap-x-24 pc:gap-y-10 desk:gap-x-32 desk:gap-y-12 max-w-[1200px] mx-auto">
            {whyList.map((item) => (
              <li
                key={item.text}
                className="w-[70%] max-w-[235px] text-center mx-auto tab:mx-0  mb-8 pc:mb-0"
              >
                <Image
                  src={item.src || "/decor-icon.svg"}
                  alt="decor icon"
                  width={500}
                  height={500}
                  className="w-12 h-12 tab:w-16 tab:h-16 pc:w-20 pc:h-20 mx-auto mb-2 pc:mb-6 tab:mb-4"
                />
                {t.rich(item.text, {
                  bold: (chunk) => (
                    <span className="font-semibold ">{chunk}</span>
                  ),
                })}
              </li>
            ))}
          </ul>
        </div>
        <p className="font-lora italic text-lg leading-[26px] pc:text-[20px] pc:leading-7 mb-2 uppercase text-right font-semibold">
          {t("whyItem6")}{" "}
        </p>
        <div className="min-h-24 pc:min-h-[56px] font-lora italic text-lg leading-[26px] pc:text-[20px] pc:leading-7 mb-4 tab:max-w-[500px] pc:max-w-[600px] tab:mr-0 tab:ml-auto">
          <Typewriter textDef={t("whyItem7")} />
        </div>
      </div>
    </section>
  );
};
