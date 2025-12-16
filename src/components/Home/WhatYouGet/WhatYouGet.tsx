import { WhatYouGetAnimatedListItem } from "./WhatYouGetAnimatedListItem";
import { WhatYouGetListItem } from "./WhatYouGetListItem";
import { useTranslations } from "next-intl";

export const WhatYouGet = () => {
  const t = useTranslations("Home");
  const whatYouGetList = [
    {
      title: t("wygItem1Title"),
      text: t("wygItem1Text"),
      icon: "/icons/booking.png",
    },
    {
      title: t("wygItem2Title"),
      text: t("wygItem2Text"),
      icon: "/icons/checklist.png",
    },
    {
      title: t("wygItem3Title"),
      text: t("wygItem3Text"),
      icon: "/icons/priority.png",
    },
    {
      title: t("wygItem4Title"),
      text: t("wygItem4Text"),
      icon: "/icons/gear.png",
    },
  ];
  return (
    <section className="px-4 py-10 tab:px-5 pc:px-9 pc:pt-[100px] bg-accentBg">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] mx-auto">
        <h2 className="font-lora text-accent text-center mb-5 pc:mb-10 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
          {t("whatYouGetTitle")}
        </h2>
        <ul>
          {whatYouGetList.map((item, index) => (
            <WhatYouGetAnimatedListItem key={index}>
              <WhatYouGetListItem
                item={item}
                isLast={index === whatYouGetList.length - 1}
              />
            </WhatYouGetAnimatedListItem>
          ))}
        </ul>
      </div>
    </section>
  );
};
