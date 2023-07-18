import { useRouter } from "next/router";

import Player from "../../components/Player";
import { useEffect, useState } from "react";

export default function PlayerPage() {
  const [queryName, setQueryName] = useState<string | string[] | undefined>("");
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { name } = router.query;
      setQueryName(name);
    }
  }, [router.isReady, router.query]);

  return <Player name={queryName} />;
}
