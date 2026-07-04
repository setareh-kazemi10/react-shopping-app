const Searchbar = ({title="Search For:" , btn="Search"}) => {
    return ( 
        <div className="search-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<span className="close-btn"><i className="fas fa-window-close"></i></span>
							<div className="search-bar">
								<div className="search-bar-tablecell">
									<h3>{title}</h3>
									<input type="text" placeholder="Keywords" />
									<button type="submit">{btn} <i className="fas fa-search"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
     );
}
 
export default Searchbar;