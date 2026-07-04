import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { Link } from "react-router-dom";
import { getProductData, productList } from "../../api/ProductApi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CountDown = ({ day, hours, minute, second }) => {
    const cart = useContext(CartContext);
    const applyStrawberryOffer = ()=>{
      const strawberry = productList.find((item)=>getProductData(item.id).title === "Strwaberry")
      if(strawberry){
        cart.addItemToCart(strawberry.id)
      }
          
    }
    
    return (
        <section className="cart-banner pt-100 pb-100">
            <div className="container">
                <div className="row clearfix">
                    <div className="image-column col-lg-6">
                        <div className="image">
                            <div className="price-box">
                                <div className="inner-price">
                                    <span className="price">
                                        <strong>30%</strong> <br /> off per kg
                                    </span>
                                </div>
                            </div>
                            <img src="image/a.jpg" alt="" />
                        </div>
                    </div>
                    <div className="content-column col-lg-6">
                        <h3><span className="orange-text">Deal</span> of the month</h3>
                        <h4>Hikan Strwaberry</h4>
                        <div className="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</div>
                        <div className="time-counter">
                            <div className="time-countdown clearfix" data-countdown="2020/2/01">
                                <div className="counter-column">
                                    <div className="inner">
                                        <span className="count" >{day}</span>Days</div></div>
                                <div className="counter-column">
                                    <div className="inner"><span className="count">{hours}</span>Hours</div></div>
                                <div className="counter-column">
                                    <div className="inner">
                                        <span className="count">{minute}</span>Mins</div></div>
                                <div className="counter-column">
                                    <div className="inner"><span className="count">{second}</span>Secs</div>
                                </div>
                            </div>
                        </div>
                        <Link to={"/shop/cart"} className="cart-btn mt-3" onClick={applyStrawberryOffer}><i><FontAwesomeIcon icon={faShoppingCart} /></i> Add to Cart</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountDown;