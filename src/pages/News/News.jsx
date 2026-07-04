import { newsList } from "../../api/NewsApi";
import Copyright from "../../components/footer/copyright/copyright";
import Footer from "../../components/footer/Footer";
import LogoCarousel from "../../components/logocarousel/LogoCarousel";
import { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import LatestNews from "./LatestNews";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";

const News = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const itemPerPage = 3;
	const totalPage = Math.ceil((newsList.length) / itemPerPage);
	const indexOfLastItem = itemPerPage * currentPage;
	const indexOfFirstItem = indexOfLastItem - itemPerPage
	const newsListPage = newsList.slice(indexOfFirstItem, indexOfLastItem);

	const handlePrev = () => {
		currentPage > 1 && setCurrentPage((prev) => prev - 1)
	}
	const handleNext = () => {
		currentPage < totalPage && setCurrentPage(prev => prev + 1);
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

			<BreadCrumb
				para="Organic Information"
				title="News Article"
			/>

			<div className="latest-news mt-150 mb-150">
				<div className="container">
					<LatestNews
						newsListPage={newsListPage}
					/>
					<Pagination
						currentPage={currentPage}
						handlePrev={handlePrev}
						totalPage={totalPage}
						setCurrentPage={setCurrentPage}
						handleNext={handleNext}
					/>
				</div>
			</div>

			<LogoCarousel />
			<Footer />
			<Copyright />
		</>
	);
}

export default News;