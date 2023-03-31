import { useRouter } from "next/router";

import Player from "../../components/Player";

export default function PlayerPage() {
  const router = useRouter();

  return <Player name={router.query.name} />;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
