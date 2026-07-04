import { Link } from "react-router-dom";

const OrderSummary = ({
    cart,
    product,
    order,
    price,
    subTotal,
    Shipping,
    Total,
    buttonText

}) => {
    return (
        <div className="col-lg-4">
            <div className="order-details-wrap">
                <table className="order-details">
                    <thead>
                        <tr>
                            <th>{order}</th>
                            <th>{price}</th>
                        </tr>
                    </thead>
                    <tbody className="order-details-body">
                        {product?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price * cart.getProductQuantity(item.id)}</td>
                            </tr>
                        ))}

                    </tbody>
                    <tbody className="checkout-details">
                        <tr>
                            <td>{subTotal}</td>
                            <td>${cart.getTotalAmount()}</td>
                        </tr>
                        <tr>
                            <td>{Shipping}</td>
                            <td>${cart.getShipping()}</td>
                        </tr>
                        <tr>
                            <td>{Total}</td>
                            <td>${cart.getTotal()}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to={""} className="boxed-btn">{buttonText}</Link>
            </div>
        </div>
    );
}

export default OrderSummary;