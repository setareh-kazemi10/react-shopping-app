import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const Products = ({ product }) => {
	const cart = useContext(CartContext);
	const productQuantity = cart.getProductQuantity(product.id)
	return (
		<div className="col-lg-4 col-md-6 text-center">
			<div className="single-product-item">
				<div className="product-image">
					<Link to={`/product/${product.id}`}><img src={product.image} alt="" /></Link>
				</div>
				<h3>{product.title}</h3>
				<p className="product-price"><span>Per Kg</span> {product.price}$ </p>
				
				{productQuantity > 0 ?
					<div className="quantity-ui d-flex justify-content-center align-items-center gap-3 mt-3">
						<button className="btn-qty" onClick={() => cart.removeItemFromCart(product.id)}>−</button>
						<span className="qty-number">{productQuantity}</span>
						<button className="btn-qty" onClick={() => cart.addItemToCart(product.id)}>+</button>
					</div>

					: <Link className="cart-btn" onClick={() => cart.addItemToCart(product.id)}><i ><FontAwesomeIcon icon={faShoppingCart} /></i> Add to Cart</Link>
				}
			</div>
		</div>
	);
}

export default Products;