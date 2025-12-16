"use client";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { locales } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash);
    }
  }, [pathName, searchParams]);

  return (
    <ul className="flex gap-2 tab:gap-3 tab:text-base pc:text-lg font-lora ml-5">
      {locales.map((curLocale) => (
        <li key={curLocale}>
          <Link
            href={{
              hash: hash,
              search: searchParams.toString(),
              pathname: pathName,
            }}
            replace
            locale={curLocale}
            scroll={false}
            className={
              curLocale === locale
                ? "text-accent hover:text-accent  transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                : "text-nav hover:text-accent  transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            }
          >
            {curLocale === "uk" ? "ua" : curLocale}
          </Link>
        </li>
      ))}
    </ul>
  );
}
