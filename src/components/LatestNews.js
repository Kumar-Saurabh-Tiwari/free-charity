import React from "react";
import "../styles/LatestNews.css";
import latestNews1 from "../assets/latest-news1.svg";
import latestNews2 from "../assets/latest-news2.svg";
import latestNews3 from "../assets/latest-news3.svg";

const articles = [
  {
    id: 1,
    tag: "WATER",
    title: "Bring together people who care about a cause",
    date: "15 Feb, 2023",
    image: latestNews1,
    progress:25
  },
  {
    id: 2,
    tag: "WATER",
    title: "Together people who care about a cause",
    date: "10 Feb, 2023",
    image: latestNews2,
    progress:25
  },
  {
    id: 3,
    tag: "WATER",
    title: "People who care about a cause",
    date: "7 Feb, 2023",
    image: latestNews3,
    progress:25
  },
];

const LatestNews = () => {
  return (
    <div className="latest-news">
      <h2 className="latest-news-header">Latest News</h2>
      <h1 className="latest-articles-header">Latest Articles</h1>
      <div className="articles">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <div
              className="article-image"
              style={{ backgroundImage: `url(${article.image})` }}
            >
              <span className="article-tag">{article.tag}</span>
            </div>
            <div className="article-info">
              <h3 className="article-title">{article.title}</h3>

              <div className="progress-bar-article">
              <div
                className="progress-article"
                style={{ width: `${article.progress}%` }}
              ></div>
            </div>

              <p className="article-date">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="newsletter">
        <div>
          <h2 className="newsletter-header">Newsletter</h2>
          <p className="newsletter-body">Bring together people who care about a cause</p>
        </div>
        <div className="newsletter-subscribe">
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
