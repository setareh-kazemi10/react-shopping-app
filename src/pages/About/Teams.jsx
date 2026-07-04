import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Teams = ({ data }) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                    <div className="section-title ">
                        <h3>Our <span className="orange-text">Team</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {data.map((item) => (
                    <div className="col-lg-4 col-md-6" key={item.id}>
                        <div className="single-team-item">
                            <img src={item.image} alt="" />
                            <h4>{item.name}<span>{item.job}</span></h4>
                            <ul className="social-link-team">
                                {item.social.map((socialItem, index) => (
                                    <li key={index}>
                                        <a href={socialItem.link} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={socialItem.icon} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Teams;