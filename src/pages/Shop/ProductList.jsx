import ProductCard from "./ProductCard";
const ProductList = ({ currentItems, cart }) => {
    return (
        <div className="row product-lists">
            {currentItems.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    cart={cart}
                />
            ))}
        </div>
    );
}

export default ProductList;