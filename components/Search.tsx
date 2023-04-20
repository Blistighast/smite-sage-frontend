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
    router.push(`/player/${searchInput}`);
    setSearchInput("");
  };

  return (
    <div className={styles.search}>
      <form onSubmit={(e) => goToSearchedPage(e)}>
        <input
          type="search"
          placeholder="Search for a Player"
          onChange={(e) => handleSearch(e)}
          value={searchInput}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
