import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BillingAddress = ({
    onClick,
    activeSection,
    setName,
    setEmail,
    setAddress,
    setPhone,
    setSaySomthing,
    errors,
    title,
    handleSubmit
}) => {
    return (
        <div className="card single-accordion">
            <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <button
                        className={`accordion-btn ${activeSection === "billing" ? "active" : ""}`}
                        type="button"
                        onClick={() => onClick("billing")}
                    >
                        <FontAwesomeIcon icon={faChevronCircleDown} className="accordion-icon" />
                        {title}

                    </button>
                </h5>
            </div>

            {activeSection === "billing" && (
                <div id="collapseOne">
                    <div className="card-body">
                        <div className="billing-address-form">
                            <form onSubmit={handleSubmit}>
                                <p><input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /></p>
                                {errors.name && <h6 className="text-danger">{errors.name}</h6>}

                                <p><input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /></p>
                                {errors.email && <h6 className="text-danger">{errors.email}</h6>}

                                <p><input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} /></p>
                                {errors.address && <h6 className="text-danger">{errors.address}</h6>}

                                <p><input type="tel" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} /></p>
                                {errors.phone && <h6 className="text-danger">{errors.phone}</h6>}

                                <p><textarea name="bill" id="bill" cols="30" rows="10" placeholder="Say Something" onChange={(e) => setSaySomthing(e.target.value)}></textarea></p>
                                {errors.saySomthing && <h6 className="text-danger">{errors.saySomthing}</h6>}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BillingAddress;