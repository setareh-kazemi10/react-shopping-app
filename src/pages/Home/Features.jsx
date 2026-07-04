import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping ,faPhoneVolume , faSync } from "@fortawesome/free-solid-svg-icons";
const Features = () => {
	const featuresData = [
    { icon: faCartShopping, title: "Free Shipping", desc: "When order over $75" },
    { icon: faPhoneVolume, title: "24/7 Support", desc: "Get support all day" },
    { icon: faSync, title: "Refund", desc: "Get refund within 3 days!" }
];
    return ( 
        <div className="list-section pt-80 pb-80">
				<div className="container">
					<div className="row">
						{featuresData.map((feature , index)=>(
						<div className="col-lg-4 col-md-6 mb-4 mb-lg-0" key={index}>
							<div className="list-box d-flex align-items-center">
								<div className="list-icon">
									<i><FontAwesomeIcon icon={feature.icon} /></i>
								</div>
								<div className="content">
									<h3>{feature.title}</h3>
									<p>{feature.desc}</p>
								</div>
							</div>
						</div>
						))}
					</div>

				</div>
			</div>
     );
}
 
export default Features;