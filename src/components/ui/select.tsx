"use client";
import { cn } from "@/lib/utils";
import { Portal } from "@radix-ui/react-portal";
import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  HTMLAttributes,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  useEventListener,
  useOnClickOutside,
  useScrollLock,
} from "usehooks-ts";

type Value = string | number | undefined;

const ValueSelectContext = createContext<Value>(undefined);
const DispatchSelectContext = createContext<Dispatch<SetStateAction<Value>>>(
  () => {}
);

/**
 * Select
 */
interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: Value;
}

const Select: FunctionComponent<SelectProps> = ({
  children,
  defaultValue,
  onClick,
  style,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastKnowScrollPositionRef = useRef(0);
  const lastKnowTopPositionRef = useRef(0);
  const detailYRef = useRef(0);

  const [position, setPosition] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });

  const [value, setValue] = useState<Value>(defaultValue);
  const [open, setOpen] = useState<boolean>(false);

  useOnClickOutside(containerRef as RefObject<HTMLElement>, () =>
    setOpen(false)
  );

  useEventListener("scroll", () => {
    window.requestAnimationFrame((e) => {
      detailYRef.current = window.scrollY - lastKnowScrollPositionRef.current;
      setPosition({
        ...position,
        top: lastKnowTopPositionRef.current - detailYRef.current,
      });
      lastKnowScrollPositionRef.current = window.screenY;
    });
  });
  return (
    <ValueSelectContext.Provider value={value}>
      <DispatchSelectContext value={setValue}>
        <>
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setPosition({ left: rect.left, top: rect.top + rect.height });
              lastKnowTopPositionRef.current = rect.top + rect.height;
              setOpen(!open);
              onClick?.(e);
            }}
            style={{ cursor: "pointer", ...style }}
            {...rest}
          >
            {value}
          </div>
          {open && (
            <Portal
              ref={containerRef}
              style={{
                position: "fixed",
                top: position.top,
                left: position.left,
                maxHeight: 400,
                overflowY: "auto",
              }}
              className="bg-white text-black"
            >
              {children}
            </Portal>
          )}
        </>
      </DispatchSelectContext>
    </ValueSelectContext.Provider>
  );
};

/**
 * Option
 */
interface OptionProps extends HTMLAttributes<HTMLDivElement> {
  value: Value;
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
  const currentValue = useContext(ValueSelectContext);
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
