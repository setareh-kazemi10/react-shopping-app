import { Link, useParams } from "react-router-dom";
import Copyright from "../../components/footer/copyright/Copyright";
import Footer from "../../components/footer/Footer";
import LogoCarousel from "../../components/logocarousel/LogoCarousel";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { getProductData, productList } from "../../api/ProductApi";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";

const Product = () => {
    const { productId } = useParams();
    const cart = useContext(CartContext);
    const productData = getProductData(productId);
    const [quantity, setQuantity] = useState(1);
    const productLists = productList

    return (
        <>
            <Loader />
            <Navbar />
            <div className="search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="close-btn"><i className="fas fa-window-close"></i></span>
                            <div className="search-bar">
                                <div className="search-bar-tablecell">
                                    <h3>Search For:</h3>
                                    <input type="text" placeholder="Keywords" />
                                    <button type="submit">Search <i className="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>See more Details</p>
                                <h1>Single Product</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-product mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="single-product-img">
                                <img src={productData.image} alt={productData.title} />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="single-product-content">
                                <h3>{productData.title}</h3>
                                <p className="single-product-pricing"><span>Per Kg</span> ${productData.price}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
                                <div className="single-product-form">
                                    <form action="index.html">
                                        <input type="number" placeholder="0" value={quantity} onChange={(e) => setQuantity(Number((e.target.value)))} />
                                    </form>
                                    <a className="cart-btn" onClick={() => cart.addItemToCart(productId, quantity)}><i className="fas fa-shopping-cart" ></i> Add to Cart</a>
                                    <p><strong>Categories: </strong>Fruits, Organic</p>
                                </div>
                                <h4>Share:</h4>
                                <ul className="product-share">
                                    <li><a href=""><i><FontAwesomeIcon icon={faFacebook} /></i></a></li>
                                    <li><a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                                    <li><a href=""><i><FontAwesomeIcon icon={faGoogle} /></i></a></li>
                                    <li><a href=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="more-products mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Related</span> Products</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            productLists.filter((item) => item.category === productData.category && item.id !== productData.id)
                                .slice(0, 3)
                                .map((elem) => (
                                    <div className="col-lg-4 col-md-6 text-center">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <Link to={`/product/${elem.id}`}><img src={elem.image} alt="" /></Link>
                                            </div>
                                            <h3>{elem.title}</h3>
                                            <p className="product-price"><span>Per Kg</span> {elem.price}$ </p>
                                            < a className="cart-btn" onClick={() => cart.addItemToCart(elem.id, 1)}><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                                        </div>
                                    </div>
                                ))
                        }

                    </div>
                </div>
            </div>
            <LogoCarousel />
            <Footer />
            <Copyright />
        </>
    );
}

export default Product;