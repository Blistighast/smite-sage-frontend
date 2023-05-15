import { GetStaticProps } from "next";

import ItemPage from "../../components/ItemPage";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default function SingleItemPage({ item }: ItemData) {
  return <ItemPage item={item} />;
}

export async function getStaticPaths() {
  const resp = await fetch(`${serverUrl}/getitems`);
  const itemsData = await resp.json();

  const paths = itemsData.map((item: ItemData["item"]) => ({
    params: { name: item.DeviceName },
  }));
  return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps<{ item: ItemData }> = async ({
  params,
}) => {
  const resp = await fetch(`${serverUrl}/items/${params?.name}`);
  const itemData = await resp.json();
  return {
    props: { item: itemData[0] },
    revalidate: 60 * 60 * 24,
  };
};

interface ItemData {
  item: {
    _id: number;
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
  };
}
interface MenuItem {
  Description: string;
  Value: string;
}
