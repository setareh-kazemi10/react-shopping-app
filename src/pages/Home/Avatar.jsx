import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Avatar = () => {
    const AvatarList = [
        { id: 1, name: "Saira Hakim", role: "Local shop owner", text: " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ", img: "/image/avaters/avatar1.png" },

        { id: 2, name: "David Niph", role: "Local shop owner", text: " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ", img: "/image/avaters/avatar2.png" },

        { id: 3, name: "Jacob Sikim", role: "Local shop owner", text: " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ", img: "/image/avaters/avatar3.png" }
    ];

    const [show, setShow] = useState(0);
    const AvaterLenght = AvatarList.length;
    useEffect(() => {
        const interval = setInterval(() => {
            setShow(prev => {
                return prev + 1 >= AvaterLenght ? 0 : prev + 1
            })

        }, 3000)
        return (() => clearInterval(interval))
    }, [AvaterLenght]);

    const current = AvatarList[show];

    return (
        <div className="single-testimonial-slider" key={show}>
            <div className="client-avater">
                <img src={current.img} alt={current.name}  />
            </div>
            <div className="client-meta">
                <h3>{current.name} <span>{current.role}</span></h3>
                <p className="testimonial-body">
                    {current.text}
                </p>
                <div className="last-icon">
                    <i><FontAwesomeIcon icon={faQuoteRight} /></i>
                </div>
            </div>

        </div>
    );
}

export default Avatar;