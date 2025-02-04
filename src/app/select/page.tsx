"use client";

import { FunctionComponent } from "react";
import "rc-select/assets/index.css";
import Select, { Option } from "@/components/ui/select";

interface SelectPageProps {}

const SelectPage: FunctionComponent<SelectPageProps> = () => {
  console.log((1).toString(36));

  return (
    <div className="h-screen w-screen">
      <Select
        defaultValue="test"
        // className="inline-block rounded-md border bg-gray-300 px-4 py-2 text-gray-800"
      >
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
      </Select>
    </div>
  );
};

export default SelectPage;
