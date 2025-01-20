"use client";

import { FunctionComponent } from "react";
import "rc-select/assets/index.css";
import Select, { Option } from "@/components/ui/select";

interface SelectPageProps {}

const SelectPage: FunctionComponent<SelectPageProps> = () => {
  console.log((1).toString(36));

  return (
    <div className="h-screen w-screen">
      <Select defaultValue="test">
        <Option value={"test"}>test</Option>
        <Option value={"test2"}>test2</Option>
        <Option value={"test3"}>test3</Option>
        <Option value={"test4"}>test4</Option>
        <Option value={"test5"}>test5</Option>
        <Option value={"test6"}>test6</Option>
      </Select>
    </div>
  );
};

export default SelectPage;
