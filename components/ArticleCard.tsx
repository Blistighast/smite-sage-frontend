import Link from "next/link";
import { DateTime } from "luxon";

import styles from "@/styles/homepage.module.scss";

interface ArticleProps {
  article: {
    _id: number;
    type: string;
    articleUrl: string;
    headline: string;
    datePosted: string;
    imageUrl: string;
  };
}

const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
  let articleTypeDisplay;
  let articleTypeClass;

  if (article.type === "majorPatchInfo") {
    articleTypeClass = styles.articleMajor;
    articleTypeDisplay = (
      <h3 className={styles.articleTypeTitle}>Latest Major Patch</h3>
    );
  } else if (article.type === "minorPatchInfo") {
    articleTypeClass = styles.articleMinor;
    articleTypeDisplay = (
      <h3 className={styles.articleTypeTitle}>Latest Minor Patch</h3>
    );
  } else if (article.type === "godInfo") {
    articleTypeClass = styles.articleGodInfo;
    articleTypeDisplay = (
      <h3 className={styles.articleTypeTitle}>New & Upcoming Gods</h3>
    );
  } else {
    articleTypeClass = styles.articleSeasonInfo;
    articleTypeDisplay = (
      <h3 className={styles.articleTypeTitle}>Latest Season</h3>
    );
  }

  return (
    <Link
      href={article.articleUrl}
      target="_blank"
      className={`${styles.article} ${articleTypeClass} ${styles.shineContainer}`}
      style={{
        backgroundImage: `url(${article.imageUrl})`,
      }}
    >
      <span className={styles.shine}></span>
      {articleTypeDisplay}
      <div className={styles.articleInfo}>
        <h3>{article.headline}</h3>
        <p>{DateTime.fromISO(article.datePosted).toRelative()}</p>
      </div>
      <span className={styles.shine}></span>
    </Link>
  );
};

export default ArticleCard;
