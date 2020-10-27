import React, { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";

const Article = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("http://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
    }, 5000);
  });
  return (
    <div className="article">
      <h2>All Article</h2>
      {articles &&
        articles.map((article) => (
          <div className="article" key="article.id">
            <h1>{article.title}</h1>
            <p>{article.body}</p>
          </div>
        ))}
      {!articles && [1, 2, 3].map((n) => <SkeletonArticle />)}
    </div>
  );
};

export default Article;
