import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShippingAddress = ({
    onClick,
    title,
    activeSection,
    description

}) => {
    return (

        <div className="card single-accordion">
            <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                    <button
                        className={`accordion-btn ${activeSection === "shipping" ? "active" : ""}`}
                        type="button"
                        onClick={() => onClick("shipping")}
                    >
                        <FontAwesomeIcon icon={faChevronCircleDown} className="accordion-icon" />
                        {title}
                    </button>
                </h5>
            </div>

            {activeSection === "shipping" && (
                <div id="collapseTwo">
                    <div className="card-body">
                        <div className="shipping-address-form">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShippingAddress;