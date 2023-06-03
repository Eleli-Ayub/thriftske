import { useRouter } from "next/router";
import React from "react";
import { GiCancel } from "react-icons/gi";
interface searchGridprops {
  showSearchGrid: boolean;
  setSearchGrid: (searchGrid: boolean) => void;
}

function Searchgrid({ showSearchGrid, setSearchGrid }: searchGridprops) {
  const router = useRouter();
  return (
    <div className="absolute bg-gray-200 flex child:flex gap-5 py-5 child:text-lg  px-5 text-black/60 flex-col child:flex-row child:flex-wrap w-full rounded-xl overflow-hidden  ">
      <div className=" font-serif  justify-center items-center">
        <GiCancel
          className="text-red-300 text-xl "
          onClick={() => {
            setSearchGrid(!showSearchGrid);
          }}
        />
      </div>
      <div className=" flex-row gap-2 child-hover:text-gray-600 child:cursor-pointer">
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
      <div className=" lg:flex flex-row gap-2  font-serif child-hover:text-gray-600 child:cursor-pointer pr-3 border-r-2">
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
      <div className=" lg:flex flex-row gap-2  font-serif child-hover:text-gray-600 child:cursor-pointer pr-3 border-r-2">
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
    </div>
  );
}

export default Searchgrid;
