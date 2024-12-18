import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { FunctionComponent } from "react";
import Burger from "@/assets/icons/ic-burger.svg";
import Close from "@/assets/icons/ic-close.svg";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header>
      <div className="container flex items-center justify-between py-4">
        <Logo />
        <div className="bg-yellow-200 fixed left-0 top-0 size-full overflow-auto">
          <button>Login</button>
          <ul>
            <li>Produce</li>
            <li>Use cases</li>
            <li>Learn</li>
            <li>About</li>
            <li>Jobs</li>
          </ul>
        </div>
        <button>
          {/* <Burger /> */}
          <Close />
        </button>
        {/* <div className="">this is none</div> */}
        {/* <div className="font-loos-bold">this is loss</div> */}
      </div>
    </header>
  );
};

export default Header;
