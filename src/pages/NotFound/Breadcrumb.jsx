const Breadcrumb = ({ para, heading }) => {
    return (
        <div className="breadcrumb-text">
            <p>{para}</p>
            <h1>{heading}</h1>
        </div>
    );
}

export default Breadcrumb;