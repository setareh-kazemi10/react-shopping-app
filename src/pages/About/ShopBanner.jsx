import { Link } from "react-router-dom";
const ShopBanner = ({data}) => {
    return (
       <section className="shop-banner">
        <div className="container">
            <h3>{data.heading} <br /> {data.subHeading} <span className="orange-text">{data.discount}</span></h3>
            <div className="sale-percent"><span>{data.badgeText} <br /> {data.UpTo}</span>{data.discountPercent} <span>{data.off}</span></div>
             <Link to={'/shop'} className="cart-btn btn-lg">Shop Now</Link>
        
        </div>
       
       </section>
    );
}

export default ShopBanner ;