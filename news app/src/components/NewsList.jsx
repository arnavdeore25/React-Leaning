import NewsCard from "./NewsCard";

function NewsList({ news }) {
    return (
        <div>
            {news.map((article, index) => (
                <NewsCard
                    key={index}
                    article={article}
                />
            ))}
        </div>
    );

}

export default NewsList;