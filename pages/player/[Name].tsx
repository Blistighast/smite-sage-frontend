import { useSearchParams } from "next/navigation";

import Player from "../../components/Player";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic"; //should fix search params bug of empty props

export default function PlayerPage() {
  const [queryName, setQueryName] = useState<
    string | string[] | undefined | null
  >("");

  const searchParams = useSearchParams();

  useEffect(() => {
    setQueryName(searchParams.get("name"));
  }, [searchParams]);

  return <Player name={searchParams.get("name")} />;
  // return <Player name={queryName} />;
}
