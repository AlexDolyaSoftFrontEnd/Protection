export type Color =
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "yellow"
  | "black"
  | "violet"
  | "grey";

export const SquareSmall = ({
  color,
  size,
}: {
  color?: Color;
  size?: boolean;
}) => {
  let bgColorClass = "bg-accentGradient"; // значення за замовчуванням

  switch (color) {
    case "red":
      bgColorClass = "bg-[#f54b42]";
      break;
    case "green":
      bgColorClass = "bg-[#36ca45]";
      break;
    case "blue":
      bgColorClass = "bg-[#42bcf5]";
      break;
    case "orange":
      bgColorClass = "bg-[#f2a048]";
      break;
    case "yellow":
      bgColorClass = "bg-[#f4f029]";
      break;
    case "black":
      bgColorClass = "bg-[#000000]";
      break;
    case "violet":
      bgColorClass = "bg-[#4d19ce]";
      break;
    case "grey":
      bgColorClass = "bg-[#bbbbbd]";
      break;
    default:
      bgColorClass = "bg-accentGradient";
      break;
  }

  return (
    <div
      className={`${bgColorClass} ${
        size ? "w-3 h-3 tab:w-4 tab:h-4" : "w-2 h-2"
      } `}
    />
  );
};
