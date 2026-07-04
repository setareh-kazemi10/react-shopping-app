import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactInfo = ({
    contactInfoList,
}) => {
    return (
        <div className="col-lg-4">
            <div className="contact-form-wrap">
                <div className="contact-form-box">
                    {
                        contactInfoList.map((item, index) => (
                            <div key={index}>
                                <h4><i><FontAwesomeIcon icon={item.icon} /></i>{item.title}</h4>
                                {item.texts.map((elem, index) => (
                                    <p key={index}>{elem}</p >
                                ))}

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;