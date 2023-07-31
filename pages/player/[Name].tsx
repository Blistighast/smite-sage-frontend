import { useSearchParams } from "next/navigation";

import Player from "../../components/Player";
import { useEffect, useState } from "react";

export default function PlayerPage() {
  const [queryName, setQueryName] = useState<
    string | string[] | undefined | null
  >("");

  const searchParams = useSearchParams();

  useEffect(() => {
    setQueryName(searchParams.get("name"));
  }, [searchParams]);

  return <Player name={queryName} />;
}
