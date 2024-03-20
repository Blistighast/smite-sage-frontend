import { Dispatch, SetStateAction } from "react";

import styles from "@/styles/godPage.module.scss";
import Header from "./Header";

interface Props {
  tab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const GodHeader: React.FC<Props> = ({ tab, setActiveTab }) => {
  const activeTab = (tabButton: string) => {
    return tab === tabButton ? styles.active : "";
  };

  return (
    <div className={styles.godHeader}>
      <button
        className={activeTab("lore")}
        onClick={() => {
          setActiveTab("lore");
        }}
      >
        Lore
      </button>
      <button
        className={activeTab("abilities")}
        onClick={() => {
          setActiveTab("abilities");
        }}
      >
        Abilities
      </button>
      <button
        className={activeTab("skins")}
        onClick={() => {
          setActiveTab("skins");
        }}
      >
        Skins
      </button>
    </div>
  );
};

export default GodHeader;
