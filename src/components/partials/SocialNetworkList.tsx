import { socialNetworkList } from "@/app/constants";
import { FunctionComponent } from "react";

const SocialNetworkList: FunctionComponent = () => {
  return (
    <ul className="flex justify-between md:hidden">
      {socialNetworkList.map(({ Icon, ...social }, index) => (
        <a key={index} href={social.url}>
          <li
            style={{ "--color": social.color } as any}
            className="bg-var-color rounded-full bg-opacity-15 p-3.5"
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
