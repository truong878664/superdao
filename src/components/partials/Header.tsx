"use client";
import { FunctionComponent, PropsWithChildren, useState } from "react";

import Logo from "@/assets/logo.svg";
import Burger from "@/assets/icons/ic-burger.svg";
import Close from "@/assets/icons/ic-close.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Link from "next/link";
import { navList } from "@/app/constants";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const [isDropdownNav, setDropdownNav] = useState(false);

  return (
    <header>
      <div className="container flex items-center justify-between py-4">
        <Logo />
        {isDropdownNav && (
          <div className="bg-dark-blue-850 fixed left-0 top-0 -z-10 mt-14 size-full overflow-auto pt-7.5">
            <div className="container flex flex-col gap-8 text-2sm font-semibold">
              <button className="rounded-2lg bg-yellow-600/20 px-5 py-2.5 text-start leading-8 text-yellow-600">
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
          </div>
        )}
        <button onClick={() => setDropdownNav(!isDropdownNav)}>
          {isDropdownNav ? <Close /> : <Burger />}
        </button>
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
  return <ul className="flex flex-col gap-3">{children}</ul>;
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
    <li className="rounded-2lg bg-blue-dark-700">
      <div
        className="flex justify-between py-4.25 pl-5 pr-4 leading-none *:transition-all"
        onClick={() => setDropdown(!isDropdown)}
      >
        <span>{children}</span>
        <ArrowDown className={isDropdown && "rotate-180"} />
      </div>
      {isDropdown && (
        <ul className="mb-2.5">
          {childList.map(({ Icon, title, href }, index) => (
            <Link href={href} key={index}>
              <li className="flex items-center gap-4 px-5 py-2.5">
                <div className="bg-blue-dark-450 rounded-2md p-1.25">
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
