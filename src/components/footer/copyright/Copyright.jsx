import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faDribbble } from "@fortawesome/free-brands-svg-icons";
import styles from './copyright.module.css'
const Copyright = () => {
	const currentYear = new Date().getFullYear()
	const socials = [
		{ link: "https://facebook.com", icon: faFacebook },
		{ link: "https://twitter.com", icon: faTwitter },
		{ link: "https://instagram.com", icon: faInstagram },
		{ link: "https://linkedin.com", icon: faLinkedin },
		{ link: "https://dribbble.com", icon: faDribbble }
	]
	return (
		<div className={styles.copyright}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<p className={styles.copyrightPara}>Copyrights &copy; {currentYear}  - <a href="https://github.com/setareh-kazemi10" className={styles.copyrightLink}>Setareh Kazemi</a>,  All Rights Reserved.<br />
							Distributed By - <a href="https://github.com/setareh-kazemi10" className={styles.copyrightLink}>Themewagon</a>
						</p>
					</div>
					<div className="col-lg-6 text-right col-md-12">
						<div className="social-icons">
							<ul className={styles.socialIconsUl}>
								{
									socials.map((social, index) => (
										<li key={index} className={styles.socialIconsList}>
											<a href={social.link} target="_blank" rel="noopener noreferrer" className={styles.socialIconsLink}>
												<FontAwesomeIcon icon={social.icon} />
											</a>
										</li>
									))
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Copyright;