import Topbarstrip from "@/components/global/Topbarstrip";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Topbarstrip />
      <Component {...pageProps} />
    </div>
  );
}
