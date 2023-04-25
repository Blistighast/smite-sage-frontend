import ItemCard from "./ItemCard";

import styles from "@/styles/cards-container.module.scss";

interface ItemsProps {
  items: [
    item: {
      ItemId: number;
      DeviceName: string;
      ItemTier: number;
      StartingItem: boolean;
      itemIcon_URL: string;
      Glyph: string;
      Type: string;
      Price: number;
    }
  ];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <div>
      {items ? (
        <div className={`${styles.itemsContainer}`}>
          <h2>Consumables</h2>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter((item) => item.Type === "Consumable")
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
          <h2>Relics</h2>
          <h3>Base</h3>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter((item) => item.ItemTier === 1 && item.Type === "Active")
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
          <h3>Shards</h3>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter((item) => item.ItemTier === 2 && item.Type === "Active")
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
          <h3>Tier 1</h3>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter((item) => item.ItemTier === 3 && item.Type === "Active")
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
          <h3>Tier 2</h3>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter(
                (item) =>
                  item.ItemTier === 4 &&
                  item.Type === "Active" &&
                  item.Price === 300
              )
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
          <h3>Tier 3</h3>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter(
                (item) =>
                  item.ItemTier === 4 &&
                  item.Type === "Active" &&
                  item.Price === 500
              )
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
          <h2>Starter Items</h2>
          <h3>Tier 1</h3>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter(
                (item) =>
                  item.StartingItem === true &&
                  item.ItemTier === 1 &&
                  item.Type === "Item"
              )
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
          <h3>Tier 2</h3>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter(
                (item) =>
                  item.StartingItem === true &&
                  item.ItemTier === 2 &&
                  item.Type === "Item"
              )
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
          <h2>Passive Items</h2>
          <h3>Tier 1</h3>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter(
                (item) =>
                  item.ItemTier === 1 &&
                  item.StartingItem === false &&
                  item.Type === "Item"
              )
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
          <h3>Tier 2</h3>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter(
                (item) =>
                  item.ItemTier === 2 &&
                  item.StartingItem === false &&
                  item.Type === "Item"
              )
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
          <h3>Tier 3</h3>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter(
                (item) =>
                  item.ItemTier === 3 &&
                  item.StartingItem === false &&
                  item.Type === "Item"
              )
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
          <h3>Glyph</h3>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter(
                (item) =>
                  item.ItemTier === 4 &&
                  item.StartingItem === false &&
                  item.Glyph === "y" &&
                  item.Type === "Item"
              )
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
          <h3>Evolved</h3>
          <div className={`${styles.cardsContainer}`}>
            {items
              .filter(
                (item) =>
                  item.ItemTier === 4 &&
                  item.Glyph === "n" &&
                  item.Type === "Item"
              )
              .map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
          </div>
        </div>
      ) : (
        <p>Sorry, the server seems to be down</p>
      )}
    </div>
  );
};

export default Items;
