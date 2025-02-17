"use client";

import { FunctionComponent } from "react";
import "rc-select/assets/index.css";
import Select, { Option } from "@/components/ui/select";
import { ChevronDown, Triangle } from "lucide-react";

interface SelectPageProps {}

const SelectPage: FunctionComponent<SelectPageProps> = () => {
  console.log((1).toString(36));

  return (
    <>
      <div className="h-[800px] bg-red-500">header</div>
      <div className="h-screen w-screen p-2">
        <Select
          defaultValue="test"
          icon={
            <Triangle
              size={14}
              className="rotate-180 fill-gray-900 stroke-none"
            />
          }
          className="rounded-md bg-gray-100 px-2 py-1"
        >
          <div className="overflow-hidden rounded-md border bg-gray-50 shadow-lg">
            <div className="h-full min-w-72 overflow-auto p-2">
              {Array.from({ length: 100 }).map((_, i) => (
                <Option
                  key={i}
                  className="hover:bg-gray-100"
                  activeClassName="bg-blue-400"
                  value={"test" + i}
                >
                  test {i}
                </Option>
              ))}
            </div>
          </div>
        </Select>
      </div>

      <div className="h-96 bg-blue-500">footer</div>
    </>
  );
};

export default SelectPage;
