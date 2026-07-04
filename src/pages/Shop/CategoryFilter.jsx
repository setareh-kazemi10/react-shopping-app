const CategoryFilter = ({ productCategory, handleCategory, selectCategory }) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="product-filters d-flex justify-content-center">
                    {productCategory.map((item) => (
                        <button onClick={() => handleCategory(item)} key={item} className={`${selectCategory === item ? "active" : ""}`}>{item}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryFilter;