import React, { useState } from "react";
import { Input } from "../Elements/Inputs";
import { useRouter } from "next/router";
import { BsFillGrid1X2Fill } from "react-icons/bs";
const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();
  return (
    <div className="py-3 px-5 flex flex-row lg:gap-5 gap-2 items-center sticky bg-white z-10 lg:top-0 lg:right-0 top-[50px] ">
      <Input
        value={searchQuery}
        onChange={(e: any) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Search"
      />
      <BsFillGrid1X2Fill className="text-black/60 text-lg" />
      <div className="hidden lg:flex flex-row gap-2 text-red-500 font-serif child-hover:text-gray-600 child:cursor-pointer border-l-2 px-3 border-r-2">
        <h3
          onClick={() => {
            router.push("topsellers");
          }}
        >
          Top Sellers
        </h3>
        <h3
          onClick={() => {
            router.push("categories");
          }}
        >
          Most Demanded
        </h3>
        <h3
          onClick={() => {
            router.push("categories");
          }}
        >
          Browse
        </h3>
      </div>
      <div className="hidden lg:flex flex-row gap-2 text-red-500 font-serif child-hover:text-gray-600 child:cursor-pointer pr-3 border-r-2">
        <h3
          onClick={() => {
            router.push("categories");
          }}
        >
          Men
        </h3>
        <h3
          onClick={() => {
            router.push("categories");
          }}
        >
          Ladies
        </h3>
        <h3
          onClick={() => {
            router.push("categories");
          }}
        >
          Children
        </h3>
        <h3
          onClick={() => {
            router.push("categories");
          }}
        >
          Unisex
        </h3>
      </div>
      <div className="hidden lg:flex flex-row gap-2 text-red-500 font-serif child-hover:text-gray-600 child:cursor-pointer pr-3 border-r-2">
        <h3
          onClick={() => {
            router.push("categories");
          }}
        >
          Official
        </h3>
        <h3
          onClick={() => {
            router.push("categories");
          }}
        >
          Street Wear
        </h3>
        <h3
          onClick={() => {
            router.push("categories");
          }}
        >
          Casual
        </h3>
        <h3
          onClick={() => {
            router.push("categories");
          }}
        >
          Suits
        </h3>
        <h3
          onClick={() => {
            router.push("categories");
          }}
        >
          Pants
        </h3>
        <h3
          onClick={() => {
            router.push("categories");
          }}
        >
          Sweaters
        </h3>
      </div>
      <div className="hidden lg:flex flex-row gap-2 text-stone-800 font-serif child-hover:text-gray-600 child:cursor-pointer pr-3">
        <h3>Contact Us</h3>
        <h3>Register</h3>
        <h3>FAQs</h3>
      </div>
    </div>
  );
};

export default Searchbar;
