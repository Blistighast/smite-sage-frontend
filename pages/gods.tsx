import Gods from "../components/Gods";

interface GodsProps {
  gods: [
    god: {
      Name: string;
      Pantheon: string;
      Roles: string;
      godCard_URL: string;
      godIcon_URL: string;
      id: number;
      _id: number;
    }
  ];
}

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const GodsPage = ({ gods }: GodsProps) => {
  return <Gods gods={gods} />;
};

export async function getStaticProps() {
  const resp = await fetch(`${serverUrl}/getgods`, {
    // next: { revalidate: 60 * 60 * 24 },
  });
  const godsData = await resp.json();
  return {
    props: { gods: godsData },
    revalidate: 60 * 60 * 24, //in seconds
  };
}

export default GodsPage;
