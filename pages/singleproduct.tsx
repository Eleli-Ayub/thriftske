import Image from "next/image";
import React from "react";
import productImage from "../assets/images/bluesuit.jpg";
import Acordion from "@/components/global/Accordion";
import Productcard from "@/components/global/Productcard";
function singleproduct() {
  return (
    <div className="flex flex-col">
      <div className=" h-fit lg:h-screen lg:max-h-screen px-3 lg:px-10 pt-10 flex flex-col lg:flex-row gap:5 lg:gap-10 font-comfortaa ">
        <div className="h-5/6 w-full lg:w-2/3 ">
          <Image
            className="h-full w-full rounded-2xl object-cover "
            src={productImage}
            height={1000}
            width={1000}
            alt="Product Image"
          />
        </div>
        <section className="flex flex-col gap-5 lg:gap-10 lg:w-1/3 pt-5 lg:pt-10 lg:pl-10">
          <div>
            <nav className="flex flex-row gap-20 font-bold text-lg ">
              <h1>Official Suit</h1>
              <h1>Ksh. 12,000</h1>
            </nav>
            <p className="text-sm lg:text-md w-full lg:w-2/3 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, accusantium.
            </p>
          </div>
          <div>
            <h1 className=" font-bold mb-1">Colors</h1>
            <div className="flex child:text-sm flex-row gap-1 child:h-[40px] child:w-[60px] lg:child:h-[50px] lg:child:w-[70px] child:border child:flex child:items-center child:justify-center child:border-stone-600 child:rounded-md lg:child:rounded-lg">
              <div className="bg-red-800">red</div>
              <div className="bg-black">black</div>
              <div className="bg-white">white</div>
              <div className="bg-green-500">green</div>
              <div className="bg-blue-600">blue</div>
            </div>
          </div>
          <div>
            <h1 className=" font-bold mb-1">Sizes</h1>
            <div className="flex flex-row gap-1 text-sm lg:text-md child:border child:flex child:items-center child:justify-center child:border-stone-600 child:rounded-lg">
              <h1>32,</h1>
              <h1>35,</h1>
              <h1>37,</h1>
              <h1>40.</h1>
            </div>
          </div>
          <div>
            <h1 className=" font-bold mb-1">Images</h1>
            <div className="flex flex-row flex-wrap gap-2">
              <Image
                className="h-[50px] w-[50px] rounded-2xl object-cover "
                src={productImage}
                height={1000}
                width={1000}
                alt="Product Image"
              />
              <Image
                className="h-[50px] w-[50px] rounded-2xl object-cover "
                src={productImage}
                height={1000}
                width={1000}
                alt="Product Image"
              />
              <Image
                className="h-[50px] w-[50px] rounded-2xl object-cover "
                src={productImage}
                height={1000}
                width={1000}
                alt="Product Image"
              />
              <Image
                className="h-[50px] w-[50px] rounded-2xl object-cover "
                src={productImage}
                height={1000}
                width={1000}
                alt="Product Image"
              />
              <Image
                className="h-[50px] w-[50px] rounded-2xl object-cover "
                src={productImage}
                height={1000}
                width={1000}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="w-full text-stone-200">
            <button className="bg-black hover:bg-green-500 hover:font-bold duration-500 hover:border hover:border-red-200 hover:text-black w-full rounded-xl py-2 text-xl  text-white ">
              ADD TO CART
            </button>
          </div>
          <div className="overflow-y-scroll no-scrollbar">
            <Acordion />
          </div>
        </section>
      </div>
      <div className="flex flex-row items-center ">
        <span className="bg-gray-200 h-1 w-full"></span>
        <h1 className="w-[250px] px-2 py-2 rounded-2xl border border-stone-500 text-center">
          Similar Products
        </h1>
        <span className="bg-gray-200 h-1 w-full"></span>
      </div>
      <div className="px-2 lg:px-5 flex flex-row flex-wrap">
        <Productcard price={"21,000"} title={"Official Suit Black"} />
        <Productcard price={"21,000"} title={"Official Suit Black"} />
        <Productcard price={"21,000"} title={"Official Suit Black"} />
        <Productcard price={"21,000"} title={"Official Suit Black"} />
        <Productcard price={"21,000"} title={"Official Suit Black"} />
        <Productcard price={"21,000"} title={"Official Suit Black"} />
        <Productcard price={"21,000"} title={"Official Suit Black"} />
        <Productcard price={"21,000"} title={"Official Suit Black"} />
        <Productcard price={"21,000"} title={"Official Suit Black"} />
        <Productcard price={"21,000"} title={"Official Suit Black"} />
        <Productcard price={"21,000"} title={"Official Suit Black"} />
      </div>
    </div>
  );
}

export default singleproduct;
