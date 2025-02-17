"use client";
import { FunctionComponent, PropsWithChildren, useState } from "react";

import Logo from "@/assets/logo.svg";
import Burger from "@/assets/icons/ic-burger.svg";
import Close from "@/assets/icons/ic-close.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Link from "next/link";
import { navList } from "@/app/constants";
import SocialNetworkList from "../partials/SocialNetworkList";
import Label from "../ui/Label";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header>
      <div className="group relative z-10 container flex items-center justify-between py-4 md:gap-14 md:px-0 md:py-7.5 xl:gap-28 xl:py-8.5">
        <Logo />
        <input
          type="checkbox"
          id="nav-popup"
          className="hamburger peer sr-only"
        />
        <div className="bg-blue-dark-850 fixed top-0 left-0 -z-10 hidden size-full overflow-auto pt-14 pb-5 peer-checked:block md:relative md:block md:flex-1 md:overflow-visible md:bg-transparent md:p-0">
          <div className="container flex min-h-full flex-col justify-between gap-9">
            <div className="text-2sm flex flex-col gap-8 pt-7.5 font-semibold md:flex-row-reverse md:items-center md:justify-between md:pt-0">
              <button className="rounded-2lg md:bg-blue-dark-550 bg-yellow-600/20 px-5 py-2.5 text-start leading-8 text-yellow-600 md:rounded-lg md:px-4 md:py-2 md:text-center md:text-xs md:leading-4 md:text-white xl:px-5 xl:py-2.75 xl:text-lg">
                Login
              </button>
              <input
                type="radio"
                id="hide-dropdown"
                name="dropdown"
                defaultChecked
                className="sr-only"
              />
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
        <label htmlFor="nav-popup" className="md:hidden">
          <Close className="hidden group-has-[#nav-popup:checked]:block" />
          <Burger className="block group-has-[#nav-popup:checked]:hidden" />
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
    <ul className="flex flex-col gap-3 md:flex-row md:gap-6 md:text-sm xl:gap-11 xl:text-xl">
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
  return (
    <li>
      <Label className="group/li bg-blue-dark-700 relative cursor-pointer md:bg-transparent">
        <input type="radio" className="sr-only" name="dropdown" />
        <div className="relative flex justify-between py-4.25 pr-4 pl-5 leading-none *:transition-all md:px-0">
          <span>{children}</span>
          <ArrowDown className="group-has-[:checked]/li:rotate-180 md:hidden" />
          <Label
            className="absolute top-0 left-0 block size-full group-has-[#hide-dropdown:checked]:hidden"
            htmlFor="hide-dropdown"
          />
        </div>
        <ul className="md:rounded-2lg md:bg-blue-dark-700 mb-2.5 hidden group-has-[:checked]/li:block md:absolute md:top-full md:left-1/2 md:mt-2 md:-translate-x-1/2 md:px-2 md:py-1">
          {childList.map(({ Icon, title, href }, index) => (
            <Link href={href} key={index}>
              <li className="flex items-center gap-4 px-5 py-2.5 md:px-0 md:py-1">
                <div className="rounded-2md bg-blue-dark-450 p-1.25">
                  <Icon />
                </div>
                <span className="md:whitespace-nowrap">{title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </Label>
    </li>
  );
};

/**
 *
 */
const NavHeader = { Ul, Li };
