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
  const statsDisplay = item?.ItemDescription.Menuitems[0]
    ? styles.itemBottomStats
    : styles.itemBottomNoStats;

  // consumable, relic, starter item, passive, glyph?, evolved?

  const itemGroup = (item: ItemProps["item"]) => {
    if (item.Type === "Consumable") return "consumable";
    if (item.Type === "Active") return "relic";
    if (item.StartingItem === true) return "starter";
    if (item.StartingItem === false) return "passive";
  };

  return (
    <div>
      {itemGroup(item) === "passive" && (
        <div>
          <span className={styles.itemCardBottom}>
            <div className={`${styles.itemSideTitles} ${statsDisplay}`}>
              <p>Type</p>
              <p>Tier</p>
              <p>Price</p>
              <p>Desc</p>
              {item.ItemDescription.Menuitems[0] ? <p>Stats</p> : null}
            </div>
            <div className={`${styles.itemSideInfo} ${statsDisplay}`}>
              <p>
                {item.Glyph === "y" && "Glyph "}
                {item.ItemTier === 4 && item.Glyph === "n" && "Evolved "}
                {item.Glyph === "n" && item.ItemTier !== 4 && "Passive "}
                {item.Type}
              </p>
              <p>Tier {item.ItemTier}</p>
              <p>{item.Price}</p>
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
        </div>
      )}
    </div>
  );
};

export default ItemCardBottom;
