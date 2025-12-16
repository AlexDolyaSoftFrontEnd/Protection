import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { SquareSmall } from "../shared/SquareSmall";
import { ButtonDetails } from "../shared/ButtonDetails";

export const WhenYouNeedOurHelp = () => {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <section className="px-4 py-10 tab:px-5 pc:px-9 pc:pt-[100px]">
      <h2 className="font-lora text-accent text-center mb-5 pc:mb-10 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
        {t("whomTitle")}
      </h2>
      <ul className="min-w-[288px] max-w-[500px] mx-auto tab:max-w-[900px] pc:max-w-[1800px]">
        <li className="tab:relative pc:flex pc:gap-4 border border-accent rounded-lg overflow-hidden p-4 mb-4 pc:p-5 pc:mb-5">
          <div className="max-w-[338px] mx-auto pc:mx-0  rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
            <Image
              src="https://drive.google.com/uc?export=view&id=1TxHoVZ7l8A-1jaaQ7Kk8a876LJoQ8gp0"
              alt={t("whomBox1picture")}
              width={1000}
              height={1500}
              className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
            />
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold my-4">
              {t("whomBox1Title")}
            </h3>
            <ul className="mb-4 tab:text-base ">
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li1")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li2")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li3")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li4")}</p>
              </li>
              <li className="flex gap-2 text-start">
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
          </div>
          <div className="tab:absolute top-4 right-[22px] pc:top-auto pc:bottom-4">
            <ButtonDetails
              text={t("detailsButton")}
              url={`/${locale}/services#solutions01`}
            />
          </div>
        </li>
        <li className="tab:relative pc:flex pc:gap-4 border border-accent rounded-lg overflow-hidden p-4 mb-4 pc:p-5 pc:mb-5">
          <div className="max-w-[338px] mx-auto pc:mx-0 rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
            <Image
              src="https://drive.google.com/uc?export=view&id=1vO0di27-lFh5lmZddB3MpAfQV7zmjxFf"
              alt={t("whomBox2picture")}
              width={3584}
              height={5376}
              className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
            />
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold my-4">
              {t("whomBox2Title")}
            </h3>
            <ul className="mb-4 tab:text-base ">
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox2Li1")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox2Li2")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox2Li3")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox2Li4")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox2Li5")}</p>
              </li>
            </ul>
          </div>
          <div className="tab:absolute top-4 right-[22px] pc:top-auto pc:bottom-4">
            <ButtonDetails
              text={t("detailsButton")}
              url={`/${locale}/services#solutions02`}
            />
          </div>
        </li>
        <li className="tab:relative pc:flex pc:gap-4 border border-accent rounded-lg overflow-hidden mb-4 p-4 pc:p-5 pc:mb-5">
          <div className="max-w-[338px] mx-auto pc:mx-0 rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
            <Image
              src="https://drive.google.com/uc?export=view&id=1RN9lVZyaPzGeRay-2W_GOt_Bf0YH29Lq"
              alt={t("whomBox6picture")}
              width={1250}
              height={827}
              className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
            />
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold my-4">
              {t("whomBox6Title")}
            </h3>
            <ul className="mb-4 tab:text-base ">
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox6Li1")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox6Li2")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox6Li3")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox6Li4")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox6Li5")}</p>
              </li>
            </ul>
          </div>
          <div className="tab:absolute top-4 right-[22px] pc:top-auto pc:bottom-4">
            <ButtonDetails
              text={t("detailsButton")}
              url={`/${locale}/services#solutions03`}
            />
          </div>
        </li>
        <li className="tab:relative pc:flex pc:gap-4 border border-accent rounded-lg overflow-hidden mb-4 p-4 pc:p-5 pc:mb-5">
          <div className="max-w-[338px] mx-auto pc:mx-0 rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
            <Image
              src="https://drive.google.com/uc?export=view&id=1fQ-WDQ1J4RQWncwc9OrTaarknPs0QzM_"
              alt={t("whomBox3picture")}
              width={1000}
              height={790}
              className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
            />
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold my-4">
              {t("whomBox3Title")}
            </h3>
            <ul className="mb-4 tab:text-base ">
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li1")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li2")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li3")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li4")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li5")}</p>
              </li>
            </ul>
          </div>
          <div className="tab:absolute top-4 right-[22px] pc:top-auto pc:bottom-4">
            <ButtonDetails
              text={t("detailsButton")}
              url={`/${locale}/services#solutions03`}
            />
          </div>
        </li>
        <li className="tab:relative pc:flex pc:gap-4 border border-accent rounded-lg overflow-hidden p-4 pc:p-5 ">
          <div className="max-w-[338px] mx-auto pc:mx-0 rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
            <Image
              src="https://drive.google.com/uc?export=view&id=1TkjIOmeCUS52k1ssBbHkYT2aYiPT5iBv"
              alt={t("whomBox5picture")}
              width={1920}
              height={1280}
              className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
            />
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold my-4">
              {t("whomBox5Title")}
            </h3>
            <ul className="mb-4 tab:text-base ">
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox5Li1")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox5Li2")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox5Li3")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox5Li4")}</p>
              </li>
            </ul>
          </div>
          <div className="tab:absolute top-4 right-[22px] pc:top-auto pc:bottom-4">
            <ButtonDetails
              text={t("detailsButton")}
              url={`/${locale}/services#solutions04`}
            />
          </div>
        </li>
      </ul>
    </section>
  );
};
