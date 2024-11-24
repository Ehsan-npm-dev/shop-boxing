import React from "react";

import images from "./images";

import CustomSlider from "./components/custom.slider";

import "./styles.css";

export default function ImageSlider() {
  return (
    <div className=" flex items-center  rounded-md justify-center w-[25rem] md:w-[35rem] lg:w-[43rem] ">
      <CustomSlider className="">
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      
    </div>
  );
}


