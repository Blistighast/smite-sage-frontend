import styles from "@/styles/itemPage.module.scss";

interface MenuItem {
  Description: string;
  Value: string;
}

interface Item {
  item: {
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
  };
}

const ItemCardBottom: React.FC<Item> = ({ item }) => {
  return (
    <div>
      <div>
        <div>{item.Type}</div>
      </div>
    </div>
  );
};

export default ItemCardBottom;
