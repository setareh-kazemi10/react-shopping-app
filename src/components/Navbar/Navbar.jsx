import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Header from "../Header/Header";
import Logo from "../Logo/Logo";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`top-header-area ${isScrolled ? "sticky" : ""}`} id="sticker">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                        <div className="main-menu-wrap">
                            <Logo />
                            <nav>
                                <Header />
                            </nav>
                            <a
                                className="mobile-show search-bar-icon"
                                href="#"
                                onClick={(e) => e.preventDefault()}
                            >
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                            <div className="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;