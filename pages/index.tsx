import Image from "next/image";
import { Inter } from "next/font/google";
import Searchbar from "@/components/Homepage/Searchbar";
import Couresel from "@/components/Homepage/Couresel";
import CategoryItem from "@/components/Homepage/Categories";
import Productcard from "@/components/global/Productcard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="lg:px-5 px-2 ">
      <Searchbar />
      <div className="lg:px-5">
        <Couresel />
        <div className="px-2 lg:px-10 py-10 flex items-center justify-between">
          <span className="bg-gray-200 h-1 w-full"></span>
          <h1 className="w-[250px] px-2 py-2 rounded-2xl border border-stone-500 text-center">
            Browse by Gender
          </h1>
          <span className="bg-gray-200 h-1 w-full"></span>
        </div>
        <div className="flex w-full flex-wrap  justify-evenly items-center mt-3 lg:mt-10 gap-5 lg:gap-10">
          <CategoryItem title="Men's Wear" />
          <CategoryItem title="Ladies's Wear" />
          <CategoryItem title="Children's Wear" />
          <CategoryItem title="Unisex's Wear" />
        </div>
        <div className="px-2 lg:px-10 py-5 lg:py-10 flex items-center justify-between">
          <span className="bg-gray-200 h-1 w-full"></span>
          <h1 className="w-[250px] px-2 py-2 rounded-2xl border border-stone-500 text-center">
            Top Products
          </h1>
          <span className="bg-gray-200 h-1 w-full"></span>
        </div>
        <div className="flex w-full justify-evenly items-center mt-3 lg:mt-10 gap-10 flex-wrap">
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
