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

const ItemSorter: React.FC<ItemsProps> = ({ items }) => {
  return (
    <>
      <h3>Base</h3>
      <div className={`${styles.cardsContainer}`}>
        {items
          .filter((item) => item.ItemTier === 1 && item.Type === "Active")
          .map((item) => (
            <ItemCard key={item.ItemId} item={item} />
          ))}
      </div>
    </>
  );
};

export default ItemSorter;
