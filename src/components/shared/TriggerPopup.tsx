import { FunctionComponent } from "react";

interface TriggerPopupProps {
  id: string;
}

const TriggerPopup: FunctionComponent<TriggerPopupProps> = ({ id }) => {
  return <input type="checkbox" id={id} className="peer hidden" />;
};

export default TriggerPopup;
