import { useRouter } from "next/router";

import styles from "@/styles/cards-container.module.scss";

interface searchProps {}

const Search: React.FC<searchProps> = () => {
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const goToSearchedPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push;
  };

  return (
    <div className={styles.search}>
      <form onSubmit={(e) => goToSearchedPage(e)}>
        <input type="search" placeholder="" onChange={(e) => handleSearch(e)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
