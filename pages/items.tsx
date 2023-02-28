import { useState, useEffect } from "react";
import ItemCard from "./../components/ItemCard";

import styles from "@/styles/cards-container.module.scss";

const serverUrl = "http://localhost:4000";

interface ItemProps {
  item: {
    ItemId: string;
    DeviceName: string;
  };
}

const Items: React.FC<ItemProps> = () => {
  const [items, setItems] = useState<any[]>([]);

  const getItems = async () => {
    const resp = await fetch(`${serverUrl}/getitems`);
    const data = await resp.json();
    setItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <div className={`${styles.cardsContainer}`}>
        {items ? (
          items.map((item) => <ItemCard key={item.ItemId} item={item} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Items;
