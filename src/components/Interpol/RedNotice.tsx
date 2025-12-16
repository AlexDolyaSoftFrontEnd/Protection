import { useTranslations } from "next-intl";
import { AnimatedCard } from "../shared/AnimatedCard";
import { IoMan } from "react-icons/io5";
import { BsPersonSquare } from "react-icons/bs";
import { IoFingerPrintSharp } from "react-icons/io5";
import { FaPassport } from "react-icons/fa6";
import { GrDocumentUser } from "react-icons/gr";
import { GiInjustice } from "react-icons/gi";
import { VscBook } from "react-icons/vsc";
import { GiHandcuffs } from "react-icons/gi";
import { SquareBig } from "../shared/SquareBig";
import Image from "next/image";

export const RedNotice = () => {
  const t = useTranslations("Interpol");
  const conditions = [
    { title: t("list2Title1"), text: t("list2Item1") },
    { title: t("list2Title2"), text: t("list2Item2") },
    { title: t("list2Title3"), text: t("list2Item3") },
    { title: t("list2Title4"), text: t("list2Item4") },
    { title: t("list2Title5"), text: t("list2Item5") },
    { title: t("list2Title6"), text: t("list2Item6") },
  ];
  const identData = [
    { icon: <BsPersonSquare />, text: t("item1Text1List3") },
    { icon: <IoMan />, text: t("item2Text1List3") },
    { icon: <IoFingerPrintSharp />, text: t("item3Text1List3") },
    { icon: <FaPassport />, text: t("item4Text1List3") },
    { icon: <GrDocumentUser />, text: t("item5Text1List3") },
  ];
  const legalData = [
    { icon: <GiInjustice />, text: t("item1Text2List3") },
    { icon: <VscBook />, text: t("item2Text2List3") },
    { icon: <GiHandcuffs />, text: t("item3Text2List3") },
  ];
  return (
    <section className="bg-accentBg shadow-inner shadow-accentBgDark text-base tab:text-lg px-4 py-10 tab:px-5 pc:px-[38px] pc:py-[60px]">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] mx-auto">
        <div className="tab:float-right tab:w-[40%] tab:ml-6 tab:mb-4 tab:mt-4 mb-7 ">
          <Image
            src="/red-notice.jpg"
            alt={t("redTitle")}
            width={1024}
            height={536}
            className="w-full h-auto rounded-md"
          />
        </div>

        <h2 className="text-lg tab:text-2xl font-semibold mb-1">
          {t("redTitle")}
        </h2>
        <p className="indent-7 ">{t("redText1")}</p>
        <p className="indent-7 mb-4 ">{t("redText2")}</p>
        <h3 className="text-lg tab:text-2xl font-semibold mb-1">
          {t("titleList2")}
        </h3>
        <p className="indent-7 mb-8 ">{t("textList2")}</p>
        <ul className="flex flex-col tab:flex-row tab:flex-wrap gap-4 tab:gap-5 pc:gap-8 mb-[37px] tab:mb-[56px] pc:mb-[60px] justify-center mx-auto max-w-[350px] tab:max-w-full">
          {conditions.map((item, index) => (
            <AnimatedCard key={index}>
              <div className="mb-2 p-4 pc:p-[23px] min-w-[288px] w-full h-auto tab:w-[350px] pc:w-[380px] tab:h-[210px] pc:h-[250px] border border-accent rounded-br-2xl rounded-tl-2xl bg-accentBgDark shadow-xl">
                <h5 className="font-semibold tab:h-[56px] mb-2 tab:mb-0">
                  {item.title}
                </h5>
                <p className="text-sm tab:text-[15px] pc:text-base">
                  {item.text}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </ul>
        <h3 className="text-lg tab:text-2xl font-semibold mb-1">
          {t("titleList3")}
        </h3>
        <div className="h-[2px] w-full bg-accent "></div>

        <div className="mt-6">
          <div className="tab:flex w-full">
            <h3 className="tab:w-[30%] text-base leading-[21px] tab:text-lg font-semibold">
              {t("text1List3")}
            </h3>
            <ul className="my-6 tab:my-0 tab:w-[70%]">
              {identData.map((item) => (
                <li key={item.text} className="mb-4 last:mb-0">
                  <div className="flex gap-2 text-start mb-2">
                    <div className="mt-1">{item.icon}</div>
                    <p className=" leading-[18px] tab:text-base">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative tab:flex mt-6 w-full">
            <h3 className="tab:w-[30%] text-base leading-[21px] tab:text-lg font-semibold">
              {t("text2List3")}
            </h3>
            <ul className="my-6 tab:my-0 tab:w-[70%]">
              {legalData.map((item) => (
                <li key={item.text} className="mb-4 last:mb-0">
                  <div className="flex gap-2 text-start mb-2">
                    <div className="mt-1">{item.icon}</div>
                    <p className=" leading-[18px] tab:text-base">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-end tab:absolute tab:right-0 bottom-0 mb-10 tab:m-0">
              <SquareBig />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
