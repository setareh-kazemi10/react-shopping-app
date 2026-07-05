import Copyright from "../../components/footer/copyright/Copyright";
import Footer from "../../components/footer/Footer";
import LogoCarousel from "../../components/logocarousel/LogoCarousel";
import Avatar from "../Home/Avatar";
import { faShippingFast, faMoneyBillAlt, faBriefcase, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Feature from "./Feature";
import ShopBanner from "./ShopBanner";
import Teams from "./Teams";
import Breadcrumb from "./Breadcrumb";
import Searchbar from "./Searchbar";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
	const features = [
		{ title: "Home Delivery", desc: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.", icon: faShippingFast },
		{ title: "Best Price", desc: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.", icon: faMoneyBillAlt },
		{ title: "Custom Box", desc: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.", icon: faBriefcase },
		{ title: "Quick Refund", desc: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.", icon: faSyncAlt }
	];

	const teams = [
		{
			id: 1, name: "Jimmy Doe ", job: "Farmer", image: "/image/team/team-1.jpg",
			social: [
				{ icon: faFacebook, link: "https://facebook.com" },
				{ icon: faTwitter, link: "https://twitter.com" },
				{ icon: faInstagram, link: "https://instagram.com" }
			]
		},

		{
			id: 2, name: "Marry Doe  ", job: "Farmer", image: "/image/team/team-2.jpg",
			social: [
				{ icon: faFacebook, link: "https://facebook.com" },
				{ icon: faTwitter, link: "https://twitter.com" },
				{ icon: faInstagram, link: "https://instagram.com" },
			]
		},
		{
			id: 3, name: "Simon Joe  ", job: "Farmer", image: "/image/team/team-3.jpg",
			social: [
				{ icon: faFacebook, link: "https://facebook.com" },
				{ icon: faTwitter, link: "https://twitter.com" },
				{ icon: faInstagram, link: "https://instagram.com" }
			]
		}
	]

	const shopBanner =
	{
		heading: "December sale is on!",
		subHeading: "with big",
		discount: "Discount...",
		badgeText: "Sale!",
		UpTo: "Upto",
		discountPercent: "50%",
		off: "off",
	}

	return (
		<>
			<Loader />
			<Navbar />
			<Searchbar />
			<Breadcrumb />

			<div className="feature-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="featured-text">
								<h2 className="pb-3">Why <span className="orange-text">Fruitkha</span></h2>
								<div className="row">
									{
										features.map((item, index) => (
											<Feature item={item} key={index} />
										))
									}

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ShopBanner data={shopBanner} />
			<div className="mt-150">
				<div className="container">
					<Teams data={teams} />
				</div>
			</div>
			<div className="testimonail-section mt-80 mb-150">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 offset-lg-1 text-center">
							<div className="testimonial-sliders">
								<Avatar />
							</div>
						</div>
					</div>
				</div>
			</div>
			<LogoCarousel />
			<Footer />
			<Copyright />
		</>
	);
}
export default About;