"use client";
import { FunctionComponent, PropsWithChildren, useState } from "react";

import Logo from "@/assets/logo.svg";
import Burger from "@/assets/icons/ic-burger.svg";
import Close from "@/assets/icons/ic-close.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Link from "next/link";
import { navList } from "@/app/constants";
import SocialNetworkList from "../partials/SocialNetworkList";
import TriggerPopup from "../shared/TriggerPopup";
import { cn } from "@/lib/utils";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const [isDropdownNav, setDropdownNav] = useState(false);

  return (
    <header>
      <div className="container relative z-10 flex items-center justify-between py-10 sm:px-4 md:gap-14 md:px-0">
        <Logo />
        <TriggerPopup id="nav-popup" />
        <div className="full-screen -z-10 hidden overflow-auto bg-blue-dark-850 pb-5 pt-14 peer-checked:block md:relative md:block md:flex-1 md:overflow-visible md:bg-transparent md:p-0">
          <div className="container flex min-h-full flex-col justify-between gap-9">
            <div className="flex flex-col gap-8 pt-7.5 text-2sm font-semibold md:flex-row-reverse md:items-center md:justify-between md:pt-0">
              <button className="md:bg-blue-dark-550 rounded-2lg bg-yellow-600/20 px-5 py-2.5 text-start leading-8 text-yellow-600 md:rounded-lg md:px-4 md:py-2 md:text-center md:text-xs md:leading-4 md:text-white">
                Login
              </button>
              <NavHeader.Ul>
                {navList.map((nav, index) => (
                  <NavHeader.Li key={index} childList={nav.children}>
                    {nav.title}
                  </NavHeader.Li>
                ))}
              </NavHeader.Ul>
            </div>
            <SocialNetworkList />
          </div>
        </div>

        <label htmlFor="nav-popup" className="group md:hidden">
          <span className="hidden peer-checked:group-[]:block">
            <Close />
          </span>
          <span className="block peer-checked:group-[]:hidden">
            <Burger />
          </span>
        </label>
      </div>
    </header>
  );
};

export default Header;

/**
 *
 * @param param0
 * @returns
 */
const Ul: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="flex flex-col gap-3 md:flex-row md:gap-6 md:text-sm">
      {children}
    </ul>
  );
};

/**
 *
 * @param param0
 * @returns
 */
const Li: FunctionComponent<
  PropsWithChildren & { childList: (typeof navList)[number]["children"] }
> = ({ children, childList }) => {
  const [isDropdown, setDropdown] = useState(false);
  return (
    <li className="cursor-pointer rounded-2lg bg-blue-dark-700 md:relative md:bg-transparent">
      <div
        className="flex justify-between py-4.25 pl-5 pr-4 leading-none *:transition-all md:px-0"
        onClick={() => setDropdown(!isDropdown)}
      >
        <span>{children}</span>
        <ArrowDown className={cn("md:hidden", { "rotate-180": isDropdown })} />
      </div>
      {isDropdown && (
        <ul className="mb-2.5 md:absolute md:left-1/2 md:top-full md:mt-2 md:bg-blue-dark-700">
          {childList.map(({ Icon, title, href }, index) => (
            <Link href={href} key={index}>
              <li className="flex items-center gap-4 px-5 py-2.5 md:p-0">
                <div className="rounded-2md bg-blue-dark-450 p-1.25">
                  <Icon />
                </div>
                <span>{title}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </li>
  );
};

/**
 *
 */
const NavHeader = { Ul, Li };