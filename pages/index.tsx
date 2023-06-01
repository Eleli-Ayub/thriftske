import Image from "next/image";
import { Inter } from "next/font/google";
import Searchbar from "@/components/Homepage/Searchbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1>
      <Searchbar />
    </h1>
  );
}
