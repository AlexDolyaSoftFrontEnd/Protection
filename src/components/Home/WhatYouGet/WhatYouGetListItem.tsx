import Image from "next/image";

export interface DescriptionType {
  title: string;
  icon: string;
  text: string;
}

export const WhatYouGetListItem = ({
  item,
  isLast,
}: {
  item: DescriptionType;
  isLast: boolean;
}) => {
  return (
    <>
      <div className=" tab:w-[44.5%] pc:w-[41.76%] grow tab:grow-0">
        {item.title && (
          <h4 className="text-base leading-[21px] tab:text-lg font-semibold mb-4">
            {item.title}
          </h4>
        )}
        <p className="tab:text-base leading-[18px]">{item.text}</p>
      </div>
      <div className="tab:w-[8.33%] pc:w-[7.4%] ">
        <div className="relative w-[56px] h-[46px] tab:w-[60px] tab:h-[50px] pc:w-[80px] pc:h-[70px] mx-auto border border-accent rounded-br-md bg-primary">
          {item.icon && (
            <Image
              src={item.icon}
              alt={item.title}
              width={40}
              height={40}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 pc:w-10 pc:h-10  "
            />
          )}
        </div>
        <div
          className={`w-[1px] mt-[-1px] ${
            isLast
              ? ""
              : "h-lineWithoutHexagonMob tab:h-lineWithoutHexagonTab pc:h-lineWithoutHexagonPC"
          } bg-accent mx-auto`}
        ></div>
      </div>
    </>
  );
};
