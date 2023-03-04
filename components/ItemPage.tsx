import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "@/styles/itemPage.module.scss";

interface ItemProps {
  id: string | string[] | undefined;
}

interface MenuItem {
  Description: string;
  Value: string;
}

interface Item {
  ItemId: number;
  DeviceName: string;
  itemIcon_URL: string;
  Price: number;
  ShortDesc: string;
  Type: string;
  ItemTier: number;
  ItemDescription: {
    Description: string;
    SecondaryDescription: string;
    Menuitems: MenuItem[];
  };

  prevState: [];
}

const ItemPage: React.FC<ItemProps> = ({ id }) => {
  const [item, setItem] = useState<Item>();

  const fetchItem = async () => {
    const resp = await fetch(`http://localhost:4000/items/${id}`);
    const data = await resp.json();
    setItem(data[0]);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      {item ? (
        <div className={styles.itemPage}>
          <div className={styles.itemMain}>
            <h2>Details</h2>
            <hr />
            <p>{item.ItemDescription.Description}</p>
            <p>{item.ItemDescription.SecondaryDescription}</p>
          </div>
          <div className={styles.itemSideCard}>
            <h2>{item.DeviceName}</h2>
            <Image
              src={item.itemIcon_URL}
              alt={`icon of ${item.DeviceName}`}
              width={200}
              height={200}
            />
            <span className={styles.itemCardBottom}>
              <div className={styles.itemSideTitles}>
                <p>Type</p>
                <p>Tier</p>
                <p>Price</p>
                <p>Desc</p>
                <p>Stats</p>
              </div>
              <div className={styles.itemSideInfo}>
                <p>{item.Type}</p>
                <p>Tier {item.ItemTier}</p>
                <p>{item.Price}</p>
                <p>{item.ShortDesc}</p>
                {item.ItemDescription.Menuitems.map((menuItem, i) => (
                  <div key={i}>
                    <p>{menuItem.Value}</p>
                    <p>{menuItem.Description}</p>
                  </div>
                ))}
              </div>
            </span>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ItemPage;
