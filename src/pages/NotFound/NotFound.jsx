
import Copyright from "../../components/footer/copyright/copyright";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/Loader/Loader";
import LogoCarousel from "../../components/logocarousel/LogoCarousel";
import Navbar from "../../components/Navbar/Navbar";
import Breadcrumb from "./Breadcrumb";
import Tablecell from "./ErrorSection";

const NotFound = () => {
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

            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <Breadcrumb
                                para="Fresh and Organic"
                                heading="404 - Not Found"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Tablecell
                title="Oops! Not Found."
                para="The page you requested for is not found."
                textBtn="Back to Home"
            />
            <LogoCarousel />
            <Footer />
            <Copyright />

        </>
    );
}

export default NotFound;