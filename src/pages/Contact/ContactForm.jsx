const ContactForm = ({
    title,
    para,
    success,
    handleSubmit,
    name,
    setName,
    errors,
    email,
    setEmail,
    phone,
    setPhone,
    subject,
    setSubject,
    message,
    setMessage
}) => {
    return (
        <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="form-title">
                <h2>{title}</h2>
                <p>{para}</p>
            </div>
            <div id="form_status"></div>
            <div className="contact-form">
                {success && <div className="success-message">{success}</div>}
                <form type="POST" id="fruitkha-contact" onSubmit={handleSubmit} >
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <span className="text-danger">{errors.name}</span>}
                        </div>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <input
                                type="tel"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {errors.phone && <span className="text-danger">{errors.phone}</span>}
                        </div>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <input
                                type="text"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            {errors.subject && <span className="text-danger">{errors.subject}</span>}
                        </div>
                    </div>

                    <div style={{ marginTop: "1rem" }}>
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            cols={30}
                            rows={5}
                        ></textarea>
                        {errors.message && <span className="text-danger">{errors.message}</span>}
                    </div>
                    <p ><input type="submit" value="Submit" /></p>
                </form>
            </div>
        </div>

    );
}

export default ContactForm;