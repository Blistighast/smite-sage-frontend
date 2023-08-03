import { usePathname } from "next/navigation";

import Player from "../../components/Player";

export const dynamic = "force-dynamic"; //should fix search params bug of empty props

export default function PlayerPage() {
  const pathname = usePathname();

  console.log(pathname?.replace("/player/", ""));
  return <Player name={pathname?.replace("/player/", "")} />;
}
