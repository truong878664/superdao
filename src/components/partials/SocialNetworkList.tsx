import { socialNetworkList } from "@/app/constants";
import { FunctionComponent } from "react";

const SocialNetworkList: FunctionComponent = () => {
  return (
    <ul className="sticky bottom-0 flex justify-between md:hidden">
      {socialNetworkList.map(({ Icon, ...social }, index) => (
        <a key={index} href={social.url}>
          <li
            style={{ "--color": social.color } as any}
            className="bg-var-color bg-opacity-15 rounded-full p-3.5"
            data-background={social.color}
          >
            <Icon />
          </li>
        </a>
      ))}
    </ul>
  );
};

export default SocialNetworkList;
