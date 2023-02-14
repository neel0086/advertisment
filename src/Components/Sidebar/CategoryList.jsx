import React, { useEffect } from "react";
import "./CategoryList.css"
import { print_city, print_state } from "./LocationList";
import Food from "../../images/food.png";
import Furniture from "../../images/furniture.png";
import Clothes from "../../images/clothes.png";
import Groceries from "../../images/groceries.png";
import Stationery from "../../images/stationery.png";
import UploadBlog from "../Uploadblog/UploadBlog";

function CategoryList({ handleCategory, searchCriteria }) {
    const categories = [
        { "name": Food, title: "food" },
        { "name": Furniture, title: "Furniture" },
        { "name": Clothes, title: "Clothes" },
        { "name": Groceries, title: "Grocery" },
        { "name": Stationery, title: "Stationery" },
    ];


    useEffect(() => {
        print_state("sts");
    }, [])


    return (
        <>
            <div className="flex ml-7 font-titleFont mt-5 flex-col ">
                <h2 className="text-2xl font-titleFont font-bold">Whats your choice today?</h2>
                <p className="invert-60">Choose from our wide range of suggestions verified by people like you</p>
                <p className="invert-60 pl-5">OR</p>
                <div className="flex flex-row">
                    <span className="invert-60">
                        Give some time and help someone to grow
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <div className="cursor-pointer font-semibold"><UploadBlog /></div>
                </div>
            </div>

            <div className="flex ml-7 font-titleFont mt-5 flex-col ">
                <h2 className="text-lg font-titleFont font-medium">Select Category</h2>
            </div>



            <div className="s-category w-full flex">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="w-full c-box cursor-pointer text-black flex flex-col items-center justify-center "

                        onClick={() => {
                            handleCategory("category", category);
                        }}
                    >
                        <img src={category["name"]} className="flex object-fill p-2" />
                        <p className="font-audiowide">{category["title"]}</p>
                    </div>
                ))}
            </div>
            <div className="flex ml-7 font-titleFont mt-5 flex-row ">
                <select onChange={(e) => { console.log(e.target.id) }} id="sts" name="stt" className="form-control w-40 mr-2" required></select>
                <select id="state" className="form-control w-40" required></select>
            </div>
            <div className="flex w-full font-titleFont mt-5 flex-row justify-between px-10">
                <p>2223 options available</p>
                <div className="flex flex-row">
                    <div className="c-box-sort cursor-pointer text-black flex items-center justify-center">
                        Most Popular
                    </div>
                    <div className="c-box-sort cursor-pointer text-black flex items-center justify-center">
                        Latest
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryList;
