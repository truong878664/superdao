import { FunctionComponent } from "react";

interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

const Label: FunctionComponent<LabelProps> = (props) => {
  return (
    <label
      {...props}
      onMouseDown={(e) => {
        if (!e.defaultPrevented && e.detail >= 2) e.preventDefault();
        props.onMouseDown?.(e);
      }}
    />
  );
};

export default Label;
