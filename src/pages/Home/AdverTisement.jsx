import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const AdverTisement = ({
	videoUrl = "https://www.youtube.com/watch?v=DBLlFWYcIGQ",
	sinceYear = "Since Year 1999",
	companyName = "Fruitkha",
	title = "We are",
	descriptions = [
		"Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere.",
		
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus."
	]
}) => {
	return (
		<div className="abt-section mb-150">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="abt-bg">
							<a href={videoUrl}
							 className="video-play-btn popup-youtube"
							 target="_blank"
							 rel="noopener noreferrer"
							 ><i><FontAwesomeIcon icon={faPlay} /></i></a>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="abt-text">
							<p className="top-sub">{sinceYear}</p>
							<h2>We are <span className="orange-text">{companyName}</span></h2>
							{descriptions.map((description , index)=>(
							  <p key={index}>{description}</p>
							))}
							<NavLink to={"/about"} className="boxed-btn mt-4">know more</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdverTisement;