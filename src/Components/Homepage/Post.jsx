import React from "react";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Vendor from "../../images/folder.png"
import Like from "../../images/like.png"
import Comment from "../../images/comment.png"
import Repost from "../../images/repost.png"

const Products = () => {
  const productsData = [{ id: 1, "category": "xyz", "description": "ShopName", "title": "ShopName", "image": Vendor }, { id: 1, "category": "xyz", "description": "ShopName", "title": "ShopName", "image": Vendor }, { id: 1, "category": "xyz", "description": "ShopName", "title": "ShopName", "image": Vendor }, { id: 1, "category": "xyz", "description": "ShopName", "title": "ShopName", "image": Vendor }, { id: 1, "category": "xyz", "description": "ShopName", "title": "ShopName", "image": Vendor }]
  return (
    <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-8 xl:gap-4 px-10">
      {productsData.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 pt-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
        >
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>
          {/* ========== Product Image Start here ============== */}
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="ProductImg"
            />
            {/* ================== Product mini drop down Start here ============ */}
            {/* <ul className="absolute w-full h-36 bg-gray-100 -bottom-[160px] group-hover:bottom-0 duration-700 flex flex-col justify-center items-end gap-2">
              <li className="productLi">
                Compare
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Cart
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi">
                View Details{" "}
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Wish List{" "}
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul> */}
            {/* ================== Product mini drop down End here ============== */}
          </div>
          {/* ========== Product Image End here ================ */}
          {/* ========== Product Info Start here =============== */}
          <div className="px-2 bg-white flex flex-col gap-1 z-10">
            <div className="px-2 flex items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ${item.price}
              </p>
            </div>
            <div className="px-2">
              <p className="text-sm">{item.description.substring(0, 100)}</p>
              <div className="text-yellow-500 flex">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p

                className=" flex flex-row items-center align-middle py-1.5 rounded-md mt-3 font-titleFont font-medium text-base duration-200"
              >
                <span className="pb-2"><img src={Like} /></span>
                <span >Like</span>
              </p>
              <div className="flex flex-row">

                <div

                  className=" flex flex-row items-center align-middle py-1.5 pr-5 rounded-md mt-3 font-titleFont font-medium text-base duration-200"
                >
                  <img src={Repost} />
                  <span >Repost</span>
                </div>
                <div

                  className=" flex flex-row items-center align-middle py-1.5  rounded-md mt-3 font-titleFont font-medium text-base duration-200"
                >
                  <img src={Comment} />
                  <span >Comment</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;