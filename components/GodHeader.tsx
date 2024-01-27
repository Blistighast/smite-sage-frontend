import { Dispatch, SetStateAction } from "react";

interface Props {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

const GodHeader: React.FC<Props> = ({ tab, setTab }) => {
  return (
    <>
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
    </>
  );
};

export default GodHeader;
