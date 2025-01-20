import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FunctionComponent, HTMLAttributes } from "react";

const button = cva("rounded-[0.625rem]", {
  variants: {
    shadow: {
      md: "shadow-[0_7px_36px]",
      lg: "shadow-[0_8px_40px]",
    },
    // align: {
    //   center: "text-center",
    //   left: "text-left",
    // },
    // width: {
    //   auto: "w-full",
    //   fit: "",
    // },
    // size: {
    //   md: "py-[0.625rem] px-5",
    // },
    // text: {
    //   xs: "text-sm",
    //   sm: "text-[0.9375rem] leading-8",
    //   md: "text-base",
    // },
  },
  defaultVariants: {},
});
interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  // align,
  // width,
  // text,
  // size,
  ...rest
}) => {
  return <button {...rest} className={cn(button({}), className)} />;
};

export default Button;
