import React from "react";

const shapes = {
  round: "rounded",
} as const;
const variants = {
  outline: {
    black_900: "border-black-900 border border-solid text-black-900",
  },
} as const;
const sizes = {
  xs: "h-[24px] w-[24px] pl-2 text-base",
} as const;

type CheckboxProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    label: string;
    id: string;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    onClick: () => void;
  }>;
const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      shape = "",
      variant = "outline",
      size = "xs",
      color = "black_900",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className + " flex items-center gap-[5px] cursor-pointer"}>
          <input
            className={` ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        {children}
      </>
    );
  },
);

export { CheckBox };
