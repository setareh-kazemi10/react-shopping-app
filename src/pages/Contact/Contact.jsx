import { useEffect, useState } from "react";
import Copyright from "../../components/footer/copyright/copyright";
import Footer from "../../components/footer/Footer";
import { faAddressBook, faClock, faMap } from "@fortawesome/free-solid-svg-icons";
import BreadcrumbSection from "./BreadcrumbSection";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
    const [errors, setErrors] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(null)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^09\d{9}$/;


    const contactInfoList = [
        { title: "Shop Address", texts: ["Iran"], icon: faMap },
        { title: "Shop Hours", texts: ["MON - FRIDAY: 8 to 9 PM", "SAT - SUN: 10 to 8 PM"], icon: faClock },
        { title: "Contact", texts: ["Phone: +98912++++79", "Email: kazemisetareh977@gmail.com"], icon: faAddressBook }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(null)

        let newErrors = { name: "", email: "", phone: "", subject: "", message: "" };
        let hasError = false;
        if (name.trim().length < 3) {
            newErrors.name = "Name is required and must be at least 3 characters";
            hasError = true;
        }
        if (!emailPattern.test(email.trim())) {
            newErrors.email = "Please enter a valid email address";
            hasError = true;
        }
        if (!phonePattern.test(phone)) {
            newErrors.phone = "Phone number must start with 09 and contain 11 digits";
            hasError = true;
        }
        if (subject.trim() === "" || subject.length < 10 || subject.length > 50) {
            newErrors.subject = "Subject must be between 10 and 50 characters";
            hasError = true;
        }
        if (message.trim().length < 20) {
            newErrors.message = "Message is required and must be at least 20 characters";
            hasError = true;
        }
        if (hasError) {
            setErrors(newErrors);
            return;
        } else {
            setErrors(newErrors);
            setName("");
            setEmail("");
            setPhone("")
            setSubject("");
            setMessage("")
            setSuccess("send email successfully");
        }

    }
    useEffect(() => {
        if (!success) return;
        const timer = setTimeout(() => {
            setSuccess(null)
        }, 3000)
        return (() => clearTimeout(timer))
    }, [success])
    return (
        <>
          <Loader />
          <Navbar />
            <div className="search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="close-btn"><i className="fas fa-window-close"></i></span>
                            <div className="search-bar">
                                <div className="search-bar-tablecell">
                                    <h3>Search For:</h3>
                                    <input type="text" placeholder="Keywords" />
                                    <button type="submit">Search <i className="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BreadcrumbSection text="Get 24/7 Support" title="Contact us" />

            <div className="contact-from-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <ContactForm

                            title="Have you any question?"
                            para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!"
                            success={success}
                            handleSubmit={handleSubmit}
                            name={name}
                            setName={setName}
                            errors={errors}
                            email={email}
                            setEmail={setEmail}
                            phone={phone}
                            setPhone={setPhone}
                            subject={subject}
                            setSubject={setSubject}
                            message={message}
                            setMessage={setMessage}
                        />
                        <ContactInfo
                            contactInfoList={contactInfoList}
                        />
                    </div>
                </div>
            </div>
            <ContactMap
            title="Find Our Location" 
            mapUrl ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.42324808999!2d-118.34398767954286!3d34.09378509738966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd"
            />
            <Footer />
            <Copyright />
        </>
    );
}

export default Contact;