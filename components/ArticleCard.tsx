import Link from "next/link";
import { DateTime } from "luxon";

import styles from "@/styles/homepage.module.scss";
import Image from "next/image";

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
  } else articleTypeClass = styles.articleSeasonInfo;

  return (
    <Link
      href={article.articleUrl}
      className={`${styles.article} ${articleTypeClass}`}
      style={{
        backgroundImage: `url(${article.imageUrl})`,
      }}
    >
      {/* <Image
        className={styles.articleCardPic}
        src={article.imageUrl}
        alt={"picture of article featured image "}
        // width={400}
        // height={200}
        fill={true}
        // style={{ objectFit: "contain" }}
      /> */}
      {articleTypeDisplay}
      <div className={styles.articleInfo}>
        <h3>{article.headline}</h3>
        <p>{DateTime.fromISO(article.datePosted).toRelative()}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
