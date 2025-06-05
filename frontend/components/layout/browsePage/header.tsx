"use client";

import { Logo } from "@/components/icons/logo";
import profile from "../../../public/assets/profile_img.png"
import { menuList } from "@/utils/data";
import { Bell, ChevronDown, CircleUser, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
      className={`w-[100%] h-[70px] fixed flex items-center top-0 p-5 transition-all duration-250 bg-gradient-to-b from-black   ${
        scrollY < 20 ? " to-transparent " : "  to-[#1e1e1e]"
      } z-100 `}
    >
      <nav className="flex w-full justify-between p-9 items-center  ">
        <div className="flex items-center gap-10 ">
          <div className="">
      <Link href={""}>
        <img
          src={"http://localhost:3000/img/Netflix_Logo_RGB.png"}
          className="w-25 h-10 lg:w-33 lg:h-14"
          alt="Logo Netflix"
          loading="lazy"
        />
      </Link>
    </div>
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
      <li>
        <p>Children</p>
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
    <Button className="flex items-center bg-transparent hover:bg-transparent cursor-pointer">
      {/* <CircleUser></CircleUser> */}
      <Image src={profile} alt="userIcon" ></Image>
      <ChevronDown fill="white" size={32} strokeWidth={0} />
    </Button>
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
