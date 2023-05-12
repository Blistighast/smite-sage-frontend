import { useRouter } from "next/router";

import styles from "@/styles/cards-container.module.scss";

const GodsFilter: React.FC<any> = ({ gods, filteredGods, setFilteredGods }) => {
  const router = useRouter();

  const handleFilter = (godRole: string) => {
    setFilteredGods(
      gods.filter((god: { Roles: string }) => god.Roles === godRole)
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredGods(
      gods.filter((god: { Name: string }) =>
        god.Name.toLowerCase().startsWith(e.target.value.toLowerCase())
      )
    );
  };

  const goToGodPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/god/${filteredGods[0].id}`);
  };

  // const activeFilter = (path: string) => {
  //   return  ? styles.active : "";
  // };

  return (
    <div className={styles.search}>
      <form onSubmit={(e) => goToGodPage(e)}>
        <input
          type="search"
          placeholder="Search for a god"
          onChange={(e) => handleSearch(e)}
        />
        <button type="submit">Search</button>
      </form>
      <span>
        <button className={styles.active} onClick={() => setFilteredGods(gods)}>
          All
        </button>
        <button onClick={() => handleFilter("Warrior")}>Warrior</button>
        <button onClick={() => handleFilter("Hunter")}>Hunter</button>
        <button onClick={() => handleFilter("Mage")}>Mage</button>
        <button onClick={() => handleFilter("Guardian")}>Guardian</button>
        <button onClick={() => handleFilter("Assassin")}>Assassin</button>
      </span>
    </div>
  );
};

export default GodsFilter;
