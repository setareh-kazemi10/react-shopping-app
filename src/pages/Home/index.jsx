import LogoCarousel from "../../components/logocarousel/LogoCarousel";
import Footer from "../../components/footer/Footer";
import Copyright from "../../components/footer/copyright/Copyright";
import { useEffect, useState } from "react";
import Search from "./Search";
import Hero from "./Hero";
import Features from "./Features";
import ProductTitle from "./ProductTitle";
import CountDown from "./CountDown";
import AdverTisement from "./AdverTisement";
import ShopBanner from "./ShopBanner";
import LatestNews from "./LatestNews";
import { productList } from "../../api/ProductApi";
import Products from "./Products";
import Avatar from "./Avatar";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";

const Index = () => {

	const [day, setDay] = useState(0);
	const [hours, setHours] = useState(0);
	const [minute, setMinute] = useState(0);
	const [second, setSecond] = useState(0);

	const datePast = new Date("2026-05-26T12:01");
	useEffect(() => {
		let interVal = setInterval(() => {
			const date = new Date();
			const secondDate = 1000;
			const minuteDate = 60 * secondDate;
			const hoursDate = 60 * minuteDate;
			const dayDate = hoursDate * 24;

			const diffDate = datePast - date;
			if (diffDate <= 0) {
				setDay(0);
				setHours(0)
				setMinute(0);
				setSecond(0)
				clearInterval(interVal)
			} else {
				const newDay = Math.floor(diffDate / dayDate);
				const newHours = Math.floor((diffDate % dayDate) / hoursDate)
				const newMinute = Math.floor((diffDate % hoursDate) / minuteDate);
				const newSecond = Math.floor((diffDate % minuteDate) / secondDate);
				setDay(newDay);
				setHours(newHours);
				setMinute(newMinute);
				setSecond(newSecond);
			}

		}, 1000)
		return () => clearInterval(interVal)

	}, [])

	return (
		<div >
			<Loader />
			<Navbar />
			<Search />
			<Hero />
			<Features />
			<div className="product-section mt-150 mb-150">
				<div className="container">
					<div className="row">
						<ProductTitle />
					</div>
					<div className="row">
						{productList.map((item) => (
							<Products product={item} key={item.id} />
						))}

					</div>
				</div>
				<CountDown day={day} hours={hours} minute={minute} second={second} />
				<div className="testimonail-section mt-150 mb-150">
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

				<AdverTisement />
				<ShopBanner />
				<LatestNews />
				<LogoCarousel />
				<Footer />
				<Copyright />

			</div>
		</div>
	);
}
export default Index

