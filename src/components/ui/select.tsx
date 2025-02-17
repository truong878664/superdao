"use client";
import { cn } from "@/lib/utils";
import { Portal } from "@radix-ui/react-portal";
import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";

type SelectValue = string | number | undefined;

const SelectValueContext = createContext<SelectValue>(undefined);
const DispatchSelectContext = createContext<
  Dispatch<SetStateAction<SelectValue>>
>(() => {});

/**
 * Select
 */
interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: SelectValue;
  icon?: ReactNode;
  offsetY?: number;
}

const Select: FunctionComponent<SelectProps> = ({
  children,
  defaultValue,
  onClick,
  style,
  icon,
  offsetY = 0,
  ...rest
}) => {
  const hasChildrenWrap = React.Children.count(children) === 1;
  const containerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });

  const [value, setValue] = useState<SelectValue>(defaultValue);
  const [open, setOpen] = useState<boolean>(false);

  useOnClickOutside(containerRef as RefObject<HTMLElement>, () =>
    setOpen(false)
  );

  useEventListener("scroll", () => {
    if (open) setOpen(false);
  });

  useEffect(() => {
    if (open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <SelectValueContext value={value}>
      <DispatchSelectContext value={setValue}>
        <>
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const left = rect.left;
              const top = rect.top + rect.height + offsetY;

              setPosition({ left, top });
              setOpen(!open);
              onClick?.(e);
            }}
            style={{
              cursor: "pointer",
              display: "inline-flex",
              gap: 4,
              alignItems: "center",
              ...style,
            }}
            {...rest}
          >
            <span>{value}</span>
            {icon}
          </div>
          {open && (
            <Portal
              ref={containerRef}
              asChild={hasChildrenWrap}
              style={{
                position: "fixed",
                top: position.top,
                left: position.left,
                height: 400,
                overflow: hasChildrenWrap ? undefined : "auto",
              }}
            >
              {children}
            </Portal>
          )}
        </>
      </DispatchSelectContext>
    </SelectValueContext>
  );
};

/**
 * Option
 */
interface OptionProps extends HTMLAttributes<HTMLDivElement> {
  value: SelectValue;
  activeClassName?: string;
}

const Option: React.FunctionComponent<OptionProps> = ({
  value,
  onClick,
  style,
  activeClassName,
  className,
  ...rest
}) => {
  const currentValue = useContext(SelectValueContext);
  const dispatchValue = useContext(DispatchSelectContext);

  return (
    <div
      data-active={currentValue === value}
      style={{ cursor: "pointer", ...style }}
      className={cn(currentValue === value && activeClassName, className)}
      onClick={(e) => {
        dispatchValue(value);
        onClick?.(e);
      }}
      {...rest}
    />
  );
};

export { Option };
export default Select;
