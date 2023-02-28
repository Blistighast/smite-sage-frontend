import Link from "next/link";

import styles from "@/styles/card.module.scss";
import Image from "next/image";

interface ItemProps {
  item: {
    ItemId: number;
    DeviceName: string;
    itemIcon_URL: string;
    Glyph: string;
    ItemTier: number;
    StartingItem: boolean;
  };
}

const ItemCard: React.FC<ItemProps> = ({ item }) => {
  return (
    <Link
      href={`/item/${item.ItemId}`}
      className={`${styles.card} ${styles.itemCard}`}
    >
      <Image
        className={styles.itemCardPic}
        src={item.itemIcon_URL}
        alt={`icon of ${item.DeviceName}`}
        width={30}
        height={30}
      />
      <p>{item.DeviceName}</p>
    </Link>
  );
};

export default ItemCard;
