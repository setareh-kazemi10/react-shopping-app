import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getProductData } from "../../api/ProductApi";

const CartModal = ({ id, quantity }) => {
    const cart = useContext(CartContext);
    const productData = getProductData(id);
    const productQuantity = cart.getProductQuantity(id);

    return (
        <div className="row">
            <div className="col-12">
                <img src={productData.image} alt="Product" />
                <div className="item-info ms-3 flex-grow-1">
                    <h6>{productData.title}</h6>
                    <span>{productData.price * quantity}</span>
                </div>
                <div className="quantity-controls">
                    <button className="decrease-btn" onClick={() => cart.removeItemFromCart(productData.id)}>-</button>
                    <span className="quantity">{productQuantity}</span>
                    <button className="increase-btn" onClick={() => cart.addItemToCart(productData.id)}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CartModal;