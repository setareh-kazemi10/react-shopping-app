import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardDetails = ({
    onClick,
    activeSection,
    title,
    description
}) => {
    return (
        <div className="card single-accordion">
            <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                    <button
                        className={`accordion-btn ${activeSection === "card" ? "active" : ""}`}
                        type="button"
                        onClick={() => onClick("card")}
                    >
                        <FontAwesomeIcon
                            icon={faChevronCircleDown}
                            className="accordion-icon"
                        />
                        {title}

                    </button>
                </h5>
            </div>

            {activeSection === "card" && (
                <div id="collapseThree">
                    <div className="card-body">
                        <div className="card-details">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CardDetails;