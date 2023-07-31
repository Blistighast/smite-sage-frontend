import { usePathname, useSearchParams } from "next/navigation";

import Player from "../../components/Player";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic"; //should fix search params bug of empty props

export default function PlayerPage({ params }: { params: { name: string } }) {
  const [queryName, setQueryName] = useState<
    string | string[] | undefined | null
  >("");

  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    setQueryName(searchParams.get("name"));
    console.log(pathname?.slice(8));
  }, [searchParams]);

  // return <Player name={params.name} />;
  // return <Player name={searchParams.get("name")} />;
  return <Player name={pathname?.slice(8)} />; // slicing out /player/
  // return <Player name={queryName} />;
}
