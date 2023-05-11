import { useState } from "react";
import { useRouter } from "next/router";

import styles from "@/styles/search.module.scss";

interface searchProps {}

const Search: React.FC<searchProps> = () => {
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const goToSearchedPage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchInput);
    router.push(`/player/${searchInput}`);
    setSearchInput("");
  };

  return (
    <div className={styles.search}>
      <form onSubmit={(e) => goToSearchedPage(e)}>
        <input
          type="search"
          placeholder="Search for Player"
          onChange={(e) => handleSearch(e)}
          value={searchInput}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
