import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { IconPhone } from "../icons/IconPhone";
import Menu from "../shared/Menu";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer className=" bg-footer pt-[60px] tab:pt-10 tab:pb-[43px] pb-[65px] border-t border-lightBorder px-4 flex-[0_0_auto]">
      <Link href={`/${locale}`}>
        <Image
          src="/logoFullLight.svg"
          alt="AKLawyer Logo"
          width={520}
          height={80}
          priority
          className="w-[200px] h-auto tab:w-[300px] mx-auto mb-4 tab:mb-10 pc:mb-8"
        />
      </Link>
      <ul className="flex flex-col tab:flex-row gap-0 tab:gap-3 justify-center mb-4 pc:mb-5">
        <Menu className="text-white mx-auto" classNameIcon="hidden" />
      </ul>
      <ul className="text-white mb-10 tab:flex tab:gap-4 justify-center pc:mb-[35px] pc:text-base">
        <li className="flex gap-2 items-center justify-center hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
          <div className="w-6 h-6 flex justify-center items-center">
            <IconPhone className="" />
          </div>
          <a href="tel:+380930324874" className="font-lora">
            +38 (093) 032-48-74
          </a>
        </li>
        <li className="flex gap-2 items-center justify-center hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
          <div className="w-6 h-6 flex justify-center items-center">
            <IconPhone className="" />
          </div>
          <a href="tel:+380633650465" className="font-lora">
            +38 (063) 365-04-65
          </a>
        </li>
      </ul>
      <p className="text-white text-xs flex justify-center">
        &#169; 2024 {t("copyright")}
      </p>
    </footer>
  );
};

export default Footer;
