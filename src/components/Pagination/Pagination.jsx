const Pagination = ({ currentPage, handlePrev, handleNext, setCurrentPage, totalPage }) => {
    return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="pagination-wrap">
                    <button disabled={currentPage === 1} onClick={handlePrev}>Prev</button>
                    {[...Array(totalPage)].map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => { e.preventDefault(); setCurrentPage(index + 1) }}
                            className={`${currentPage === index + 1 ? "active" : ""}`}
                        >
                            {index + 1}

                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPage}
                        onClick={handleNext}>Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pagination;