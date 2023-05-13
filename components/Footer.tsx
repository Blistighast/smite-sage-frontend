import Link from "next/link";
import styles from "@/styles/runners.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <span>
        <p className="made-by">
          Made by&nbsp;
          <Link
            href={"https://brianguterl.com/"}
            className={styles.portfolioLink}
          >
            Brian Guterl
          </Link>
        </p>
        <p className="hi-rez">SMITE is owned by Hi-Rez</p>
      </span>
      <p>
        SmiteSage is not affiliated, associated, authorized, endorsed by, or in
        any way officially connected with Smite, Hi-Rez, or any of their
        subsidiaries or affiliates.
      </p>
    </footer>
  );
};

export default Footer;

//Todo
// authorship information
// copyright information
// contact information
// sitemap
// back to top links
// related documents
