import { useTranslations } from "next-intl";

export const Diffusion = () => {
  const t = useTranslations("Interpol");

  const info = [
    {
      title: t("diffusionTitle"),
      text: [t("diffusionText1"), t("diffusionText2"), t("diffusionText3")],
    },
    {
      title: t("persecutionTitle"),
      text: [
        t("persecutionText1"),
        t("persecutionText2"),
        t("persecutionText3"),
        t("persecutionText4"),
        t("persecutionText5"),
      ],
    },
  ];
  return (
    <section className="text-base tab:text-lg py-10 px-4 tab:px-5 tab:py-[60px] pc:px-9 text-justify">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] ml-auto mr-auto">
        {info.map((item) => (
          <div key={item.title} className="mb-6 last:mb-0">
            <h3 className="text-lg tab:text-2xl font-semibold mb-1">
              {item.title}
            </h3>
            {item.text.map((item) => (
              <p key={item} className="indent-7 ">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
