import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-lg",
} as const;
const variants = {
  fill: {
    deep_orange_A400: "bg-deep_orange-A400 text-white-A700",
    white_A700: "bg-white-A700",
    green_700: "bg-green-700 text-white-A700",
    purple_500: "bg-purple-500 text-white-A700",
    gray_100: "bg-gray-100 text-black-900",
    orange_A700: "bg-orange-A700 text-white-A700",
    red_900: "bg-red-900 text-white-A700",
    gray_50: "bg-gray-50 text-black-900",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    black_900: "bg-black-900 text-white-A700",
  },
  outline: {
    white_A700: "border-white-A700 border border-solid text-white-A700",
    blue_gray_900: "border-blue_gray-900 border border-solid text-blue_gray-900",
  },
} as const;
const sizes = {
  "7xl": "h-[60px] px-[15px]",
  "3xl": "h-[44px] px-[30px] text-[10px]",
  xs: "h-[15px] text-[10px]",
  lg: "h-[35px] px-[7px]",
  "4xl": "h-[44px] px-[30px] text-lg",
  "6xl": "h-[56px] px-[35px] text-base",
  "5xl": "h-[52px] px-[35px] text-lg",
  md: "h-[35px] px-[30px] text-xs",
  sm: "h-[25px] px-[15px] text-xs",
  xl: "h-[38px] px-5 text-lg",
  "2xl": "h-[40px] px-[35px] text-sm",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "2xl",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
