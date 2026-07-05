import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Copyright from "../../../components/footer/copyright/Copyright";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/Header/Header";
import Logo from "../../../components/Logo/Logo";

import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../../context/CartContext";
import { useState } from "react";
import { toast } from "react-toastify";
import LogoCarousel from "../../../components/logocarousel/LogoCarousel";
import Breadcrumb from "./BreadCrumb";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";
import CartCoupon from "./CartCoupon";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import Navbar from "../../../components/Navbar/Navbar";

const Cart = () => {
	const cart = useContext(CartContext);
	const [couponCode, setcouponCode] = useState("");
	const [submit, setSubmit] = useState(false);

	const handlecoupon = (e) => {
		e.preventDefault();
		setSubmit(true)
		const code = couponCode.trim().toUpperCase();
		if (code === "") return;
		cart.applyCoupon(code);

	}
	useEffect(() => {
		if (!submit) return
		if (cart.discountAmount > 0) {
			toast.success("Coupon applied successfully ✅");

		} else {
			toast.error("Invalid coupon code ❌");

		}
		setcouponCode("")
	}, [cart.discountAmount])

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
						<Breadcrumb para="Fresh and Organic" heading="Cart" />
					</div>
				</div>
			</div>

			{
				cart.items.length > 0 ? (
					<div className="cart-section mt-150 mb-150">
						<div className="container">
							<div className="row">
								<CartTable cart={cart} />
								<CartTotals cart={cart} />
								<CartCoupon
									cart={cart}
									handlecoupon={handlecoupon}
									setcouponCode={setcouponCode}
									couponCode={couponCode}
								/>
							</div>
						</div>
					</div>
				) :
					<section className="d-flex justify-content-center align-items-center p-5">
						<h2 className="text-danger ">Your cart is empty</h2>
						<br />
						<Link to={"/shop"} className="btn btn-warning p-2 " style={{ marginLeft: "20px", backgroundColor: "#F28123", fontWeight: "700" }}>
							Go to Shop
						</Link>
					</section>
			}
			<LogoCarousel />
			<Footer />
			<Copyright />
		</>
	);
}

export default Cart;