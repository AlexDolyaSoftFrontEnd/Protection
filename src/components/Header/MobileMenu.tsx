import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import Menu from "../shared/Menu";

const openedStyles = "h-80";
const closedStyles = "h-0";
export interface HeaderMenuProps {
  isHeaderMenuOpened: boolean;
  setIsHeaderMenuOpened: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void;
}

const MobileMenu = ({
  isHeaderMenuOpened = false,
  setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
  const locale = useLocale();
  const t = useTranslations("Menu");

  return (
    <nav
      className={`absolute top-[83px] left-0 z-10 w-[100vw] overflow-hidden transition-height duration-[600ms] ease-out
           bg-accentBg ${isHeaderMenuOpened ? openedStyles : closedStyles}`}
    >
      <ul className="p-6 min-w-[288px] max-w-[500px] mx-auto tab:max-w-[900px] pc:max-w-[1800px]">
        <li className="mt-2 flex items-center">
          <AiOutlineSend size={12} color="orange" />
          <Link
            className="font-lora ml-1 text-nav font-medium cursor-pointer hover:text-accent focus:text-accent uppercase"
            href={`/${locale}`}
            onClick={() => setIsHeaderMenuOpened(false)}
          >
            {t("main")}
          </Link>
        </li>
        <Menu className="ml-1" onClick={() => setIsHeaderMenuOpened(false)} />
        <li className="ml-4 mt-2">
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
