import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import Navbar from "./Navbar";

const Header = () => {
  const locale = useLocale();

  return (
    <header className="  px-4 py-[17px] tab:px-5 tab:py-4 pc:px-10 border-b border-lightBorder">
      <div className="flex justify-between items-center gap-5 min-w-[288px] max-w-[500px] mx-auto tab:max-w-[900px] pc:max-w-[1800px]">
        <Link href={`/${locale}`}>
          <Image
            src="/logoFullDark.svg"
            alt="AKLawyer Logo"
            width={520}
            height={80}
            priority
            className="w-[200px] h-auto tab:w-[300px]"
          />
        </Link>

        <nav className="flex justify-end items-center text-nav">
          <Navbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
