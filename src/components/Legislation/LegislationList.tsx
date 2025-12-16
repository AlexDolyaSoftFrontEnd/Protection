"use client";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Select from "react-select";
import { useRouter, useSearchParams } from "next/navigation";
import { LawItem } from "./LawItem";
import { categoryNames } from "@/mockedData/categoryNameData";
import { LocaleType } from "../../../types/LocaleType";
import { legislationData } from "@/mockedData/legislation";

export const LegislationList = () => {
  const t = useTranslations("Legislation");
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const options = categoryNames.map((category) => ({
    value: category.categoryName,
    label: category[locale as LocaleType],
  }));
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || "all";
    setSelectedCategory(categoryFromUrl);
  }, [searchParams]);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "300px",
      borderColor: "var(--nav-text-color)",
      "&:hover": { borderColor: "var(--accent-text-color)" },
      boxShadow: "none",
      paddingRight: "10px",
      borderRadius: "none",
      backgroundColor: "var(--accent-bgcolor:)",
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "white",
      zIndex: 9999,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "var(--accent-text-color)" : "white",
      color: state.isSelected ? "white" : "var(--nav-text-color)",
      "&:hover": {
        backgroundColor: "var(--options-accent-color)",
        color: "var(--nav-text-color)",
      },
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color:
        state.isFocused || state.selectProps.menuIsOpen
          ? "var(--accent-text-color)"
          : "var(--nav-text-color)",
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
      "&:hover": {
        color: "var(--accent-text-color)",
      },
    }),
  };

  const filteredData =
    selectedCategory === "all"
      ? legislationData
      : legislationData.filter((item) => item.data.categoryName === selectedCategory);

  return (
    <section className="px-4 py-10 tab:px-5 tab:py-[60px] pc:px-10 pc:pt-[100px] tab:text-base">
      <div className="min-w-[288px] max-w-[600px] mx-auto tab:max-w-[700px] pc:max-w-[900px]">
        <div className="tab:flex gap-4 mb-5 pc:mb-7 justify-center items-center">
          <h3
            id="category"
            className="text-base leading-[21px] tab:text-lg font-semibold mb-4 tab:mb-0"
          >
            {t("filtering")}
          </h3>
          <Select
            instanceId="select-1"
            styles={customStyles}
            value={options.find((option) => option.value === selectedCategory)}
            onChange={(selectedOption) => {
              const newCategory = selectedOption?.value || "all";
              setSelectedCategory(newCategory);
              router.replace(`/${locale}/legislation?category=${newCategory}`, {
                scroll: false,
              });
            }}
            options={options}
            isSearchable={false}
          />
        </div>
        <ul>
          {filteredData.map((item) => (
            <li key={item.data.id} className="flex gap-2 text-start mb-2">
              <LawItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
