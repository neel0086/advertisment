import React from "react";
import "./CategoryList.css"
function CategoryList({ handleCategory, searchCriteria }) {
    const categories = [
        "All",
        "Food",
        "Clothes",
        "Furniture",
        "Grocery",
        "Stationery",
        "All",
        "Food",
        "Clothes",
        "Furniture",
        "Grocery",
        "Stationery",
        "All",
        "Food",
        "Clothes",
        "Furniture",
        "Grocery",
        "Stationery",
        "All",
        "Food",
        "Clothes",
        "Furniture",
        "Grocery",
        "Stationery",
        
        
        
        
    ];
    const smoothScroll = (e) =>{
        
    }
    return (
        <>
            <div className="s-category w-full flex">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="c-box cursor-pointer text-black flex items-center justify-center "

                        onClick={() => {
                            handleCategory("category", category);
                        }}
                    >
                        {category}
                    </div>
                ))}
            </div>
        </>
    );
}

export default CategoryList;
