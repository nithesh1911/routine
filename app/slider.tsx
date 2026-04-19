"use client";
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "image1.jpg" },
  { url: "image1.jpg" },
  { url: "image1.jpg" },
];

const slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={700}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default slider;
