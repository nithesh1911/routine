/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Header from "./header";
import Slider from "./slider";
export default function Home() {
  return (
    <div>
      <title>DAILY ROUTINE</title>
      <Header />
      <div className="pl-[23%] pt-5">
        <Slider />
      </div>
    </div>
  );
}
