import { Link, useParams } from "react-router-dom";
import Copyright from "../../../components/footer/copyright/copyright";
import Footer from "../../../components/footer/Footer";
import LogoCarousel from "../../../components/logocarousel/LogoCarousel";
import { newsList } from "../../../api/NewsApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState} from "react";
import Comment from "./Comment";
import Navbar from "../../../components/Navbar/Navbar";

const SingleNews = () => {
    const [nameInput, setNameInput] = useState("");
    const [error, setError] = useState({ name: "", email: "", message: "" })
    const [emailInput, setEmailInput] = useState("");
    const [message, setMessage] = useState("");
    const [comment, setComment] = useState([]);
    const [replyTo, setReplyTo] = useState(null);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dateComment = new Date();
    const year = dateComment.getFullYear();
    const month = dateComment.toLocaleString('en-US', { month: 'short' });
    const day = dateComment.getDate()
    const yearMonth = `${year}-${month} -${day}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false;
        let newError = { name: "", email: "", message: "" }
        if (nameInput.trim() === "" || nameInput.length <= 2) {
            newError.name = "Name must be at least 3 characters.";
            hasError = true;

        } if (emailInput.trim() === "" || !emailPattern.test(emailInput)) {
            newError.email = "Please enter a valid email.";
            hasError = true;

        } if (message.trim() === "" || message.length <= 10) {
            newError.message = "Message must be at least 10 characters.";
            hasError = true;
        }
        if (hasError) {
            setError(newError);
            return;
        }
        if (replyTo) {
            const reply = {
                id: Date.now(),
                name : nameInput,
                message : message,
                date : yearMonth
            }

            setComment((prev) =>
                prev.map((c) => (
                    c.id === replyTo
                        ? { ...c, replies: [...c.replies, reply] }
                        : c
                ))
            )
            setReplyTo(null)
        } else{
           const newComment = {
            id: comment.length === 0 ? 1 : comment[comment.length - 1].id + 1,
            name: nameInput,
            email: emailInput,
            message: message,
            date: yearMonth,
            replies: []
        }
        setComment([...comment , newComment])
        }
        setNameInput("");
        setEmailInput("");
        setMessage("")

    }

    const { newsId } = useParams();
    const newsData = newsList.find((item) => item.id === Number(newsId));
    const recentNews = newsList
        .filter((news) => news.id != Number(newsId))
        .slice(-5)
        .reverse()

    const date = newsList.map((item) => item.date);
    const archiveData = date.reduce((acc, item) => {
        const dateList = new Date(item);
        const month = dateList.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        const year = dateList.getFullYear();
        const monthYear = `${month} ${year}`
        if (!acc[monthYear]) {
            acc[monthYear] = { postCount: 0 }
        }
        acc[monthYear].postCount += 1
        return acc

    }, {})

    const tags = newsList.flatMap((item) => item.tags);
    const tagData = [... new Set(tags)];
    const [input, setInput] = useState("");
    const filterTags = newsList.filter((item) => (
        item.tags.includes(input) && newsList
    ))

    return (
        <>
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
                                    <button type="submit">Search<FontAwesomeIcon icon={faSearch} /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Read the Details</p>
                                <h1>Single Article</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-article-section">
                                <div className="single-article-text">
                                    <img src={newsData.image} alt={newsData.title} style={{ height: "54vh" }} />
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user"></i>{newsData.author}</span>
                                        <span className="date"><i className="fas fa-calendar"></i> {newsData.date}</span>
                                    </p>
                                    <h2>{newsData.title}</h2>
                                    <p>{newsData.content}</p>
                                </div>
                                <Comment comment={comment} error={error} nameInput={nameInput} emailInput={emailInput} message={message} replyTo={replyTo} setEmailInput={setEmailInput} setNameInput={setNameInput} setMessage={setMessage} handleSubmit={handleSubmit} setReplyTo={setReplyTo}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-section">
                                <div className="recent-posts">
                                    <h4>Recent Posts</h4>
                                    <ul>
                                        {recentNews.map((item) => (
                                            <li key={item.id}><Link to={`/singlenews/${item.id}`}>{item.title}.</Link></li>
                                        ))}

                                    </ul>
                                </div>
                                <div className="archive-posts">
                                    <h4>Archive Posts</h4>
                                    <ul>
                                        {
                                            Object.entries(archiveData).map(([monthYear, count]) => (
                                                <li key={monthYear}><a href="single-news.html">{monthYear} ({count.postCount})</a></li>

                                            ))
                                        }

                                    </ul>
                                </div>
                                <div className="tag-section">
                                    <h4>Tags</h4>
                                    <ul>
                                        {tagData.map((item) => (
                                            <li key={item}><a onClick={() => setInput(item)}>{item}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <LogoCarousel />
            <Footer />
            <Copyright />
        </>
    );
}

export default SingleNews;