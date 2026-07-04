import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import styles from './footer.module.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Footer = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(null);
	const [message, setMessage] = useState("")
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const pages = [
		{ title: "Home", path: "/" },
		{ title: "About", path: "/about" },
		{ title: "Shop", path: "/shop" },
		{ title: "News", path: "/news" },
		{ title: "Contact", path: "/contact" }
	];

	const contacts = [
		"Iran",
		"kazemisetareh977@gmail.com",
		"+98912++++779",
	];

	const handleEmail = (e) => {
		e.preventDefault();

		if (!emailPattern.test(email) || email.trim() === "") {
			setError("invalid Email");
			setMessage("");
			return;
		}

		setError(null);
		setMessage("Successfully subscribed 🎉");
		setEmail("");

	}
	useEffect(() => {
		if (error || message) {
			const timer = setTimeout(() => {
				setError(null);
				setMessage("")
			}, 3000);

			return (() => clearTimeout(timer))
		}

	}, [error, message])
	return (
		<div className={styles.footerArea}>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className={styles.footerBox}>
							<h2 className={styles.widgetTitle}>About us</h2>
							<p className={styles.footerBoxPara}>Hi, I'm Setareh Kazemi, a Front-End Developer passionate about building modern,
								responsive web applications with React, JavaScript, HTML, and CSS.</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className={styles.footerBox}>
							<h2 className={styles.widgetTitle}>Get in Touch</h2>
							<ul className={styles.footerBoxUl}>
								{contacts.map((contact, index) => (
									<li className={styles.footerBoxList} key={index}>{contact}</li>
								))}
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div >
							<h2 className={styles.widgetTitle}>Pages</h2>
							<ul className={styles.footerBoxUl}>
								{pages.map((page, index) => (
									<li className={styles.footerBoxPages} key={index}>
										<Link to={page.path} className={styles.footerBoxText}>
											<i className={styles.footerBoxPagesItem}>
												<FontAwesomeIcon icon={faAngleRight} /></i>
											{page.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="footer-box subscribe">
							<h2 className={styles.widgetTitle}>Subscribe</h2>
							<p className={styles.footerBoxPara}>Subscribe to our mailing list to get the latest updates.</p>
							<form onSubmit={handleEmail}>
								<input type="email" placeholder="Email" value={email} className={styles.footerBoxSubscribeEmail} onChange={(e) => setEmail(e.target.value)} />
								<button type="submit" className={styles.footerBoxSubscribeBtn} style={{ marginLeft: "3px" }}><i><FontAwesomeIcon icon={faPaperPlane} /></i></button>
								{error && <p className="text-danger">{error}</p>}
								{message && <p className="text-success text-center">{message}</p>}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Footer;