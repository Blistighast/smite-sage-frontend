import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import GodPage from "../../components/GodPage";

interface GodData {
  god: {
    id: number;
    Name: string;
    Title: string;
    Lore: string;
    godIcon_URL: string;
    Type: string;
    Pantheon: string;
    Roles: string;
  };
}

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default function SingleGodPage({ god }: GodData) {
  return <GodPage god={god} />;
}

export async function getStaticPaths() {
  const resp = await fetch(`${serverUrl}/getgods`, {
    // next: { revalidate: 60 * 60 * 24 },
  });
  const godsData = await resp.json();

  const paths = godsData.map((god: GodData["god"]) => ({
    params: { name: god.Name },
  }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<{ god: GodData }> = async ({
  params,
}) => {
  const resp = await fetch(`${serverUrl}/gods/${params?.name}`);
  const godData = await resp.json();
  return {
    props: { god: godData[0] },
  };
};
// export default function SingleGodPage() {
//   const router = useRouter();
//   return <GodPage name={router.query.id} />;
// }

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }
