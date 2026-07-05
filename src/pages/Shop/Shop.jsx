import { useParams } from "react-router-dom";
import LogoCarousel from "../../components/logocarousel/LogoCarousel";
import Footer from "../../components/footer/Footer";
import Copyright from "../../components/footer/copyright/Copyright";
import { productList } from "../../api/ProductApi";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import BreadCrumb from "./BreadCrumb";
import ProductList from "./ProductList";
import Pagination from "../../components/Pagination/Pagination";
import CategoryFilter from "./CategoryFilter";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";

const Shop = () => {
    const cart = useContext(CartContext);
    const { productId } = useParams();
    const itemPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [selectCategory, setSelectCategory] = useState("All")
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem)
    const totalPage = Math.ceil((products.length) / itemPerPage);
    const productCategory = ["All", ...new Set(productList.map(item => item.category))];

    const handlePrev = () => {
        setCurrentPage(currentPage - 1)
    }
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    }


    const handleCategory = (item) => {
        setSelectCategory(item)
        item === "All"
            ? setProducts(productList)
            : setProducts(productList.filter((elem) => elem.category === item));
        setCurrentPage(1);

    }
    useEffect(() => {
        setProducts(productList)
    }, [])


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
            <BreadCrumb
                para="Fresh and Organic"
                title="Shop" />

            <div className="product-section mt-150 mb-150">
                <div className="container">

                    <CategoryFilter
                        productCategory={productCategory}
                        handleCategory={handleCategory}
                        selectCategory={selectCategory}
                    />

                    <ProductList
                        currentItems={currentItems}
                        cart={cart}
                    />

                    <Pagination
                        currentPage={currentPage}
                        handlePrev={handlePrev}
                        totalPage={totalPage}
                        setCurrentPage={setCurrentPage}
                        handleNext={handleNext}
                    />
                </div>
            </div>
            <LogoCarousel />
            <Footer />
            <Copyright />
        </>

    );
}

export default Shop;