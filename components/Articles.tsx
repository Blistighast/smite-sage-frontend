import ArticleCard from "./ArticleCard";

import styles from "@/styles/homepage.module.scss";

interface ArticleProps {
  articles: [
    article: {
      _id: number;
      type: string;
      articleUrl: string;
      headline: string;
      datePosted: string;
      imageUrl: string;
    }
  ];
}

const Articles: React.FC<ArticleProps> = ({ articles }) => {
  return (
    <div className={styles.articles}>
      {articles.map((article) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
