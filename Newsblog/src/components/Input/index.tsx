import React from "react";

const shapes = {
  round: "rounded-[10px]",
  square: "rounded-[0px]",
} as const;
const variants = {
  fill: {
    gray_50: "bg-gray-50 text-black-900",
    deep_purple_A700: "bg-deep_purple-A700 text-white-A700",
  },
  outline: {
    black_900: "border-black-900 border border-solid text-blue_gray-400",
  },
} as const;
const sizes = {
  md: "h-[80px] pl-[35px] pr-4 text-lg",
  sm: "h-[60px] pl-4 pr-[35px] text-base",
  xs: "h-[25px] px-[15px] text-xs",
} as const;

type InputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    type: string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      variant = "fill",
      size = "xs",
      color = "deep_purple_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center ${shapes[shape] || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

export { Input };
