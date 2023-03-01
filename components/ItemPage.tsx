import { useEffect, useState } from "react";

interface ItemProps {
  id: string | string[] | undefined;
}
interface Item {
  ItemId: string;
  DeviceName: string;

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
    <div>{item ? <div>{item.DeviceName}</div> : <div>Loading...</div>}</div>
  );
};

export default ItemPage;
