import { faSearch, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Search = () => {
	return (
		<div className="search-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<span className="close-btn"><FontAwesomeIcon icon={faWindowClose} /></span>
						<div className="search-bar">
							<div className="search-bar-tablecell">
								<h3>Search For:</h3>
								<input type="text" placeholder="Keywords" />
								<button type="submit">Search <FontAwesomeIcon icon={faSearch} /></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Search;