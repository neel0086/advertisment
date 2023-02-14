import React from "react";

import Vendor from "../../images/vendor1.png"

import PostUi from './PostUi'

const Products = () => {
  const productsData = [{ id: 1, "category": "xyz", "description": "Shop1", "title": "Shop1", "image": Vendor }, { id: 2, "category": "xyz", "description": "Shop2", "title": "Shop2", "image": Vendor }, { id: 3, "category": "xyz", "description": "Shop3", "title": "Shop3", "image": Vendor }, { id: 4, "category": "xyz", "description": "ShopName", "title": "ShopName", "image": Vendor }, { id: 5, "category": "xyz", "description": "ShopName", "title": "ShopName", "image": Vendor }, { id: 6, "category": "xyz", "description": "ShopName", "title": "Shop5", "image": Vendor }]
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-8 xl:gap-4 px-4">
      
      {productsData.map((item) => (
        
          <PostUi item={item}/>
      ))}
    </div>
  );
};

export default Products;