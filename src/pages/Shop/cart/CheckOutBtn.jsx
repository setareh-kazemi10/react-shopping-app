import { Link } from "react-router-dom";

const CheckOutBtn = () => {
    return (
        <div className="cart-buttons">
            <Link to={"/shop/cart/checkout"} className="boxed-btn black">Check Out</Link>
        </div>
    );
}

export default CheckOutBtn;