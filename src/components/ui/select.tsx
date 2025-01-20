"use client";
import { Portal } from "@radix-ui/react-portal";
import React, {
  createContext,
  Dispatch,
  FunctionComponent,
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
interface SelectProps extends React.PropsWithChildren {
  className?: string;
  defaultValue?: Value;
}

const Select: FunctionComponent<SelectProps> = ({
  children,
  className,
  defaultValue,
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
        <div>
          <div
            className={className}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setPosition({ left: rect.left, top: rect.top + rect.height });
              lastKnowTopPositionRef.current = rect.top + rect.height;
              setOpen(!open);
            }}
          >
            {value}
          </div>
          {open && (
            <Portal>
              <div
                ref={containerRef}
                style={{
                  position: "fixed",
                  top: position.top,
                  left: position.left,
                }}
                onClick={(e) => {
                  console.log(e);
                }}
                className="bg-white text-black"
              >
                {children}
              </div>
            </Portal>
          )}
        </div>
      </DispatchSelectContext>
    </ValueSelectContext.Provider>
  );
};

/**
 * Option
 */
interface OptionProps extends React.PropsWithChildren {
  value: Value;
}

const Option: React.FunctionComponent<OptionProps> = ({ children, value }) => {
  const currentValue = useContext(ValueSelectContext);
  const dispatchValue = useContext(DispatchSelectContext);
  return (
    <div
      data-active={currentValue === value}
      onClick={() => dispatchValue(value)}
    >
      {children}
    </div>
  );
};

export { Option };
export default Select;
