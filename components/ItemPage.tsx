import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "@/styles/itemPage.module.scss";
import Link from "next/link";
import ItemCardBottom from "./ItemCardBottom";

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
  StartingItem: boolean;
  Glyph: string;
  ItemDescription: {
    Description: string;
    SecondaryDescription: string;
    Menuitems: MenuItem[];
  };

  prevState: [];
}

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const ItemPage: React.FC<ItemProps> = ({ id }) => {
  const [item, setItem] = useState<Item>();

  const fetchItem = async () => {
    const resp = await fetch(`${serverUrl}/items/${id}`);
    const data = await resp.json();
    setItem(data[0]);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <>
      {item ? (
        <div className={styles.itemPage}>
          <div className={styles.itemMain}>
            <p>
              {item.DeviceName} is an <Link href={`/items/`}>item</Link> in{" "}
              <Link href={`/`}>Smite</Link>.
            </p>
            <h3>Details</h3>
            <hr />
            <p>{item.ItemDescription.Description}</p>
            <p>
              {item.ItemDescription.SecondaryDescription?.replace(
                "<n>",
                "\n\n"
              ).replaceAll(/<.*?>/g, "")}
            </p>
          </div>
          <div className={styles.itemSideCard}>
            <h2>{item.DeviceName}</h2>
            <Image
              src={item.itemIcon_URL}
              alt={`icon of ${item.DeviceName}`}
              width={200}
              height={200}
            />
            <ItemCardBottom item={item} />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ItemPage;
