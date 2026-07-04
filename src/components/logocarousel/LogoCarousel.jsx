import styles from './logocarousel.module.css'
const logos = [
    "/image/company-logos/1.png",
    "/image/company-logos/2.png",
    "/image/company-logos/3.png",
    "/image/company-logos/4.png",
    "/image/company-logos/5.png"
];
const LogoCarousel = () => {
    const repeatLogo = [...logos, ...logos];

    return (
        <div className={styles.logoCarouselSection}>
            <div className={styles.carouselWrapper}>
                <div className={styles.carouselTrack}>
                    {repeatLogo.map((logo, index) => (
                        <div className={styles.singleLogoItem} key={index}>
                            <img src={logo} alt={`logo ${index}`} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
export default LogoCarousel;