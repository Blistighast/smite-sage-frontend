import styles from "@/styles/cards-container.module.scss";

const GodsFilter: React.FC<any> = ({ gods, filteredGods, setFilteredGods }) => {
  const handleFilter = (godRole: string) => {
    setFilteredGods(
      gods.filter((god: { Roles: string }) => god.Roles === godRole)
    );
  };

  return (
    <div className={styles.search}>
      <span>
        <input id="search" type="text" />
        <button>Search</button>
      </span>
      <span>
        <button onClick={() => setFilteredGods(gods)}>All</button>
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
