import Searchbar from "@/components/Homepage/Searchbar";
import Productcard from "@/components/global/Productcard";
import React from "react";

function Categories() {
  return (
    <div>
      <Searchbar />
      <div className="flex w-full justify-start items-center mt-5 lg:mt-10 gap-2 flex-wrap child:mb-5">
        <Productcard title="Cigarret Jeans" price="2200" />
        <Productcard title="Ladies Sexy Lingerie" price="2200" />
        <Productcard title="Black Leather Coat" price="2000" />
        <Productcard title="Unisex's Sport Shoes" price="2100" />
        <Productcard title="Adidas Shoes" price="2100" />
        <Productcard title="Nikes J1's New" price="2100" />
        <Productcard title="Cigarret Jeans" price="2200" />
        <Productcard title="Ladies Sexy Lingerie" price="2200" />
        <Productcard title="Black Leather Coat" price="2000" />
        <Productcard title="Unisex's Sport Shoes" price="2100" />
        <Productcard title="Adidas Shoes" price="2100" />
        <Productcard title="Nikes J1's New" price="2100" />
        <Productcard title="Cigarret Jeans" price="2200" />
        <Productcard title="Ladies Sexy Lingerie" price="2200" />
        <Productcard title="Black Leather Coat" price="2000" />
        <Productcard title="Unisex's Sport Shoes" price="2100" />
        <Productcard title="Adidas Shoes" price="2100" />
        <Productcard title="Nikes J1's New" price="2100" />
      </div>
    </div>
  );
}

export default Categories;
