import { usePathname, useSearchParams } from "next/navigation";

import Player from "../../components/Player";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic"; //should fix search params bug of empty props

export default function PlayerPage() {
  const pathname = usePathname();

  return <Player name={pathname?.slice(8)} />; // slicing out /player/
}
