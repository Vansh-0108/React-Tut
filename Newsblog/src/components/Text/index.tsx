import React from "react";

const sizes = {
  xs: "text-[10px] font-normal leading-[25px]",
  lg: "text-[15px] font-normal",
  s: "text-xs font-normal",
  "2xl": "text-[17px] font-normal",
  "3xl": "text-lg font-normal",
  "4xl": "text-[28px] font-normal",
  xl: "text-base font-normal leading-[35px]",
  md: "text-sm font-normal",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "s",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
