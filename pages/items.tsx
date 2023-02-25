import { useState, useEffect } from "react";

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
      <div>
        {items ? (
          items.map((item) => <div key={item.ItemId}>{item.DeviceName}</div>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Items;
