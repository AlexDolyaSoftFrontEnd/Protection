import { useTranslations } from "next-intl";
import Image from "next/image";

export default function NotFound() {
  const t = useTranslations("Page404");

  return (
    <div className="flex flex-col justify-center items-center min-h-full px-5 py-[100px] bg-accentBg">
      <h2 className="font-lora text-[28px] text-accent leading-8 font-medium uppercase mb-3 pc:mb-5  text-center pc:text-4xl">
        {t("notFound")}
      </h2>
      <p className="font-lora  text-base pc:text-xl italic font-medium text-center tab:text-left uppercase">
        {t("tryMore")}
      </p>
      <Image
        src="/notFoundPicture.png"
        alt="NotFound"
        width={2000}
        height={2000}
        priority
        className="mx-auto min-w-[300px] h-auto w-[60%]"
      />
    </div>
  );
}
