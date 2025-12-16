interface BurgerMenuButtonProps {
  isHeaderMenuOpened: boolean;
  toggleHeaderMenuOpen: () => void;
}
const firstLineBaseStyles = "top-[7px] pc:top-[6px] left-0 ";
const firstLineTransformStyles = "rotate-[-45deg] top-[16px] pc:top-[18px]";
const secondLineBaseStyles = "top-[17.4px] pc:top-[18px] opacity-100";
const secondLineTransformStyles = "opacity-0";
const thirdLineBaseStyles = "top-[27px] pc:top-[30px]";
const thirdLineTransformStyles = "rotate-45 top-[16px] pc:top-[18px]";

export const MenuButtonBurger = ({
  isHeaderMenuOpened,
  toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) => {
  return (
    <button
      aria-label="open menu button"
      type="button"
      onClick={toggleHeaderMenuOpen}
      className="relative w-12 h-12 p-[7.2px] pc:p-1 flex justify-center items-center "
    >
      <div className="cursor-pointer w-full h-full rotate-0 transition-all duration-[600ms] ease-out">
        <span
          className={`block absolute w-full h-[2.2px] pc:h-[3px] bg-nav rounded-full rotate-0 transition-transform duration-300 ease-out origin-center ${
            isHeaderMenuOpened ? firstLineTransformStyles : firstLineBaseStyles
          }`}
        ></span>
        <span
          className={`block absolute left-0 w-full h-[2.3px] pc:h-[3.1px] bg-nav rounded-full rotate-0 transition-opacity duration-300 ease-out  ${
            isHeaderMenuOpened
              ? secondLineTransformStyles
              : secondLineBaseStyles
          }`}
        ></span>
        <span
          className={`block absolute left-0 w-full h-[2.3px] pc:h-[3.1px] bg-nav rounded-full rotate-0 transition-transform duration-300 ease-out origin-center ${
            isHeaderMenuOpened ? thirdLineTransformStyles : thirdLineBaseStyles
          }`}
        ></span>
      </div>
    </button>
  );
};
