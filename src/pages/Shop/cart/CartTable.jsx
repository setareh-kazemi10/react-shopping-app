import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProductData } from "../../../api/ProductApi";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const CartTable = ({cart}) => {
    return (
        <div className="col-lg-8 col-md-12">
            <div className="cart-table-wrap">
                <table className="cart-table">
                    <thead className="cart-table-head">
                        <tr className="table-head-row">
                            <th className="product-remove"></th>
                            <th className="product-image">Product Image</th>
                            <th className="product-name">Name</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.items.map((item) => {
                                const productData = getProductData(item.id)
                                return (
                                    <tr className="table-body-row" key={item.id}>
                                        <td className="product-remove"><a href="#" onClick={() => cart.deleteItemFromCart(item.id)}><i ><FontAwesomeIcon icon={faWindowClose} /></i></a></td>
                                        <td className="product-image"><img src={productData.image} alt="" /></td>
                                        <td className="product-name">{productData.title}</td>
                                        <td className="product-price">{productData.price}$</td>
                                        <td className="product-quantity"><input type="number" placeholder="0" value={cart.getProductQuantity(item.id)} onChange={(e) => cart.updateQuantity(item.id, Number(e.target.value))} /></td>
                                        <td className="product-total">{item.quantity * productData.price}$</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CartTable;