const Breadcrumb = ({para , heading}) => {
    return (
        <div className="col-lg-8 offset-lg-2 text-center">
            <div className="breadcrumb-text">
                <p>{para}</p>
                <h1>{heading}</h1>
            </div>
        </div>
    );
}

export default Breadcrumb;