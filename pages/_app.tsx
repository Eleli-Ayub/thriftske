import Footer from "@/components/global/Footer";
import Topbarstrip from "@/components/global/Topbarstrip";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeProvider>
        <Topbarstrip />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
