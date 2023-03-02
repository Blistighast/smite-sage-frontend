import { useRouter } from "next/router";

import GodPage from "../../components/GodPage";

export default function SingleGodPage() {
  const router = useRouter();

  return <GodPage id={router.query.id} />;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
