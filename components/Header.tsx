import { Dispatch, SetStateAction } from "react";

import styles from "@/styles/godPage.module.scss";

interface Props {
  tabNames: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const Header: React.FC<Props> = ({
  tabNames,
  activeTab: activeTab,
  setActiveTab: setActiveTab,
}) => {
  const currentTab = (tabButton: string) => {
    return activeTab.toLowerCase() === tabButton.toLowerCase()
      ? styles.active
      : "";
  };

  return (
    <div className={styles.godHeader}>
      {tabNames.map((tabName) => (
        <button
          key={tabName}
          className={currentTab(`${tabName}`)}
          onClick={() => {
            setActiveTab(`${tabName}`);
          }}
        >
          {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Header;
