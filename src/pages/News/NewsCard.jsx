import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const singleNewsPath = `/singlenews/${news.id}`
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-latest-news">
                <Link to={singleNewsPath}><img src={news.image} className="latest-news-bg" alt={news.title}/></Link>
                <div className="news-text-box">
                    <h3><Link to={singleNewsPath}>{news.title}.</Link></h3>
                    <p className="blog-meta">
                        <span className="author"><i className="fas fa-user"></i> {news.author}</span>
                        <span className="date"><i className="fas fa-calendar"></i> {news.date}</span>
                    </p>
                    <p className="excerpt">{news.excerpt}.</p>
                    <Link to={singleNewsPath} className="read-more-btn">read more <i><FontAwesomeIcon icon={faAngleRight} /></i></Link>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;