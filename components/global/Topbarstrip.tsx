import Image from "next/image";
import React, { useState } from "react";
import user from "../../assets/images/user.jpeg";
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { useRouter } from "next/router";

const Topbarstrip = () => {
  const router = useRouter();
  const [login, setLogin] = useState<boolean>(false);
  return (
    <div className="w-full px-10 py-3 bg-slate-500 flex flex-row  items-center justify-between">
      <h3
        onClick={() => {
          router.push("/");
        }}
        className="font-bold text-xl text-gray-300 hover:text-red-400 cursor-pointer duration-300"
      >
        <i>Thrifts ke</i>
      </h3>

      <h3 className="text-gray-400">
        <i>Your one stop thrift shop</i>
      </h3>
      <div className="flex flex-row gap-3 text-stone-800 text-2xl">
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
        <BsLinkedin />
        <BsWhatsapp />
        <BsFillTelephoneFill />
      </div>

      <div>
        {login ? (
          <div>
            <Image
              src={user}
              height={35}
              width={35}
              className="border borer-red-500 rounded-full cursor-pointer "
              alt="User Image"
            />
          </div>
        ) : (
          <button onClick={() => setLogin(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Topbarstrip;
