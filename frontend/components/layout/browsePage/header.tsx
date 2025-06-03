"use client";

import { Logo } from "@/components/icons/logo";
import { menuList } from "@/utils/data";
import { Bell, ChevronDown, CircleUser, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button"

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScrollValue() {
      const scrollValue = window.scrollY;
      setScrollY(scrollValue);
    }
    console.log(scrollY);
    window.addEventListener("scroll", handleScrollValue);
  }, [scrollY]);

  return (
    <header
      className={`w-[100%] h-[70px] flex items-center top-0  ${
        scrollY == 0 ? "bg-transparent" : "bg-black"
      } `}
    >
      <nav className="flex w-full justify-between p-9 items-center ">
        <div className="flex items-center gap-10">
          <Logo></Logo>
          <div className=" max-[762px]:hidden">
            <Navigation menuList={menuList}></Navigation>
          </div>
        </div>
        <div className=" text-white">
          <Options></Options>
        </div>
      </nav>
    </header>
  );
};
const Options = () => {
  return (
    <ul className="flex items-center gap-5">
      <li className="">
        <Search />
      </li>
      <li className="">
        <Bell />
      </li>
      <li className="">
        <ProfileOptions></ProfileOptions>
      </li>
    </ul>
  );
};

const ProfileOptions = () => {
  return (
    <span className="flex items-center">
      <CircleUser></CircleUser>
      <ChevronDown />
    </span>
  );
};

type menuLink = {
  label: string;
  to: string;
};

type navigationProps = {
  menuList: Array<menuLink>;
};

const Navigation = ({ menuList }: navigationProps) => {
  return (
    <ul className="flex items-center gap-5 text-white">
      {menuList.map((menu, index) => (
        <li key={index}>
          <Link href={menu.to}>{menu.label}</Link>
        </li>
      ))}
    </ul>
  );
};
