import { useEffect } from "react";

import Gods from "../components/Gods";

// interface GodProps {
//   gods: [
//     god: {
//       Name: string;
//       Pantheon: string;
//       Roles: string;
//       godCard_URL: string;
//       godIcon_URL: string;
//       id: number;
//       _id: number;
//     }
//   ];
// }

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const GodsPage = ({ godsData }) => {
  return <Gods gods={godsData} />;
};

export async function getStaticProps() {
  const resp = await fetch(`${serverUrl}/getgods`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  const godsData = await resp.json();
  return {
    props: { godsData },
    // revalidate: 60 * 60 * 24, //in seconds
  };
}

export default GodsPage;
