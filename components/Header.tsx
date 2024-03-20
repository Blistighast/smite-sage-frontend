import { Dispatch, SetStateAction } from "react";

import styles from "@/styles/godPage.module.scss";

interface Props {
  tabNames: string[];
  currentTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const Header: React.FC<Props> = ({ tabNames, currentTab, setActiveTab }) => {
  const activeTab = (tabButton: string) => {
    return currentTab === tabButton ? styles.active : "";
  };

  return (
    <div className={styles.godHeader}>
      {tabNames.map((tabName) => (
        <button
          key={tabName}
          className={activeTab(`${tabName}`)}
          onClick={() => {
            setActiveTab(`${tabName}`);
          }}
        >
          {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
        </button>
      ))}
      {/* <button
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
      </button> */}
    </div>
  );
};

export default Header;
