function CategoryList({handleCategory}) {
    const categories = ['All','Food','Clothes','Furniture','Grocery','Stationery'];
    return (
        <>
            <h3>Category</h3>
            <ul>
                {/* <li></li>
                <li>Food</li>
                <li>Clothes</li>
                <li>Furniture</li>
                <li>Grocery</li>
                <li>Stationery</li> */}
                {
                    categories.map((category,index)=>(
                        <li key={index} name='category' value={category} style={{cursor:"pointer"}} onClick={handleCategory}>{category}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default CategoryList
