import { Facebook, Icon, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full h-[40vh] bg-black flex flex-col p-10 gap-10">
      <div className="flex items-center gap-2 text-white m-auto">
        <Facebook></Facebook>
        <Twitter></Twitter>
        <Instagram></Instagram>
        <Youtube></Youtube>
      </div>
      <div className="flex gap-5 text-white w-full">
        <div className="capitalize flex gap-5  flex-wrap w-3/4 m-auto">
          <div className="">
            <p className="">audio description</p>
            <p className="">gift cards</p>
            <p className="">investor relations</p>
          </div>
          <div className="">
            <p className="">terms of use</p>
            <p className="">legal notices</p>
            <p className="">corporate information</p>
          </div>
          <div className="">
            <p className="">audio description</p>
            <p className="">gift cards</p>
            <p className="">investor relations</p>
          </div>
          <div className="">
            <p className="">terms of use</p>
            <p className="">legal notices</p>
            <p className="">corporate information</p>
          </div>
        </div>
      </div>
      <div className="text-gray-400 flex items-center justify-center">
        © 1997-2023 Netflix x Goat, Inc.
      </div>
    </footer>
  );
}
