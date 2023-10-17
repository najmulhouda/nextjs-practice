import { Inter } from "next/font/google";
import Footer from "./component/footer";
import Body from "./component/home";
import Navber from "./component/navber";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* Navber section */}
      <Navber />
      {/* main section started here */}
      <Body />
      {/* //footer section */}
      <Footer />
    </>
  );
}
