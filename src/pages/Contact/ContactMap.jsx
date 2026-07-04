const ContactMap = ({
    title,
    mapUrl
}) => {
    return (
        <>
            <div className="find-location blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p> <i className="fas fa-map-marker-alt"></i> {title}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="embed-responsive embed-responsive-21by9">
                <iframe
                    title="shop-location"
                    src={mapUrl}
                    style={{ border: "none" }} className="embed-responsive-item"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
}

export default ContactMap;