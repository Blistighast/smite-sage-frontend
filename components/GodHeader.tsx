import { Dispatch, SetStateAction } from "react";

import styles from "@/styles/godPage.module.scss";

interface Props {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

const GodHeader: React.FC<Props> = ({ tab, setTab }) => {
  return (
    <div className={styles.godHeader}>
      <button
        onClick={() => {
          setTab("lore");
        }}
      >
        Lore
      </button>
      <button
        onClick={() => {
          setTab("abilities");
        }}
      >
        Abilities
      </button>
      <button
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
