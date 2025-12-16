import { useTranslations } from "next-intl";
import { Color, SquareSmall } from "../shared/SquareSmall";
import { CTACheck } from "./CTACheck";

export const InterpolIs = () => {
  const t = useTranslations("Interpol");
  const infoList = [
    { title: t("title1"), text: t("text1") },
    {
      title: t("title2"),
      text: t.rich("text2", {
        indent: (chunk) => <span className="block indent-7">{chunk}</span>,
      }),
    },
  ];
  interface Notice {
    color: Color;
    text: string;
  }
  const notices: Notice[] = [
    { text: "list1Item1", color: "red" },
    { text: "list1Item2", color: "green" },
    { text: "list1Item3", color: "orange" },
    { text: "list1Item4", color: "blue" },
    { text: "list1Item5", color: "yellow" },
    { text: "list1Item6", color: "black" },
    { text: "list1Item7", color: "violet" },
    { text: "list1Item8", color: "grey" },
  ];
  return (
    <section className="">
      <div className="pt-10 px-4 tab:px-5 tab:pt-[60px] pc:px-9 max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] ml-auto mr-auto pb-12">
        {infoList.map((item, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="text-lg tab:text-2xl font-semibold">{item.title}</h3>
            <p className="mt-1 tab:text-lg text-justify indent-7">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <CTACheck />
      <div className="pb-10 pt-12 px-4 tab:px-5 tab:pb-[60px] pc:px-9 max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] ml-auto mr-auto">
        <h3 className="text-lg tab:text-2xl font-semibold">{t("title3")}</h3>
        <p className="mt-1 tab:text-lg mb-6 text-justify indent-7">
          {t("text3")}
        </p>
        <div className="">
          <h3 className="text-lg tab:text-2xl font-semibold">
            {t("titleList1")}
          </h3>
          <div className="h-[2px] w-full bg-accent  "></div>

          <ul className="mt-[23px] mb-6 tab:mb-0 grid grid-cols-1 tab:grid-cols-2 gap-x-6">
            {notices.map((item) => (
              <li key={item.color} className="mb-4">
                <div className="flex gap-2 text-start mb-2">
                  <div className="mt-1">
                    <SquareSmall color={item.color} size />
                  </div>
                  <p className="leading-[18px] tab:text-base">
                    {t.rich(item.text, {
                      bold: (chunk) => (
                        <span className="text-base font-semibold text-start tab:ml-4">
                          {chunk}
                        </span>
                      ),
                      br: () => <br />,
                    })}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
