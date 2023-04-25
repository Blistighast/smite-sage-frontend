import Items from "./../components/Items";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

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

const ItemsPage: React.FC<ItemsProps> = ({ items }) => {
  return <Items items={items} />;
};

export async function getStaticProps() {
  const resp = await fetch(`${serverUrl}/getitems`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  const itemsData = await resp.json();
  return {
    props: { items: itemsData },
  };
}

export default ItemsPage;
