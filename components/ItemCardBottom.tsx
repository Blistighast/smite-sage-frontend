import styles from "@/styles/itemPage.module.scss";

interface MenuItem {
  Description: string;
  Value: string;
}

interface ItemProps {
  item: {
    ItemId: number;
    DeviceName: string;
    itemIcon_URL: string;
    Price: number;
    ShortDesc: string;
    Type: string;
    ItemTier: number;
    StartingItem: boolean;
    Glyph: string;
    ItemDescription: {
      Description: string;
      SecondaryDescription: string;
      Menuitems: MenuItem[];
    };
  };
}

const ItemCardBottom: React.FC<ItemProps> = ({ item }) => {
  const itemGroup = (item: ItemProps["item"]) => {
    if (item.Type === "Consumable") return "consumable";
    if (item.Type === "Active") return "relic";
    if (item.Type === "Item") return "passive";
  };

  const itemEvolve =
    item.ItemTier === 4 && item.Glyph === "n"
      ? styles.itemEvolved
      : styles.itemPassive;

  return (
    <>
      {itemGroup(item) === "consumable" && (
        <span className={styles.itemCardBottom}>
          <div className={`${styles.itemSideTitles} ${styles.itemConsumable}`}>
            <p>Type</p>
            <p>Price</p>
            <p>Desc</p>
          </div>
          <div className={`${styles.itemSideInfo} ${styles.itemConsumable}`}>
            <p>{item.Type}</p>
            <p>{item.Price}</p>
            <p>{item.ShortDesc.replace(/[.]/g, "")}</p>
          </div>
        </span>
      )}
      {itemGroup(item) === "relic" && (
        <span className={styles.itemCardBottom}>
          <div className={`${styles.itemSideTitles} ${styles.itemRelic}`}>
            <p>Type</p>
            <p>Tier</p>
            <p>Price</p>
            <p>Desc</p>
          </div>
          <div className={`${styles.itemSideInfo} ${styles.itemRelic}`}>
            <p>Relic</p>
            {item.ItemTier === 1 && <p>Base</p>}
            {item.ItemTier === 2 && <p>Shard</p>}
            {item.ItemTier === 3 && <p>Tier 1</p>}
            {item.ItemTier === 4 && item.Price === 300 && <p>Tier 2</p>}
            {item.ItemTier === 4 && item.Price === 500 && <p>Tier 3</p>}
            {item.ItemTier === 1 && <p>Starting</p>}
            {item.ItemTier !== 1 && <p>{item.Price}</p>}
            <p>{item.ShortDesc.replace(/[.]/g, "")}</p>
          </div>
        </span>
      )}
      {itemGroup(item) === "passive" && (
        <span className={`${styles.itemCardBottom}`}>
          <div className={`${styles.itemSideTitles} ${itemEvolve}`}>
            <p>Type</p>
            <p>Tier</p>
            {(item.ItemTier !== 4 || item.Glyph === "y") && <p>Price</p>}
            <p>Desc</p>
            <p>Stats</p>
          </div>
          <div className={`${styles.itemSideInfo} ${itemEvolve}`}>
            <p>
              {item.StartingItem && "Starter "}
              {item.Glyph === "y" && "Glyph "}
              {item.ItemTier === 4 && item.Glyph === "n" && "Evolved "}
              {item.Glyph === "n" &&
                item.ItemTier !== 4 &&
                !item.StartingItem &&
                "Passive "}
              {item.Type}
            </p>
            <p>Tier {item.ItemTier}</p>
            {(item.ItemTier !== 4 || item.Glyph === "y") && <p>{item.Price}</p>}

            <p>{item.ShortDesc.replace(/[.]/g, "")}</p>
            <div className={styles.stats}>
              {item.ItemDescription.Menuitems.map((menuItem, i) => (
                <div key={i}>
                  <p>{menuItem.Value}</p>
                  <p>{menuItem.Description}</p>
                </div>
              ))}
            </div>
          </div>
        </span>
      )}
    </>
  );
};

export default ItemCardBottom;
