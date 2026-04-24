/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Toaster } from "react-hot-toast";

import Slider from "./slider";
import Header from "./header";

export default function Home() {
  return (
    <div className="lg:w-full lg:h-full sm:w-screen sm:h-screen md:w-screen md:h-screen">
      <title>DAILY ROUTINE</title>
      <Header />
      <div className="bg-[#3F51B5] justify-between h-screen">
        <Slider />
      </div>
    </div>
  );
}
