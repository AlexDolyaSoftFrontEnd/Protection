import Image from "next/image";
import { useTranslations } from "next-intl";
import { SquareSmall } from "../shared/SquareSmall";
import { SquareBig } from "../shared/SquareBig";

export const ServicesList = () => {
  const t = useTranslations("Services");

  return (
    <section className="px-4 py-10 tab:px-5 tab:py-[60px] pc:px-10 pc:pt-[100px]">
      <h2 className="font-lora text-accent text-center mb-5 pc:mb-10 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
        {t("titleServicesList")}
      </h2>
      <ul className="min-w-[288px] max-w-[500px] mx-auto tab:max-w-[900px] pc:max-w-[1800px]">
        <li className="tab:flex tab:gap-4 pc:gap-[62px] tab:mb-10 pc:mb-[60px] tab:relative">
          <div
            id="solutions01"
            className="max-w-[338px] mx-auto rounded tab:rounded-none overflow-hidden tab:ml-0 
            tab:min-w-[169px] tab:max-w-[23%] pc:min-w-[391px] pc:max-w-[391px] pc:mr-[55px] mb-2 "
          >
            <Image
              src="https://drive.google.com/uc?export=view&id=1TxHoVZ7l8A-1jaaQ7Kk8a876LJoQ8gp0"
              alt={t("whomBox1picture")}
              width={1000}
              height={1500}
              className="aspect-[256/194] tab:aspect-[169/235] pc:aspect-[391/543] flex object-cover "
            />
          </div>
          <div className="flex tab:hidden">
            <span className="font-lora text-accent text-[26px] leading-8 ml-auto">
              01
            </span>
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold mb-3">
              {t("whomBox1Title")}
            </h3>
            <p className="mb-4 tab:text-base">{t("whomBox1P1")}</p>

            <p className="mb-4 tab:text-base tab:leading-[21px]">
              {t("whomBox1AfterTitle")}
            </p>
            <ul className="mb-4 tab:text-base tab:leading-[21px]">
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li1")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li2")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li3")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li4")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li5")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li6")}</p>
              </li>
            </ul>
            <p className="mb-4 tab:text-base">{t("whomBox1P2")}</p>
            <p className="mb-4 tab:text-base">{t("whomBox1P3")}</p>
            <p className="mb-4 tab:text-base">{t("whomBox1P4")}</p>
            <p className="tab:text-base">{t("whomBox1P5")}</p>
          </div>
          <div className="tab:flex tab:flex-col tab:justify-between">
            <div className="hidden tab:flex ">
              <span className="font-lora text-accent text-[40px] leading-[48px] ml-auto">
                01
              </span>
            </div>
            <div className="flex justify-end tab:absolute tab:right-0 bottom-0 mb-10 tab:m-0">
              <SquareBig />
            </div>
          </div>
        </li>
        <li className="tab:relative tab:flex tab:flex-row-reverse tab:gap-4 pc:gap-[62px] tab:mb-10 pc:mb-[60px]">
          <div
            id="solutions02"
            className="max-w-[338px] mx-auto rounded tab:rounded-none overflow-hidden 
            tab:min-w-[169px] tab:max-w-[23%] tab:ml-0 pc:min-w-[391px] pc:max-w-[391px] mb-2 pc:mb-[80px] pc:ml-[55px]"
          >
            <Image
              src="https://drive.google.com/uc?export=view&id=1vO0di27-lFh5lmZddB3MpAfQV7zmjxFf"
              alt={t("whomBox2picture")}
              width={3584}
              height={5376}
              className="aspect-[256/194] tab:aspect-[169/235] pc:aspect-[391/543] flex object-cover "
            />
          </div>
          <div className="flex tab:hidden">
            <span className="font-lora text-accent text-[26px] leading-8 ml-auto">
              02
            </span>
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold mb-3">
              {t("whomBox2Title")}
            </h3>
            <ul className="mb-4 tab:text-base tab:leading-[21px]">
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox2Li1")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox2Li2")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox2Li3")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox2Li4")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox2Li5")}</p>
              </li>
            </ul>

            <p className="mb-4 tab:text-base">{t("whomBox2P1")}</p>
            <p className="tab:text-base">
              {t("whomBox2P2")}
              <span>
                <a
                  href="tel:+380930324874"
                  className=" cursor-pointer text-accent font-semibold font-lora"
                >
                  +38 (093) 032-48-74
                </a>
              </span>
              {t("whomBox2P2or")}
              <span>
                <a
                  href="tel:+380633650465"
                  className=" cursor-pointer text-accent font-semibold font-lora"
                >
                  +38 (063) 365-04-65
                </a>
              </span>
              {t("whomBox2P22")}
            </p>
          </div>
          <div className="tab:flex tab:flex-col tab:justify-between">
            <div className="hidden tab:flex ">
              <span className="font-lora text-accent text-[40px] leading-[48px] ml-auto">
                02
              </span>
            </div>
            <div className="flex justify-end tab:absolute tab:right-0 bottom-0 mb-10 tab:m-0">
              <SquareBig />
            </div>
          </div>
        </li>
        <li className="tab:relative tab:flex tab:gap-4 pc:gap-[62px] tab:mb-10 pc:mb-[60px]">
          <div
            id="solutions03"
            className="max-w-[338px] mx-auto pc:mx-0 rounded tab:rounded-none overflow-hidden 
            tab:min-w-[169px] tab:max-w-[23%] tab:ml-0 pc:min-w-[391px] pc:max-w-[391px] mb-2 pc:mr-[55px]"
          >
            <Image
              src="https://drive.google.com/uc?export=view&id=1RN9lVZyaPzGeRay-2W_GOt_Bf0YH29Lq"
              alt={t("whomBox6picture")}
              width={1250}
              height={827}
              className="aspect-[256/194] tab:aspect-[169/235] pc:aspect-[391/543] flex object-cover "
            />
          </div>
          <div className="flex tab:hidden">
            <span className="font-lora text-accent text-[26px] leading-8 ml-auto">
              03
            </span>
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold mb-3">
              {t("whomBox3Title")}
            </h3>
            <ul className="mb-4 tab:text-base tab:leading-[21px]">
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li1")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li2")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li3")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li4")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li5")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li6")}</p>
              </li>
            </ul>

            <p className="tab:text-base">{t("whomBox3P1")}</p>
          </div>
          <div className="tab:flex tab:flex-col tab:justify-between">
            <div className="hidden tab:flex ">
              <span className="font-lora text-accent text-[40px] leading-[48px] ml-auto">
                03
              </span>
            </div>
            <div className="flex justify-end tab:absolute tab:right-0 bottom-0 mb-10 tab:m-0">
              <SquareBig />
            </div>
          </div>
        </li>
        <li className="tab:relative tab:flex tab:flex-row-reverse tab:gap-4 pc:gap-[62px] tab:mb-10 pc:mb-[60px]">
          <div
            id="solutions04"
            className="max-w-[338px] mx-auto rounded tab:rounded-none overflow-hidden 
            tab:min-w-[169px] tab:max-w-[23%] tab:ml-0 pc:min-w-[391px] pc:max-w-[391px] mb-2 pc:mb-[80px] pc:ml-[55px]"
          >
            <Image
              src="https://drive.google.com/uc?export=view&id=1TkjIOmeCUS52k1ssBbHkYT2aYiPT5iBv"
              alt={t("whomBox5picture")}
              width={1920}
              height={1280}
              className="aspect-[256/194] tab:aspect-[169/235] pc:aspect-[391/543] flex object-cover "
            />
          </div>
          <div className="flex tab:hidden">
            <span className="font-lora text-accent text-[26px] leading-8 ml-auto">
              04
            </span>
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold mb-3">
              {t("whomBox4Title")}
            </h3>
            <p className="mb-4 tab:text-base">{t("whomBox4P1")}</p>
            <p className="mb-4 tab:text-base">{t("whomBox4P2")}</p>
            <ul className="mb-4 tab:text-base tab:leading-[21px]">
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox4Li1")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox4Li2")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox4Li3")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox4Li4")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox4Li5")}</p>
              </li>
            </ul>

            <p className="mb-4 tab:text-base">{t("whomBox4P3")}</p>
            <p className="tab:text-base">{t("whomBox4P4")}</p>
          </div>
          <div className="tab:flex tab:flex-col tab:justify-between">
            <div className="hidden tab:flex ">
              <span className="font-lora text-accent text-[40px] leading-[48px] ml-auto">
                04
              </span>
            </div>
            <div className="flex justify-end tab:absolute tab:right-0 bottom-0 mb-10 tab:m-0">
              <SquareBig />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
