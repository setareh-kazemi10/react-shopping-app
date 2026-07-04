import { Link } from "react-router-dom";

const ErrorSection = ({title ,para , textBtn}) => {
    return ( 
          <div className="full-height-section error-section">
                <div className="full-height-tablecell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="error-text">
                                    <i className="far fa-sad-cry"></i>
                                    <h1>{title}</h1>
                                    <p>{para}</p>
                                    <Link to={"/"} className="boxed-btn">{textBtn}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default ErrorSection;