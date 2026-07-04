import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Header.module.css';
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartModal from "../cartmodal/CartModal";
const Header = () => {
    const cart = useContext(CartContext);
    const totalQuantity = cart.items.reduce((sum, item) => {
        return sum + item.quantity;
    }, 0);
    const totalProduct = cart.getTotalAmount();
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    return (
        <ul className={`${styles.mainMenu} `} >
            <li className={`${styles.currentListItem} ${styles.menuItem} ${styles.menuItemParent}`} ><NavLink to={"/"} className={styles.menuLink}>Home</NavLink>
            </li>
            <li className={`${styles.menuItem} ${styles.menuItemParent}`}><NavLink to={"/about"} className={styles.menuLink}>About</NavLink></li>
            <li className={`${styles.menuItem} ${styles.menuItemParent}`}><a href="#" onClick={(e) => e.preventDefault()} className={styles.menuLink}>Pages</a>
                <ul className={`${styles.subMenu} ${styles.subMenu}`}>
                    <li className={`${styles.menuItem} ${styles.subMenuItem}`}><NavLink to={"/notFound"} className={`${styles.menuLink} ${styles.subMenuLink}`}>404 page </NavLink></li>
                    <li className={`${styles.menuItem} ${styles.subMenuItem}`}><NavLink to={"/about"} className={`${styles.menuLink} ${styles.subMenuLink}`}>About</NavLink></li>
                    <li className={`${styles.menuItem} ${styles.subMenuItem}`}><NavLink to={"/shop/cart"} className={`${styles.menuLink} ${styles.subMenuLink}`}>Cart</NavLink></li>
                    <li className={`${styles.menuItem} ${styles.subMenuItem}`}><NavLink to={"/shop/cart/checkout"} className={`${styles.menuLink} ${styles.subMenuLink}`}>Check Out</NavLink></li>
                    <li className={`${styles.menuItem} ${styles.subMenuItem}`}><NavLink to={"/contact"} className={`${styles.menuLink} ${styles.subMenuLink}`}>Contact</NavLink></li>
                    <li className={`${styles.menuItem} ${styles.subMenuItem}`}><NavLink to={"/news"} className={`${styles.menuLink} ${styles.subMenuLink}`}>News</NavLink></li>
                    <li className={`${styles.menuItem} ${styles.subMenuItem}`}><NavLink to={"/shop"} className={`${styles.menuLink} ${styles.subMenuLink}`}>Shop</NavLink></li>
                </ul>
            </li>
            <li className={`${styles.menuItem} ${styles.menuItemParent}`}><NavLink to={"/news"} className={styles.menuLink}>News</NavLink>
            </li>
            <li className={`${styles.menuItem} ${styles.menuItemParent}`}><NavLink to={"/contact"} className={styles.menuLink}>Contact</NavLink></li>
            <li className={`${styles.menuItem} ${styles.menuItemParent}`}><a href="#" onClick={(e) => e.preventDefault()} className={styles.menuLink}>Shop</a>
                <ul className={`${styles.subMenu} ${styles.subMenu}`}>
                    <li className={`${styles.menuItem} ${styles.subMenuItem}`}><NavLink to={"/shop"} className={`${styles.menuLink} ${styles.subMenuLink}`}>Shop</NavLink></li>
                    <li className={`${styles.menuItem} ${styles.subMenuItem}`}><NavLink to={"/shop/cart/checkout"} className={`${styles.menuLink} ${styles.subMenuLink}`}>Check Out</NavLink></li>
                    {/* <li className={`${styles.menuItem} ${styles.subMenuItem}`}><NavLink to={"/product"} className={`${styles.menuLink} ${styles.subMenuLink}`}>Single Product</NavLink></li> */}
                    <li className={`${styles.menuItem} ${styles.subMenuItem}`}><NavLink to={"/shop/cart"} className={`${styles.menuLink} ${styles.subMenuLink}`}>Cart</NavLink></li>
                </ul>
            </li>
            <li>
                <div className={styles.headerIcons}>
                    <a href="#" onClick={handleShowModal}><i><FontAwesomeIcon icon={faShoppingCart} /></i>{cart.items.length > 0 && totalQuantity}</a>
                    <a href="#"><FontAwesomeIcon icon={faSearch} /></a>
                    {
                        showModal && (
                            <div className="cart-overlay">
                                <div className="cart-modal">
                                    <div className="cart-header">
                                        <h4>Shopping Cart</h4>
                                        <button className="close-btn" onClick={handleCloseModal}>×</button>
                                    </div>
                                    <div className="cart-body">
                                        {
                                            totalQuantity > 0 ?
                                                <div className="cart-item ">
                                                    {
                                                        cart.items.map((item) => (

                                                            <CartModal key={item.id} id={item.id} quantity={item.quantity} />
                                                        ))
                                                    }
                                                </div>

                                                : <div>Empty Bascket</div>
                                        }
                                    </div>
                                    <div className="cart-footer">
                                        <div className="total">
                                            <span>Total:</span>
                                            <strong>{totalProduct}$</strong>
                                        </div>
                                        <Link to={"/shop/cart"} className="cart-btn">View Cart</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </li>
        </ul>
    );
}
export default Header;