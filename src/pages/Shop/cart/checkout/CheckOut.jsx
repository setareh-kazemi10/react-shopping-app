import { useContext, useState } from "react";
import Copyright from "../../../../components/footer/copyright/copyright";
import Footer from "../../../../components/footer/Footer";
import Header from "../../../../components/Header/Header";
import Logo from "../../../../components/Logo/Logo";
import LogoCarousel from "../../../../components/logocarousel/LogoCarousel";
import { CartContext } from "../../../../context/CartContext";
import { getProductData } from "../../../../api/ProductApi";
import BreadcrumbHeader from "./BreadcrumbHeader";
import BillingAddress from "./BillingAddress";
import ShippingAddress from "./ShippingAddress";
import CardDetails from "./CardDetails";
import OrderSummary from "./OrderSummary";
import Loader from "../../../../components/Loader/Loader";
import Navbar from "../../../../components/Navbar/Navbar";




const CheckOut = () => {
	const cart = useContext(CartContext);
	const product = cart.items.map((item) => {
		return getProductData(item.id)
	})
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [saySomthing, setSaySomthing] = useState("");
	const [errors, setErrors] = useState({ name: "", email: "", address: "", phone: "", saySomthing: "" });
	let newErrors = { name: "", email: "", address: "", phone: "", saySomthing: "" };
	let hasError = false;
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const phonePattern = /^09\d{9}$/;

	const [activeSection, setActiveSection] = useState("billing");



	const toggleSection = (section) => {
		if (section === activeSection) {
			setActiveSection(null)
		} else {
			setActiveSection(section)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.trim() === "" || name.length <= 2) {

			newErrors.name = "Name must be at least 3 characters.";
			hasError = true;
		}
		if (!emailPattern.test(email) || email.trim() === "") {
			newErrors.email = "Please enter a valid email.";
			hasError = true;
		}
		if (address.trim() === "" || address.length > 10) {
			newErrors.address = "Please enter a valid address.";
			hasError = true;
		}
		if (phone.trim() === "" || !phonePattern.test(phone)) {
			newErrors.phone = "Please enter a valid phone."
			hasError = true
		}
		if (saySomthing.trim() === "" || saySomthing.length > 30) {
			newErrors.saySomthing = "Please enter a valid description.";
			hasError = true;
		}


		if (hasError) {
			setErrors(newErrors);
			return;

		}

	}
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

			<BreadcrumbHeader text="Fresh and Organic" title="Check Out Product" />
			<div className="checkout-section mt-150 mb-150">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="checkout-accordion-wrap">
								<div className="accordion" id="accordionExample" >
									
									<BillingAddress onClick={toggleSection}
										activeSection={activeSection}
										setActiveSection={setActiveSection}
										name={name}
										setName={setName}
										email={email}
										setEmail={setEmail}
										address={address}
										setAddress={setAddress}
										phone={phone}
										setPhone={setPhone}
										saySomthing={saySomthing}
										errors={errors}
										handleSubmit={handleSubmit}
										title="Billing Address"
									/>
									<ShippingAddress
										onClick={toggleSection}
										activeSection={activeSection}
										title="Shipping Address"
										description="Your shipping address form is here."
									/>
									<CardDetails
										onClick={toggleSection}
										activeSection={activeSection}
										title="Card Details"
										description="Your card details goes here."
									/>

								</div>
							</div>
						</div>
						<OrderSummary
							cart={cart}
							product={product}
							order="Your order Details"
							Price="Price"
							subTotal="Subtotal"
							Shipping="Shipping"
							Total="Total"
							buttonText="Place Order"

						/>
					</div>
				</div>
			</div>
			<LogoCarousel />
			<Footer />
			<Copyright />
		</>

	);
}

export default CheckOut;