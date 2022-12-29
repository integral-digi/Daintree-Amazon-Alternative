import React from "react";
import { category } from "../config/constants";

const Category = () => {
  return (
    <div className="md:container mx-auto pl-9 pr-8 w-full overflow-hidden mt-[100px]">
      <h1 className="md:text-[56px] text-4xl text-center md:leading-[67px] text-[#1E1E1E] mb-6 font-black">
        Shop by Category
      </h1>
      <p className="text-[#53616E] text-2xl text-center font-bold">
        Browse through our product catalogue and get the best value for your
        money
      </p>

      <div className="flex md:justify-between justify-center items-center mt-[100px] flex-wrap">
        {category?.map(({ categoryImage, title }, index) => (
          <div className="relative mb-5" key={index}>
            <h1 className="text-xl text-white absolute top-5 w-full text-center font-black">
              {title}
            </h1>
            <div className="w-[300px] h-[360px]">
              <img src={categoryImage} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
