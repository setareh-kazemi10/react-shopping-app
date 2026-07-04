import CheckOutBtn from "./CheckOutBtn";
const CartTotals = ({cart}) => {
    return (
        <div className="col-lg-4">
            <div className="total-section">
                <table className="total-table">
                    <thead className="total-table-head">
                        <tr className="table-total-row">
                            <th>Total</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="total-data">
                            <td><strong>Subtotal: </strong></td>
                            <td>{cart.getTotalAmount()} $</td>
                        </tr>
                        <tr className="total-data">
                            <td><strong>Shipping: </strong></td>
                            <td>{cart.getShipping()} $</td>
                        </tr>

                        <tr className="total-data">
                            <td><strong>Off(coupon): </strong></td>
                            <td>{cart.discountAmount} $</td>
                        </tr>
                        <tr className="total-data">
                            <td><strong>Total: </strong></td>
                            <td>{cart.getTotal()} $</td>
                        </tr>

                    </tbody>
                </table>
                <CheckOutBtn />
            </div>
           
        </div>
    );
}

export default CartTotals;