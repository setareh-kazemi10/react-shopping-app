import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Feature = ({item}) => {
    return (
        <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
            <div className="list-box d-flex">
                <div className="list-icon">
                    <i><FontAwesomeIcon icon={item.icon}/></i>
                </div>
                <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Feature;