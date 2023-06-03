import Searchgrid from "@/components/Homepage/Searchgrid";
import Drawer from "@/components/global/Drawer";
import Footer from "@/components/global/Footer";
import Topbarstrip from "@/components/global/Topbarstrip";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showSearchGrid, setSearchGrid] = useState<boolean>(false);

  return (
    <div className="">
      <ThemeProvider>
        {showDrawer ? (
          <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        ) : (
          ""
        )}

        <Topbarstrip showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
