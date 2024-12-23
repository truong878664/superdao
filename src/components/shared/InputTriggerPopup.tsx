import { FunctionComponent } from "react";

interface InputTriggerPopupProps {
  id: string;
}

const InputTriggerPopup: FunctionComponent<InputTriggerPopupProps> = ({
  id,
}) => <input type="checkbox" id={id} className="peer hidden" />;
export default InputTriggerPopup;
