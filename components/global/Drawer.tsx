import Link from "next/link";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
interface topBarStripProps {
  showDrawer: boolean;
  setShowDrawer: (value: boolean) => void;
}

function Drawer({ showDrawer, setShowDrawer }: topBarStripProps) {
  return (
    <div className="fixed z-20 h-screen w-screen bg-black/60 ">
      <div className="h-full w-[90%] bg-white pt-10 relative">
        <nav className="flex flex-row justify-between px-8 items-center pb-2 border-b border-gray-600 ">
          <h1 className="text-3xl font-comfortaa font-extrabold text-black/60 ">
            Navigation
          </h1>
          <MdOutlineCancel
            onClick={() => {
              setShowDrawer(!showDrawer);
            }}
            className="text-red-500 text-[40px]"
          />
        </nav>
        <hr />
        <section className="pl-10 mt-5">
          <ul className=" text-gray-700 flex flex-col gap-5 text-xl border-b px-3  pb-2">
            <Link href="/">Home</Link>
            <Link href="/">Browse</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">FAQs</Link>
            <Link href="/">Categories</Link>
          </ul>
        </section>
        <div className="flex mt-5 justify-between px-5 flex-row gap-3 text-stone-800 lg:text-2xl text-lg w-full">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsLinkedin />
          <BsWhatsapp />
          <BsFillTelephoneFill />
        </div>
        <div className="absolute flex flex-row items-center justify-between px-2 bottom-0 left-0 bg-black/20 h-[50px] w-full">
          <h1>Eleli Africa 2023</h1>
          <section className="flex flex-row items-center gap-1">
            <h1>Logout</h1>
            <BiLogIn />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
