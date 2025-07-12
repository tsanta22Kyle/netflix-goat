import { Facebook, Icon, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer(){
    return(
        <footer className="w-full h-[40vh] bg-black flex flex-col p-10 gap-10">
            <div className="flex items-center gap-2 text-white">
               <Facebook></Facebook>
               <Twitter></Twitter>
               <Instagram></Instagram>
               <Youtube></Youtube>
            </div>
            <div className="flex gap-5 text-white w-full">
                <div className="capitalize flex  flex-wrap w-1/2">
                    <p className="">audio description</p>
                    <p className="">gift cards</p>
                    <p className="">investor relations</p>
                    <p className="">terms of use</p>
                    <p className="">legal notices</p>
                    <p className="">corporate information</p>
                    <p className="">audio description</p>
                    <p className="">gift cards</p>
                    <p className="">investor relations</p>
                    <p className="">terms of use</p>
                    <p className="">legal notices</p>
                    <p className="">corporate information</p>
                </div>
               
            </div>
                <div className="text-gray-400 flex items-center justify-center">© 1997-2023 Netflix x Goat, Inc.</div>
        </footer>
    )
}