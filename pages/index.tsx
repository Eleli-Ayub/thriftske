import Image from "next/image";
import { Inter } from "next/font/google";
import Searchbar from "@/components/Homepage/Searchbar";
import Couresel from "@/components/Homepage/Couresel";
import CategoryItem from "@/components/Homepage/Categories";
import Productcard from "@/components/global/Productcard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="px-5 ">
      <Searchbar />
      <div className="px-5">
        <Couresel />
        <div className="px-10 py-10 flex items-center justify-between">
          <span className="bg-gray-200 h-1 w-full"></span>
          <h1 className="w-[250px] px-2 py-2 rounded-2xl border border-stone-500 text-center">
            Browse by Gender
          </h1>
          <span className="bg-gray-200 h-1 w-full"></span>
        </div>
        <div className="flex w-full  justify-evenly items-center mt-10 gap-10">
          <CategoryItem title="Men's Wear" />
          <CategoryItem title="Ladies's Wear" />
          <CategoryItem title="Children's Wear" />
          <CategoryItem title="Unisex's Wear" />
        </div>
        <div className="px-10 py-10 flex items-center justify-between">
          <span className="bg-gray-200 h-1 w-full"></span>
          <h1 className="w-[250px] px-2 py-2 rounded-2xl border border-stone-500 text-center">
            Top Products
          </h1>
          <span className="bg-gray-200 h-1 w-full"></span>
        </div>
        <div className="flex w-full justify-evenly items-center mt-10 gap-10 flex-wrap">
          <Productcard title="Cigarret Jeans" price="2200" />
          <Productcard title="Ladies Sexy Lingerie" price="2200" />
          <Productcard title="Black Leather Coat" price="2000" />
          <Productcard title="Unisex's Sport Shoes" price="2100" />
          <Productcard title="Adidas Shoes" price="2100" />
          <Productcard title="Nikes J1's New" price="2100" />
        </div>
      </div>
    </div>
  );
}
