import { useRouter } from "next/router";

import Player from "./../../components/Player";

export default function PlayerPage() {
  const router = useRouter();

  return <Player Name={router.query.Name} />;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
