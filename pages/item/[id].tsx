import { useRouter } from "next/router";

import ItemPage from "../../components/ItemPage";

export default function SingleItemPage() {
  const router = useRouter();

  return <ItemPage id={router.query.id} />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
