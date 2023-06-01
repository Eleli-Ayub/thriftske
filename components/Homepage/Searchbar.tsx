import React, { useState } from "react";
import { Input } from "../Elements/Inputs";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="py-3 px-5 flex flex-row gap-5 items-center">
      <Input
        value={searchQuery}
        onChange={(e: any) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Search"
      />
      <div className="flex flex-row gap-2 text-red-500 font-serif child-hover:text-gray-600 child:cursor-pointer border-l-2 px-3 border-r-2">
        <h3>Top brands</h3>
        <h3>Top Sellers</h3>
        <h3>Most Demanded</h3>
        <h3>Browse</h3>
      </div>
      <div className="flex flex-row gap-2 text-red-500 font-serif child-hover:text-gray-600 child:cursor-pointer pr-3 border-r-2">
        <h3>Men</h3>
        <h3>Ladies</h3>
        <h3>Children</h3>
        <h3>Unisex</h3>
      </div>
      <div className="flex flex-row gap-2 text-red-500 font-serif child-hover:text-gray-600 child:cursor-pointer pr-3 border-r-2">
        <h3>Official</h3>
        <h3>Street Wear</h3>
        <h3>Casual</h3>
        <h3>Suits</h3>
        <h3>Pants</h3>
        <h3>Sweaters</h3>
      </div>
      <div className="flex flex-row gap-2 text-stone-800 font-serif child-hover:text-gray-600 child:cursor-pointer pr-3">
        <h3>Contact Us</h3>
        <h3>Register</h3>
        <h3>FAQs</h3>
      </div>
    </div>
  );
};

export default Searchbar;
