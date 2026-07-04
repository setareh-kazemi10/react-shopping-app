import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { newsList } from "../../api/NewsApi";
const LatestNews = () => {

	return (
		<div className="latest-news pt-150 pb-150">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 text-center">
						<div className="section-title">
							<h3><span className="orange-text">Our</span> News</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
						</div>
					</div>
				</div>
				<div className="row">
					{
						newsList.slice(0, 3).map((news, index) => (
							<div className="col-lg-4 col-md-6" key={index}>
								<div className="single-latest-news">
									<Link href="single-news.html"><img src={news.image} alt="" /></Link>
									<div className="news-text-box">
										<h3><Link to={`/singlenews/${news.id}`}>{news.title}</Link></h3>
										<p className="blog-meta">
											<span className="author"><i><FontAwesomeIcon icon={faUser} /></i> {news.author}</span>
											<span className="date"><i><FontAwesomeIcon icon={faCalendar} /></i> {news.date}</span>
										</p>
										<p className="excerpt">{news.excerpt}.</p>
										<Link to={`/singlenews/${news.id}`} className="read-more-btn">read more <i><FontAwesomeIcon icon={faAngleRight} /></i></Link>
									</div>
								</div>
							</div>
						))
					}
				</div>
				<div className="row">
					<div className="col-lg-12 text-center">
						<NavLink to={"/news"} className="boxed-btn">More News</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LatestNews;