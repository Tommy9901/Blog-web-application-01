import { Footer } from "@/components/Footer/Footer";
import { Nav } from "@/components/Header/Nav";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <div className=" bg-white dark:text-[#D1D5DB] dark:bg-[#030712]">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>

  );
}
