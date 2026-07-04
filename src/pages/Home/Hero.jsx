import { NavLink } from "react-router-dom";

const Hero = ({
	subtitle = "Fresh & Organic",
	title = "Delicious Seasonal Fruits",
	primaryBtnText = "Fruit Collection",
	secondaryBtnText = "Contact Us"
}) => {
	return (
		<div className="hero-area hero-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-9 offset-lg-2 text-center">
						<div className="hero-text">
							<div className="hero-text-tablecell">
								<p className="subtitle">{subtitle}</p>
								<h1>{title}</h1>
								<div className="hero-btns">
									<NavLink to={"/shop"} className="boxed-btn">{primaryBtnText}</NavLink>
									<NavLink to={"/contact"} className="bordered-btn">{secondaryBtnText}</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;