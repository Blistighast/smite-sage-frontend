import { Dispatch, SetStateAction } from "react";

import styles from "@/styles/godPage.module.scss";

interface Props {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

const GodHeader: React.FC<Props> = ({ tab, setTab }) => {
  const activeTab = (tabButton: string) => {
    return tab === tabButton ? styles.active : "";
  };

  return (
    <div className={styles.godHeader}>
      <button
        className={activeTab("lore")}
        onClick={() => {
          setTab("lore");
        }}
      >
        Lore
      </button>
      <button
        className={activeTab("abilities")}
        onClick={() => {
          setTab("abilities");
        }}
      >
        Abilities
      </button>
      <button
        className={activeTab("skins")}
        onClick={() => {
          setTab("skins");
        }}
      >
        Skins
      </button>
    </div>
  );
};

export default GodHeader;
