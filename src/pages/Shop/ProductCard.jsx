import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const ProductCard = ({ product, cart }) => {
    return (
        <div className="col-lg-4 col-md-6 text-center strawberry" key={product.id}>
            <div className="single-product-item">
                <div className="product-image">
                    <Link to={`/product/${product.id}`}><img src={product.image} alt={product.title} /></Link>
                </div>
                <h3>{product.title}</h3>
                <p className="product-price"><span>Per Kg</span> {product.price}$ </p>

                {cart.getProductQuantity(product.id) > 0 ?
                    <div className="quantity-ui d-flex justify-content-center align-items-center gap-3 mt-3">
                        <button className="btn-qty" onClick={() => cart.removeItemFromCart(product.id)}>−</button>
                        <span className="qty-number">{cart.getProductQuantity(product.id)}</span>
                        <button className="btn-qty" onClick={() => cart.addItemToCart(product.id)}>+</button>
                    </div>
                    : <Link className="cart-btn" onClick={() => cart.addItemToCart(product.id)}><i ><FontAwesomeIcon icon={faShoppingCart} /></i> Add to Cart</Link>
                }
            </div>
        </div>
    );
}

export default ProductCard;