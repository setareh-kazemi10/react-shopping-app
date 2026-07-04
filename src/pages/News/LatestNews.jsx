
import NewsCard from "./NewsCard";
const LatestNews = ({ newsListPage }) => {
    return (
        <div className="row">
            {newsListPage.map((news) => (
                <NewsCard
                    key={news.id}
                    news={news}
                />
            ))}
        </div>
    );
}

export default LatestNews;