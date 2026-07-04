import { NavLink } from "react-router-dom";

const ShopBanner = ({
	title = "December sale is on!",
	highlightText = "Discount...",
	discount = 50,
}) => {
	return (
		<section className="shop-banner">
			<div className="container">
				<h3>{title} <br /> with big <span className="orange-text">{highlightText}</span></h3>
				<div className="sale-percent"><span>Sale! <br /> Upto</span>{discount}% <span>off</span></div>
				<NavLink to={"/shop"} className="cart-btn btn-lg">Shop Now</NavLink>
			</div>
		</section>
	);
}

export default ShopBanner;